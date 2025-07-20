import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  Chip,
  ListItemAvatar,
  Avatar,
  Box,
  Divider,
  useTheme,
  Stack,
} from "@mui/material";
import { Star, PeopleAlt } from "@mui/icons-material";

export default function ActivityDetailsSidebar() {
  const theme = useTheme();
  const attendees = [
    {
      id: 1,
      name: "Bob",
      isHost: true,
      following: true,
      image: "/assets/user.png",
    },
    {
      id: 2,
      name: "Alice",
      isHost: false,
      following: false,
      image: "/assets/user.png",
    },
    {
      id: 3,
      name: "Bob",
      isHost: true,
      following: true,
      image: "/assets/user.png",
    },
  ];

  return (
    <Box sx={{ width: 530 }}>
      {/* Header */}
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          backgroundColor: theme.palette.primary.main,
          color: "white",
          p: 2,
          mb: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <PeopleAlt fontSize="small" />
        <Typography variant="subtitle1" fontWeight={500}>
          {attendees.length} {attendees.length === 1 ? "person" : "people"}{" "}
          going
        </Typography>
      </Paper>

      {/* Attendees List */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <List sx={{ p: 0 }}>
          {attendees.map((attendee, index) => (
            <React.Fragment key={attendee.id}>
              <ListItem
                disableGutters
                sx={{
                  py: 1.5,
                  px: 0,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Left Side - Avatar and Name */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemAvatar sx={{ minWidth: 48 }}>
                      <Avatar
                        alt={attendee.name}
                        src={attendee.image}
                        sx={{ width: 40, height: 40 }}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" fontWeight={500}>
                      {attendee.name}
                    </Typography>
                  </Box>

                  {/* Right Side - Indicators */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    {attendee.isHost && (
                      <Chip
                        icon={<Star fontSize="small" />}
                        label="Host"
                        color="warning"
                        size="small"
                        variant="outlined"
                        sx={{
                          borderRadius: 1,
                          borderColor: theme.palette.warning.main,
                        }}
                      />
                    )}
                    {attendee.following && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          fontStyle: "italic",
                          color: theme.palette.success.main,
                        }}
                      >
                        Following
                      </Typography>
                    )}
                  </Stack>
                </Box>
              </ListItem>
              {index < attendees.length - 1 && (
                <Divider variant="inset" sx={{ ml: 8 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
