import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import DrawerComp from "./Drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar   style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <AdbIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                My-Portfolio
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
            <Typography sx={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
                My-Portfolio
              </Typography>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColour="secondary"
                sx={{marginLeft: 'auto'}}
              >
                <Tab label="About" href="#Aboutme"/>
                <Tab label="Skills" href="#skills" />
                <Tab label="Projects" href="#work"/>
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Download CV
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
