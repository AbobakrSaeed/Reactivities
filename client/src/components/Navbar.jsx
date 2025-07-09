/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";

import { Adb as AdbIcon } from "@mui/icons-material";
import { useActivityContext } from "../context/useActivityContext";

const pages = ["Products", "Pricing", "Blog"];

export const Navbar = () => {
  const { showCreateForm } = useActivityContext();

  return (
    <Box maxWidth="xl" position={"sticky"} top={5}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <AdbIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "block" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 5 }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "monospace",
                    fontWeight: 500,
                  }}
                >
                  <Typography>{page}</Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={showCreateForm}
              >
                Create Activity
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
