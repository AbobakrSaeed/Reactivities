import { createBrowserRouter, Navigate } from "react-router";
import App from "../layouts/App";
import HomePage from "../../components/home/HomePage";
import ActivitiesDashboard from "../../components/activities/dashboard/ActivitiesDashboard";
import { ActivityForm } from "../../components/activities/form/ActivityForm";
import ActivityDetailsPage from "../../components/activities/details/ActivityDetailsPage";
import Counter from "../../components/store/Counter";
import NotFoundPage from "../../components/errors/NotFoundPage";
import ErrorsTester from "../../components/errors/ErrorsTester";
import { ServerError } from "../../components/errors/ServerError";

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
      { path: "counter", element: <Counter /> },
      { path: "errors", element: <ErrorsTester /> },
      {
        path: "not-fount", element: <NotFoundPage />
      },
      {path:"server-error", element: <ServerError/>},
      {
    path: "*",
    element: <Navigate to="/not-fount" />,
  },
    ],
  },
  
]);
