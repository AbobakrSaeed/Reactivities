import { ActivityProvider } from "../../context/useActivityContext";

import { Navbar } from "./Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <ActivityProvider>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <Outlet />
        </Container>
      </ActivityProvider>
    </>
  );
}

export default App;
