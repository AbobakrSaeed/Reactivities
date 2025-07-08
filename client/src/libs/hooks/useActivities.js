import { useQuery } from "@tanstack/react-query";
import baseApi from "../baseApi";
import {CACHE_KEY_ACTIVITIES} from "../../constants/constants";

const useActivities = () => {
  const getActivities = () =>
    baseApi.get("activities").then((response) => response.data);

  const { data, isLoading, error } = useQuery({
    queryKey: CACHE_KEY_ACTIVITIES,
    queryFn: getActivities,
  });

  const updateActivity =()=>{
    
  }
  return { data, isLoading, error };
};

export default useActivities;
