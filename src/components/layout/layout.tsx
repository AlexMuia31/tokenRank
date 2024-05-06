import React from "react";
import { Drawer, AppBar, Toolbar, Box, CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 72;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ background: "#19213D" }}>
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        variant={isMdUp ? "permanent" : "temporary"}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#19213D",
          },
        }}
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      ></Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "#010009",
          flexGrow: 1,
          pt: { xs: "37px" },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
