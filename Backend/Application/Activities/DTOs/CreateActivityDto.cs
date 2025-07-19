using System;
using System.ComponentModel.DataAnnotations;

namespace Application.Activities.DTOs;

public class CreateActivityDto: BaseActivityDto
{
    

}

//#### if we don't use fluent validation, then we can use this 
// public class CreateActivityDto
// {
//     [Required]
//     public string Title { get; set; }
//     [Required]
//     public string Description { get; set; }
//     [Required]
//     public DateTime Date { get; set; }
//     [Required]
//     public string Category { get; set; }
//     [Required]
//     public string City { get; set; }
//     [Required]
//     public string Venue { get; set; }

// }
