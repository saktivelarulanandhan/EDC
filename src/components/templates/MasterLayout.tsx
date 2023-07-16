import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../organisms/Header/Header";
const MasterLayout = () => {
  return (
    <Box sx={{ display: "flex", marginTop: "64px" }}>
      <Header title="EDC" />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "100%", mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
export default MasterLayout;
