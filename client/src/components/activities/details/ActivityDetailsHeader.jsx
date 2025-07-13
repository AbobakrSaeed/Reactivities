/* eslint-disable react/prop-types */
import { Card, Badge, CardMedia, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";

export default function ActivityDetailsHeader({ activity }) {
  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const loading = false;
  const host = "abobakr";

  return (
    <Card
      sx={{
        position: "relative",
        mb: 2,
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      {isCancelled && (
        <Badge
          color="error"
          badgeContent="Cancelled"
          sx={{
            position: "absolute",
            left: 40,
            top: 20,
            zIndex: 10,
            "& .MuiBadge-badge": {
              fontSize: "0.8rem",
              padding: "0.4em 0.6em",
              borderRadius: "4px",
            },
          }}
        />
      )}

      <CardMedia
        component="img"
        height="300"
        image={`/images/categoryImages/travel.jpg`}
        alt="travel image"
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "white",
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
        }}
      >
        {/* Left Side Text */}
        <Box>
          <Typography variant="h4" fontWeight="bold">
            {activity.title}
          </Typography>
          <Typography variant="subtitle1">
            {new Date(activity.date).toLocaleString()}
          </Typography>
          <Typography variant="subtitle2">
            Hosted by{" "}
            <Link
              to={`/profiles/username`}
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              {host}
            </Link>
          </Typography>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant="contained"
                color={isCancelled ? "success" : "error"}
                onClick={() => {}}
              >
                {isCancelled ? "Re-activate Activity" : "Cancel Activity"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/manage/activityId`}
                disabled={isCancelled}
              >
                Manage Event
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color={isGoing ? "primary" : "info"}
              onClick={() => {}}
              disabled={isCancelled || loading}
            >
              {isGoing ? "Cancel Attendance" : "Join Activity"}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}
