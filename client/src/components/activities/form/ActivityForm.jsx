/* eslint-disable react/prop-types */

import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";

const categoryOptions = [
  "drinks",
  "culture",
  "music",
  "travel",
  "film",
  "food",
];

export const ActivityForm = ({ initialData, onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (initialData) data.id = initialData.id; // Include id if editing an existing activity
    onSubmit(data);
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
        <Typography variant="h5" mb={3}>
          {initialData ? "Edit Activity" : "Create Activity"}
        </Typography>

        <Grid container spacing={2} direction="column" width={500}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              defaultValue={initialData?.title || ""}
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
              defaultValue={initialData?.description || ""}
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
                initialData?.date
                  ? new Date(initialData.date).toISOString().slice(0, 16)
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
              defaultValue={initialData?.category || ""}
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
              defaultValue={initialData?.city || ""}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Venue"
              name="venue"
              defaultValue={initialData?.venue || ""}
              required
            />
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            {initialData ? "Update" : "Create"}
          </Button>
        </Box>
      </Box>
    </>
  );
};
