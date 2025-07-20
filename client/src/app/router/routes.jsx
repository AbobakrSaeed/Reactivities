import { createBrowserRouter, Navigate } from "react-router";
import App from "../layouts/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import { ActivityForm } from "../../features/activities/form/ActivityForm";
import ActivityDetailsPage from "../../features/activities/details/ActivityDetailsPage";
import Counter from "../../features/store/Counter";
import NotFoundPage from "../../features/errors/NotFoundPage";
import ErrorsTester from "../../features/errors/ErrorsTester";
import { ServerError } from "../../features/errors/ServerError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivitiesDashboard /> },
      { path: "activities/:id", element: <ActivityDetailsPage /> },
      { path: "createactivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm /> },
      { path: "counter", element: <Counter /> },
      { path: "errors", element: <ErrorsTester /> },
      {
        path: "not-fount",
        element: <NotFoundPage />,
      },
      { path: "server-error", element: <ServerError /> },
      {
        path: "*",
        element: <Navigate to="/not-fount" />,
      },
    ],
  },
]);
