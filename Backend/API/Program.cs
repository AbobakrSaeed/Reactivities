using API.Middleware;
using Application.Activities.Queries;
using Application.Activities.validators;
using Application.Core;
using Domain;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Persistence;


//--------------------------------------------
// Create builder
//--------------------------------------------
var builder = WebApplication.CreateBuilder(args);


//--------------------------------------------
// Services
//--------------------------------------------


builder.Services.AddControllers(options =>
    {
        var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
        options.Filters.Add(new AuthorizeFilter(policy));
    }
);


// Register DbContext with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));


// Register MediatR
builder.Services.AddMediatR(x =>
{
    x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>();
    x.AddOpenBehavior(typeof(ValidationBehavior<,>));
}); // add the validation middleware

// Register AutoMapper with license key (AutoMapper v15+)
builder.Services.AddAutoMapper(cfg =>
{
    cfg.LicenseKey = builder.Configuration["AutoMapper:LicenseKey"]; // Best to store in appsettings.json or secrets
    // ✅ Manually add profiles from the Application assembly
    cfg.AddMaps(typeof(MappingProfiles).Assembly);
});

// register the fluent validation assembly
builder.Services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();

// register the exception middleware 
builder.Services.AddTransient<ExceptionMiddleware>();

// register the identity service
builder.Services.AddIdentityApiEndpoints<User>(
    options =>
    {
        options.User.RequireUniqueEmail = true;
    }
).AddRoles<IdentityRole>().AddEntityFrameworkStores<AppDbContext>();

// CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
            //   .AllowCredentials();
    });
});
//--------------------------------------------
// Build app
//--------------------------------------------
var app = builder.Build();


//--------------------------------------------
// Middleware
//--------------------------------------------

// use the exception middleware
app.UseMiddleware<ExceptionMiddleware>();
// cors
app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapGroup("api").MapIdentityApi<User>();

//--------------------------------------------
// DB Initialization
//--------------------------------------------
using var scope = app.Services.CreateScope(); // Create a scope to resolve services
var services = scope.ServiceProvider; // Get the service provider

try
{
    AppDbContext context = services.GetRequiredService<AppDbContext>(); // Resolve the AppDbContext
    var userManager = services.GetRequiredService<UserManager<User>>(); // Resolve the AppDbContext

    await context.Database.MigrateAsync(); // Apply any pending migrations
    await DbInitializer.SeedData(context, userManager); // Seed the database with initial data
    Console.WriteLine("✅ Database initialized and seeded.");
}
catch (Exception ex)
{
    ILogger<Program> logger = services.GetRequiredService<ILogger<Program>>(); // Resolve the logger
    logger.LogError(ex, "❌ Database initialization failed.");
}

//--------------------------------------------
app.Run();
