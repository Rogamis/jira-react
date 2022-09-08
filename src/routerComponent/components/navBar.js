import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const AppBarTasks = () => {

    const navigateLogin = useNavigate();
    const goUserPage = () => {
        navigateLogin("../user");
    };

  return (
    <AppBar position="static" style={{ background: "#01a9ac" }}>
      <Container maxWidth="x1">
        <Button onClick={goUserPage} variant="outlined">
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Back to Profile
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Back to Profile
          </Typography>
        </Button>
      </Container>
    </AppBar>
  );
};

export default AppBarTasks;