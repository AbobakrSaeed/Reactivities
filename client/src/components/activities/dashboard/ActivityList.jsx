/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

export const ActivityList = ({ activities }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id || activity.title}
              activity={activity}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
