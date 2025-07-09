import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import baseApi from "../baseApi";
import { CACHE_KEY_ACTIVITIES } from "../../constants/constants";

const useActivities = () => {
  const queryClient = useQueryClient();


// fetch
  const { data, isLoading, error } = useQuery({
    queryKey: CACHE_KEY_ACTIVITIES,
    queryFn: () =>
    baseApi.get("activities").then((response) => response.data),
  });

  //update
  const updateActivity = useMutation({
    mutationFn: (activity) => baseApi.put("activities", activity),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: CACHE_KEY_ACTIVITIES });
    },
  });

  //create
  const createActivity = useMutation({
    mutationFn: (activity) => baseApi.post("activities", activity),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: CACHE_KEY_ACTIVITIES });
    },
  });

  // delete
  const deleteActivity = useMutation({
    mutationFn: (id) => baseApi.delete(`activities/${id}`),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: CACHE_KEY_ACTIVITIES });
    },
  });

  return { data, isLoading, error, updateActivity, createActivity, deleteActivity };
};

export default useActivities;
