using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken);
            if (activity == null) throw new Exception("Activity not found");

            // Update all properties at once except the key
            context.Entry(activity).CurrentValues.SetValues(request.Activity); // we prefer to use auto mapper instead

            ///-----------PAID LICENSE REQUIRED--------------
            // Use AutoMapper to map the properties from request.Activity to activity
            // mapper.Map(request.Activity, activity);

            var result = await context.SaveChangesAsync(cancellationToken);

            if (result == 0)
            {
                throw new Exception("Failed to update activity.");
            }
          
        }

       
    }

}
