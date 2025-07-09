/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState, useEffect } from "react";
import { useActivityContext } from "../../../context/useActivityContext";

const ActivityDetailsCard = ({ activity, onEdit, onCancel }) => {
  const { activities } = useActivityContext();
  const { title, date, description, category } = activities.find(
    (a) => (a.id = activity.id)
  );

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [imgSrc, setImgSrc] = useState(`images/categoryImages/${category}.jpg`);

  // ✅ Update the image whenever the activity/category changes
  useEffect(() => {
    setImgSrc(`images/categoryImages/${category}.jpg`);
  }, [category]);
  return (
    <Card sx={{ maxWidth: 550, mt: 5, boxShadow: 5, borderRadius: 3 }}>
      {/* Placeholder image */}
      <CardMedia
        component="img"
        height="250"
        image={imgSrc}
        onError={() => setImgSrc("images/placeholder.png")}
        alt={`${category} image`}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
          gap={1}
          mb={1}
        >
          <CalendarMonthIcon fontSize="small" />
          {formattedDate}
        </Typography>

        <Typography variant="body1">{description}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
        <Button variant="contained" color="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={onCancel}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetailsCard;
