import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Avatar,
} from "@mui/material";
import { Link } from "react-router";

export default function ActivityDetailsChat() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "primary.main",
          color: "white",
          p: 2,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Typography variant="h6">Chat about this event</Typography>
      </Box>

      <Card elevation={3}>
        <CardContent>
          {/* Comment Form */}
          <Box component="form" noValidate autoComplete="off">
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              placeholder="Enter your comment (Enter to submit, SHIFT + Enter for new line)"
              sx={{ mb: 2 }}
            />
          </Box>

          {/* Comment Example */}
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "flex-start", my: 2 }}
          >
            <Avatar src="/images/user.png" alt="User image" />

            <Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography
                  component={Link}
                  to="/profiles/username"
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Bob
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2 hours ago
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ mt: 1, whiteSpace: "pre-wrap" }}
              >
                Comment goes here
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
