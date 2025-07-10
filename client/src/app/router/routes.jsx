import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import HomePage from "../../components/home/homePage";
import ActivitiesDashboard from "../../components/activities/dashboard/ActivitiesDashboard";
import { ActivityForm } from "../../components/activities/form/ActivityForm";
import ActivityDetailsCard from "../../components/activities/dashboard/ActivityDetailsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivitiesDashboard /> },
      { path: "activities/:id", element: <ActivityDetailsCard /> },
      { path: "createactivity", element: <ActivityForm key="create" /> },
      { path: "form/:id", element: <ActivityForm /> },
    ],
  },
]);
