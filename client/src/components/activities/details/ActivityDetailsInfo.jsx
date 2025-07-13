/* eslint-disable react/prop-types */
import { CalendarToday, Info, Place } from "@mui/icons-material";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function ActivityDetailsInfo({activity}) {
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      {/* Description */}
      <Grid container alignItems="center" spacing={2} mb={1}>
        <Grid item xs={1}>
          <Info color="info" fontSize="large" />
        </Grid>
        <Grid item xs={11}>
          <Typography>{activity.description}</Typography>
        </Grid>
      </Grid>

      <Divider />

      {/* Date */}
      <Grid container alignItems="center" spacing={2} my={1}>
        <Grid item xs={1}>
          <CalendarToday color="info" fontSize="large" />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            {new Date(activity.date).toLocaleString(undefined, {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      {/* Location */}
      <Grid container alignItems="center" spacing={2} mt={1}>
        <Grid item xs={1}>
          <Place color="info" fontSize="large" />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            {activity.venue}, {activity.city}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
