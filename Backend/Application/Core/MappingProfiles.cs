using System;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());// This is the default mapping
    }
}

// This is the mapping profile for AutoMapper
// It defines how to map between the Activity domain model and itself.
// In this case, we are mapping the Activity to itself, which means all properties will be mapped automatically.
// This is useful when we want to use AutoMapper to map the properties of the Activity
// without having to specify each property individually.
