/* eslint-disable react/prop-types */

import { ActivityList } from "./ActivityList";
import { Grid } from "@mui/material";

import { useActivityContext } from "../../../context/useActivityContext";

const ActivitiesDashboard = () => {
  const { activities, isLoading } = useActivityContext();

  return (
    <>
      {isLoading ? (
        <Grid item xs={12}>
          <h2>Loading activities...</h2>
        </Grid>
      ) : (
        <Grid container spacing={4} mt={2}>
          <Grid xs={12} md={7}>
            <ActivityList activities={activities} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ActivitiesDashboard;
