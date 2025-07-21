using System;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> where TDto : BaseActivityDto
{

    public BaseActivityValidator(Func<T, TDto> selector)
    {
        RuleFor(x => selector(x).Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(100).WithMessage("Title must be less than 100 characters.");

        RuleFor(x => selector(x).Description)
            .NotEmpty().WithMessage("Description is required.")
            .MaximumLength(500).WithMessage("Description must be less than 500 characters.");


        RuleFor(x => selector(x).Category)
            .NotEmpty().WithMessage("Category is required.");

        RuleFor(x => selector(x).City)
            .NotEmpty().WithMessage("City is required.");

        RuleFor(x => selector(x).Venue)
            .NotEmpty().WithMessage("Venue is required.");

    }
}