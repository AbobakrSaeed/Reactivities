import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import HomePage from "../../components/home/HomePage";
import ActivitiesDashboard from "../../components/activities/dashboard/ActivitiesDashboard";
import { ActivityForm } from "../../components/activities/form/ActivityForm";
import ActivityDetailsPage from "../../components/activities/details/ActivityDetailsPage";
import { Counter } from "../../components/store/Counter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivitiesDashboard /> },
      { path: "activities/:id", element: <ActivityDetailsPage /> },
      { path: "createactivity", element: <ActivityForm key="create" /> },
      { path: "form/:id", element: <ActivityForm /> },
      { path: "counter", element: <Counter/> },
    ],
  },
]);
