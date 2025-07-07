using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        // This property allows derived controllers to access the MediatR mediator instance
        // without needing to inject it in each controller. like // public class ActivitiesController(IMediator mediator) : BaseApiController
        
        private IMediator? _mediator;
        protected IMediator Mediator => _mediator
            ??= HttpContext.RequestServices.GetService<IMediator>()
            ?? throw new InvalidOperationException("Mediator not found in the service provider.");
    }
}
