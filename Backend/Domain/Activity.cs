using System;

namespace Domain;

// this class represents a table in the database 
// and is used to map the data from the database to the application

public class Activity
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; } 
    public required string Description { get; set; }
    public required DateTime Date { get; set; } 
    public required string Category { get; set; } 
    // Location information
    public required string City { get; set; }
    public required string Venue { get; set; }
    public required double Latitude { get; set; }
    public required double Longitude { get; set; } 

}
