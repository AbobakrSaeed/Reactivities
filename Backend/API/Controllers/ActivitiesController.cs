using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

// instead of using constructor injection for AppDbContext and IMediator in every controller, we define them in base controller and inherit from it
// public class ActivitiesController(AppDbContext context, IMediator mediator) : BaseApiController
public class ActivitiesController : BaseApiController
{
    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken cancellationToken)
    {
        // throw new Exception("server error testing");
        return await Mediator.Send(new GetActivityList.Query(), cancellationToken);
    }

    // [Authorize], instead of using [Authorize] attribute for each endpoint, we will define an authorization policy in program.cs 
    // and use [AllowAnonymous] attribute for endpoints that don't require authentication
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {
        return HandleResult(await Mediator.Send(new GetActivityDetail.Query { Id = id }));
    }

    [HttpPost]
    //if we are using IMapper, we can use CreateActivity(CreateActinvityDto activityDto) 
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDto)
    {
        return HandleResult(await Mediator.Send(new CreateActivity.Command { ActivityDto = activityDto }));
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(EditActivityDto activity)
    {
        return HandleResult(await Mediator.Send(new EditActivity.Command { ActivityDto = activity }));

    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        return HandleResult(await Mediator.Send(new DeleteActivity.Command { Id = id }));

    }
}


//## instead of returning a list of activities, we can use MediatR to handle the query
//## we define the logic inside the mediator instead of the controller
//## this allows us to separate the concerns and keep the controller clean
//## we can also use the mediator to handle the query and return the result