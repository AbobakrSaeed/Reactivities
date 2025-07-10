import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import baseApi from "../baseApi";
import { CACHE_KEY_ACTIVITIES } from "../../constants/constants";

const useActivities = (id) => {
  const queryClient = useQueryClient();

  // fetch all activities
  const {
    data: activities,
    isLoading,
    error,
  } = useQuery({
    queryKey: CACHE_KEY_ACTIVITIES,
    queryFn: () => baseApi.get("activities").then((response) => response.data),
  });

  // fitch a specific activity
  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ["activities", id],
    queryFn: () =>
      baseApi.get(`activities/${id}`).then((response) => response.data),
    enabled: !!id,
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
    mutationFn: (activity) =>
      baseApi.post("activities", activity).then((response) => response.data),
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

  return {
    activities,
    isLoading,
    error,
    activity,
    isLoadingActivity,
    updateActivity,
    createActivity,
    deleteActivity,
  };
};

export default useActivities;
