using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.validators;

public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivityValidator() : base(x => x.ActivityDto)
    {
        ///-------- defined in the baseActivityValidator class -------///
        RuleFor(x => x.ActivityDto.Date)
           .NotEmpty().WithMessage("Date is required.")
           .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in the future.");

    }

}
