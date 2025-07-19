using System;
using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Command : IRequest<Result<string>> // return a string
    {
        //** public required Activity Activity { get; set; }
        public required CreateActivityDto ActivityDto { get; set; }
    }

    //, Handler(AppDbContext context, IMapper mapper, IValidator<Command> validator)
    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<string>>
    {
        public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
        {

            //** await validator.ValidateAndThrowAsync(request, cancellationToken);// validation is defined in the middleware Core/ValidationBehavior.cs
            var activity = mapper.Map<Activity>(request.ActivityDto);
            context.Activities.Add(activity);
            
            var result = await context.SaveChangesAsync(cancellationToken) > 0;
            if (!result) return Result<string>.Failure("Failed to create activity", 400);

            return Result<string>.Success(activity.Id);
        }
    }
}
