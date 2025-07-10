/* eslint-disable react/prop-types */
// context/ActivityContext.js
import { createContext, useContext } from "react";
import useActivities from "../libs/hooks/useActivities";

const ActivityContext = createContext();

export const useActivityContext = () => useContext(ActivityContext);

export const ActivityProvider = ({ children }) => {
  const { activities, isLoading, error } = useActivities();

  return (
    <ActivityContext.Provider
      value={{
        activities,
        isLoading,
        error,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
