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

  const hideForm = () => {
    setFormVisible(false);
  };
  const hideCard = () => setActivityCardVisible(false);

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
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
