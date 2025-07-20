/* eslint-disable react/prop-types */

import { Box, Button, Typography, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import useActivities from "@libs/hooks/useActivities";
import ActivitySchema from "@libs/schemas/ActivitySchema";
import TextInput from "@app/shared/components/TextInput";
import DateTimeInput from "@app/shared/components/DateTimeInput";
import SelectInput from "@app/shared/components/SelectInput";
import LocationInput from "@app/shared/components/LocationInput";
import { categoryOptions } from "./categoryOptions";

export const ActivityForm = () => {
  const { id } = useParams();
  const { activity, updateActivity, createActivity } = useActivities(id);
  const navigate = useNavigate();

  const { reset, handleSubmit, control } = useForm({
    mode: "onTouched",
    resolver: zodResolver(ActivitySchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      city: "",
      venue: "",
      date: new Date(),
    },
  });

  if (activity && activity.date)
    activity.date = new Date(activity.date).toISOString().slice(0, 16);

  useEffect(() => {
    if (activity)
      reset({
        ...activity,
        location: {
          city: activity.city,
          venue: activity.venue,
          lat: activity.latitude,
          lng: activity.longitude,
        },
      });
  }, [activity, reset]);
  const onSubmit = async (data) => {
    const { location, ...rest } = data;
    const flattenedData = {
      ...rest,
      ...location,
    };
    console.log({ ...activity, ...flattenedData });

    try {
      if (activity) {
        await updateActivity.mutateAsync(
          { ...activity, ...flattenedData },
          {
            onSuccess: () => navigate(`/activities/${activity.id}`),
          }
        );
        navigate(`/activities/${id}`);
      } else {
        createActivity.mutate(flattenedData, {
          onSuccess: (id) => navigate(`/activities/${id}`),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 700,
          mx: "auto",
          p: 3,
          boxShadow: 4,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        {updateActivity.error && (
          <Typography>{updateActivity.error.message}</Typography>
        )}
        <Typography variant="h5" mb={3}>
          {activity ? "Edit Activity" : "Create Activity"}
        </Typography>

        <Grid container spacing={2} direction="column" width={"100%"}>
          <Grid item xs={12}>
            <TextInput control={control} name="title" label="Title" />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              control={control}
              name="description"
              label="Description"
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <DateTimeInput control={control} name="date" label="Date" />
          </Grid>

          <Grid item xs={12}>
            <SelectInput
              control={control}
              name="category"
              label="Category"
              items={categoryOptions}
            />
          </Grid>

          <Grid item xs={12}>
            <LocationInput
              control={control}
              name="location"
              label="Enter the location"
            />
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button
            component={Link}
            to={id ? `/activities/${id}` : "/"}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            {activity ? "Update" : "Create"}
          </Button>
        </Box>
      </Box>
    </>
  );
};
