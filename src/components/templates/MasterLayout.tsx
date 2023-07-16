import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../organisms/Header/Header";
import MenuDrawer from "../organisms/MenuDrawer/MenuDrawer";
import { mainListItems } from "../../routing/listItems";
const MasterLayout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (val: boolean) => {
    setOpen(val);
  };
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Header title="EDC" open={open} handleOpen={handleOpen} />
      <MenuDrawer open={open} handleOpen={handleOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto",
          marginTop: "64px",
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
