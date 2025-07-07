using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    /// This class represents a query to get a list of activities.
    /// It implements the MediatR IRequest interface, which allows it to be handled by a MediatR handler.    
    public class Query : IRequest<List<Activity>>
    {
        // You can add any parameters needed for the query here
    }

    public  class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken);
             // Fetches all activities from the database asynchronously
        }
    }

}

/*
// simulate a delay to mimic a real-world scenario where the client might cancel the request
            for (var i = 0; i < 10; i++)
            {
                // If the cancellation is requested, throw an OperationCanceledException
                cancellationToken.ThrowIfCancellationRequested();
                await Task.Delay(200, cancellationToken);
                logger.LogInformation("Fetching activities... {Iteration}", i + 1);
            }
*/