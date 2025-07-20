/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns";

const ActivityCard = ({ activity }) => {
  const { id, title, date, venue, city, description, category } = activity;

  const isHost = true;
  const isGoing = false;
  const isCancelled = false;

  const label = isHost
    ? "You are hosting this activity"
    : isGoing
    ? "You are going to this activity"
    : null;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";
  const host= "Abobakr";

  const formattedDate = new Date(date).toLocaleString();
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <Card
      sx={{
        width: 700,
        mx: "auto",
        mt: 3,
        borderRadius: 3,
        boxShadow: 4,
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* SECTION 1: Avatar + Title + Host */}
      <Box display="flex" p={2} gap={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Hosted by{" "}
            <Typography
              component={Link}
              to={`/profile/${host?.username || "bob"}`}
              color="primary"
              sx={{ textDecoration: "none", fontWeight: 500 }}
            >
              {host?.displayName || "Bob"}
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* SECTION 2: Date & Location */}
      <Box display="flex" gap={3} flexWrap="wrap" p={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarMonthIcon fontSize="small" />
          <Typography variant="body2">{formattedDate}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">
            {venue}, {city}
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* SECTION 3: Chips for labels */}
      <Box px={2} py={1} display="flex" gap={1} flexWrap="wrap">
       {label && <Chip label={label} color={color} />}
            {isCancelled && <Chip label="Cancelled" color="error" />}
        <Chip label={category} variant="outlined" />
      </Box>

      <Divider />

      {/* SECTION 4: Description + Button */}
      <CardContent sx={{ pt: 2, pb: 0 }}>
        <Typography variant="body1" mb={2}>
          {description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          px: 2,
          pb: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Activity {timeAgo}
        </Typography>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/activities/${id}`}
        >
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;


 