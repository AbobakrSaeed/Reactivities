/* eslint-disable react/prop-types */

import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import useActivities from "../../../libs/hooks/useActivities";
import { Link, useNavigate, useParams } from "react-router";

const categoryOptions = [
  "drinks",
  "culture",
  "music",
  "travel",
  "film",
  "food",
];

export const ActivityForm = () => {
  const { id } = useParams();
  const { activity, updateActivity, createActivity } = useActivities(id);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // to convert from "2025-05-05T18:08" to "2025-05-05T18:08:53.974063"
    // data.date = new Date(data.date).toISOString().replace("Z", "");

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data);
      navigate(`/activities/${id}`);
    } else {
      createActivity.mutate(data, {
        onSuccess: (id) => navigate(`/activities/${id}`),
      });
      navigate(`/activities`);
    }
    e.target.reset(); // Reset the form after submission
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
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

        <Grid container spacing={2} direction="column" width={500}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              defaultValue={activity?.title || ""}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={3}
              defaultValue={activity?.description || ""}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="datetime-local"
              defaultValue={
                // to convert from "2025-05-05T18:08:53.974063" to "2025-05-05T18:08"
                activity?.date
                  ? new Date(activity.date).toISOString().slice(0, 16)
                  : ""
              }
              //   required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Category"
              name="category"
              defaultValue={activity?.category || ""}
              required
            >
              {categoryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              name="city"
              defaultValue={activity?.city || ""}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Venue"
              name="venue"
              defaultValue={activity?.venue || ""}
              required
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
