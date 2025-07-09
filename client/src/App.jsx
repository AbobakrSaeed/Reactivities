import { ActivityProvider } from "./context/useActivityContext";

import ActivitiesDashboard from "./components/activities/dashboard/ActivitiesDashboard";
import { Navbar } from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <ActivityProvider>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivitiesDashboard />
        </Container>
      </ActivityProvider>
    </>
  );
}

export default App;
