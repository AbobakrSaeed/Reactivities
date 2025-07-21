using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator() : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.Id)
               .NotEmpty().WithMessage("Id is required.");
        
        RuleFor(x => x.ActivityDto.Date)
            .NotEmpty().WithMessage("Date is required.");
    }
}
