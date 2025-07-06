import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import TableComponent from "./TableComponent"; // Importing the reusable Table component
import Typography from "@mui/material/Typography"; // Importing Material-UI Typography for consistent styling

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios("https://localhost:5001/api/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the activities!", error);
      });
  }, []);

  const headers = [
    "Title",
    "Description",
    "Date",
    "Category",
    "City",
    "Venue",
    "Latitude",
    "Longitude",
  ];

  return (
    <>
        <Typography variant="h3">Activities</Typography>
      
      <TableComponent headers={headers} data={activities} />
    </>
  );
};

export default Activities;
