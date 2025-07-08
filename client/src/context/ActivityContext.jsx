/* eslint-disable react/prop-types */
// context/ActivityContext.js
import { createContext, useContext, useState } from "react";
import useActivities from "../libs/hooks/useActivities";

const ActivityContext = createContext();

export const useActivityContext = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
  const [selectedActivity, setSelectedActivity] = useState(undefined);
  const [formVisible, setFormVisible] = useState(false);
  const [activityCardVisible, setActivityCardVisible] = useState(false);

  const { data: activities, isLoading, error } = useActivities();

  const showCreateForm = () => {
    setSelectedActivity(undefined);
    setActivityCardVisible(false);
    setFormVisible(true);
  };

  const selectActivity = (activity) => {
    setSelectedActivity(activity);
    setActivityCardVisible(true);
    setFormVisible(false);
  };

  const editActivity = () => {
    setActivityCardVisible(false);
    setFormVisible(true);
  };

  const deleteActivity = (activityId) => {
    // setActivities(activities.filter((activity) => activity.id !== activityId));
    // if (activityId == selectedActivity?.id) {
    //   setSelectedActivity(undefined);
    //   setActivityCardVisible(false);
    //   setFormVisible(false);
    // }
  };

  const hideForm = () => setFormVisible(false);
  const hideCard = () => setActivityCardVisible(false);

  const onFormSubmit = (activity) => {
    console.log("Form Data Submitted:", activity);

    // If activity has an id, update existing activity
    // if (activity.id) {
    //   setActivities(
    //     activities.map((a) => (a.id === activity.id ? activity : a))
    //   );
    //   setSelectedActivity(activity);
    // }
    // // Create new activity
    // else {
    //   const newActivity = {
    //     ...activity,
    //     id: Date.now(), // Using Date.now() as a temporary unique ID
    //   };

    //   setActivities((prevActivities) => [...prevActivities, newActivity]);
    //   setSelectedActivity(newActivity);
    // }
    // setFormVisible(false);
    // setActivityCardVisible(true);
  };

  return (
    <ActivityContext.Provider
      value={{
        selectedActivity,
        formVisible,
        activityCardVisible,
        activities,
        isLoading,
        error,
        showCreateForm,
        selectActivity,
        editActivity,
        hideForm,
        hideCard,
        onFormSubmit,
        deleteActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
