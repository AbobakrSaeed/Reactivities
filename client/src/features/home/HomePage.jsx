import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // This makes the container take full viewport height
        width: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" , mb: 10}}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 4,
          }}
        >
          Reactivities
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 6 }}>
          Welcome to reactivities
        </Typography>

        <Button
          component={Link}
          to="/activities"
          variant="contained"
          size="large"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1.1rem",
            textTransform: "none",
            borderRadius: 2,
            boxShadow: theme.shadows[4],
            "&:hover": {
              boxShadow: theme.shadows[6],
            },
          }}
        >
          TAKE ME TO THE ACTIVITIES!
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
