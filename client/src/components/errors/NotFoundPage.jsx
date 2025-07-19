import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          mb: 4,
          filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
        }}
      />

      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          mb: 2,
          fontSize: { xs: "2.5rem", sm: "3rem" },
        }}
      >
        Oops!
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "text.secondary",
          mb: 1,
          fontSize: { xs: "5rem", sm: "6rem" },
        }}
      >
        404
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          mb: 4,
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
          maxWidth: 500,
        }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{
          px: 4,
          py: 1.5,
          fontSize: "1.1rem",
          fontWeight: "bold",
          borderRadius: 2,
          boxShadow: 3,
          "&:hover": {
            boxShadow: 5,
          },
        }}
      >
        Go to Home Page
      </Button>
    </Container>
  );
};

export default NotFoundPage;
