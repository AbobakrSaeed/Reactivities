using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

//## Register the DbContext with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

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
