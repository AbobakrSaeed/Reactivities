using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

// public class ActivitiesController(AppDbContext context, IMediator mediator) : BaseApiController
public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        // var activities = await context.Activities.ToListAsync();
        // return Ok(activities);

        //## instead of returning a list of activities, we can use MediatR to handle the query
        //## we define the logic inside the mediator instead of the controller
        //## this allows us to separate the concerns and keep the controller clean
        //## we can also use the mediator to handle the query and return the result

        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {
        // var activity = await context.Activities.FindAsync(id);
        // // If the activity is not found, return NotFound
        // if (activity == null) return NotFound();
        // // If the activity is found, return it
        // return Ok(activity);

        return await Mediator.Send(new GetActivityDetail.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(Activity activity)
    {
        await Mediator.Send(new EditActivity.Command { Activity = activity });

        return NoContent(); // Return 204 No Content status code
    }
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
        return Ok(); // Return 200 OK status code
        }
}
