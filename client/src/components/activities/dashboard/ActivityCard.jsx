/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import useActivities from "../../../libs/hooks/useActivities";
import { Link } from "react-router";

const ActivityCard = ({ activity }) => {
  const { id, title, description, date, category, city, venue } = activity;
  const { deleteActivity } = useActivities();

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const categoryIcon = category === "drinks" ? <LocalBarIcon /> : null;

  return (
    <Card
      sx={{
        width: 700,
        mx: "auto",
        mt: 3,
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#fafafa",
      }}
    >
      <CardHeader
        title={title}
        subheader={city}
        sx={{ backgroundColor: "#1976d2", color: "#fff" }}
      />

      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <CalendarMonthIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>

        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {venue}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          {/* Chips group on the left */}
          <Box display="flex" gap={1}>
            <Chip label={category} icon={categoryIcon} variant="outlined" />
          </Box>

          {/* Buttons group on the right */}
          <Box display="flex" gap={1}>
            <Button component={Link} to={`/activities/${id}`} size="small" variant="contained" >
              View
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => deleteActivity.mutate(id)}
              disabled={deleteActivity.isPending}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
