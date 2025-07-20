/* eslint-disable react/prop-types */

import { ActivityList } from "./ActivityList";
import { Grid } from "@mui/material";

import { useActivityContext } from "../../../context/useActivityContext";
import ActivityFilters from "./ActivityFilters";

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

          <Grid xs={12} md={5} position={"sticky"} top={50} height="100vh">
            <ActivityFilters />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ActivitiesDashboard;
