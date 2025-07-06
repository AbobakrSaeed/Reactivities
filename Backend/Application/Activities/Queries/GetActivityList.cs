using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
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
