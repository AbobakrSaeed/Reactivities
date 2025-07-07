using System.Reflection;
using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();


//## Register the DbContext with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

//##add cors services
builder.Services.AddCors();

//## Register MediatR for handling queries and commands
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());


var app = builder.Build();

//## add CORS middleware
app.UseCors(policy =>
    policy.AllowAnyOrigin() // Allow any origin
          .AllowAnyMethod() // Allow any HTTP method (GET, POST, etc.)
          .AllowAnyHeader() // Allow any header
          .AllowAnyOrigin()); // Allow specific origin
//.WithOrigins("http://localhost:5173", "https://localhost:5173")

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//## Initialize the database with seed data
using var scope = app.Services.CreateScope(); // Create a scope to resolve services
var services = scope.ServiceProvider; // Get the service provider

try
{
    AppDbContext context = services.GetRequiredService<AppDbContext>(); // Resolve the AppDbContext
    await context.Database.MigrateAsync(); // Apply any pending migrations
    await DbInitializer.SeedData(context); // Seed the database with initial data
    Console.WriteLine("Database initialized and seeded successfully.");
}
catch (Exception ex)
{
    ILogger<Program> logger = services.GetRequiredService<ILogger<Program>>(); // Resolve the logger
    logger.LogError(ex, "An error occurred during database initialization and seeding.");
}
////////////////////////

app.Run();
