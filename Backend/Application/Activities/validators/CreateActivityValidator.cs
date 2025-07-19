using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.validators;

public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivityValidator(): base(x => x.ActivityDto)
    {
        ///-------- defined in the baseActivityValidator class -------///
        // RuleFor(x => x.ActivityDto.Title)
        //     .NotEmpty().WithMessage("Title is required.")
        //     .MaximumLength(100).WithMessage("Title must be less than 100 characters.");

        // RuleFor(x => x.ActivityDto.Description)
        //     .NotEmpty().WithMessage("Description is required.")
        //     .MaximumLength(500).WithMessage("Description must be less than 500 characters.");

        // RuleFor(x => x.ActivityDto.Date)
        //     .NotEmpty().WithMessage("Date is required.")
        //     .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in the future.");

        // RuleFor(x => x.ActivityDto.Category)
        //     .NotEmpty().WithMessage("Category is required.");

        // RuleFor(x => x.ActivityDto.City)
        //     .NotEmpty().WithMessage("City is required.");

        // RuleFor(x => x.ActivityDto.Venue)
        //     .NotEmpty().WithMessage("Venue is required.");
    }

}
