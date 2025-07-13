/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  LinearProgress,
} from "@mui/material";

import { Adb as AdbIcon } from "@mui/icons-material";
import { useActivityContext } from "../../context/useActivityContext";
import { NavLink } from "react-router";
import { useStore } from "../../libs/hooks/useStore";
import { Observer } from "mobx-react";

const pages = [
  { label: "Activities", path: "activities" },
  { label: "Create Activity", path: "createactivity" },
  { label: "Counter", path: "counter" },
];

export const Navbar = () => {
  const { showCreateForm } = useActivityContext();
  const { uiStore } = useStore();

  return (
    <>
      <Box maxWidth="xl" position={"sticky"}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <AdbIcon sx={{ mr: 1 }} />
                <Typography
                  component={NavLink}
                  to="/"
                  variant="h6"
                  noWrap
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
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: 5,
                }}
              >
                {pages.map(({ label, path }) => (
                  <Typography
                    key={label}
                    component={NavLink}
                    to={`/${path}`}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&.active": {
                        color: "yellow",
                      },
                    }}
                  >
                    {label}
                  </Typography>
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
          <Observer>
            {() =>
              uiStore.isLoading ? (
                <LinearProgress
                color="secondary"
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "4px",
                    width: "100%",
                   
                  }}
                />
              ) : null
            }
          </Observer>
        </AppBar>
      </Box>
    </>
  );
};
