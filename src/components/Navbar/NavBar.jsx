import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Clock from "../Clock/clock";
import Weather from "../Weather/Weather";
import ToggleBtn from "../Toggle/ToggleBtn";
import Logout from "../Logout/Logout";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar className="h-36 flex justify-between items-center">
          <Clock />
          <Weather />
          <div className="flex gap-12 mr-16">
            <Logout />
            <ToggleBtn />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
