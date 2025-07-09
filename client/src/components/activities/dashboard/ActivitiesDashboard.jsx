/* eslint-disable react/prop-types */
import { ActivityForm } from "../form/ActivityForm";
import ActivityDetailsCard from "./ActivityDetailsCard";
import { ActivityList } from "./ActivityList";
import { Grid } from "@mui/material";

import { useActivityContext } from "../../../context/useActivityContext";

const ActivitiesDashboard = () => {
  const {
    activities,
    isLoading,
    selectedActivity,
    formVisible,
    activityCardVisible,
    selectActivity,
    editActivity,
    hideForm,
    hideCard,
  } = useActivityContext();

  return (
    <>
      {isLoading ? (
        <Grid item xs={12}>
          <h2>Loading activities...</h2>
        </Grid>
      ) : (
        <Grid container spacing={4} mt={2}>
          <Grid xs={12} md={7}>
            <ActivityList activities={activities} onSelect={selectActivity} />
          </Grid>

          <Grid xs={12} md={5} position={"sticky"} top={50} height="100vh">
            {activityCardVisible && (
              <ActivityDetailsCard
                activity={selectedActivity}
                onEdit={editActivity}
                onCancel={hideCard}
              />
            )}
            {formVisible && (
              <ActivityForm
                onCancel={hideForm}
                initialData={selectedActivity}
              />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ActivitiesDashboard;
