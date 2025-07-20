import { ActivityProvider } from "../../context/useActivityContext";

import { Navbar } from "./Navbar";
import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router";

// Usually in index.js or App.js
import "react-calendar/dist/Calendar.css";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <>
      <ActivityProvider>
        <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh", top: 0 }}>
          <CssBaseline />
          {location.pathname == "/" ? (
            <HomePage />
          ) : (
            <>
              <Navbar />
              <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Outlet />
              </Container>
            </>
          )}
        </Box>
      </ActivityProvider>
    </>
  );
}

export default App;
