import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export const ServerError = () => {
  const { state } = useLocation();
  return (
    <>
      <Paper sx={{ p: 4 }}>
        {state.error ? (
          <>
            <Typography variant="h3" gutterBottom color="error">
              {state?.error.message || "There has been an error"}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              {state?.error.details || "Internal Server Error"}
            </Typography>
          </>
        ) : (
          <Typography variant="h3" gutterBottom color="error">
            Server Error
          </Typography>
        )}
      </Paper>
    </>
  );
};
