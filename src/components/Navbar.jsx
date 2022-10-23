import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
// import AdbIcon from "@mui/icons-material/Adb";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DrawerComp from "./Drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar  position="static" style={{ background: 'none', boxShadow: 'none'}}>
        <Toolbar>
          <LogoDevIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.2rem", paddingLeft: "10%" }}>
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
                <Tab label="Profiles" href="#profile"/>

              </Tabs>
              <Button  sx={{ marginLeft: "auto" }} variant="contained" href="https://drive.google.com/file/d/1sbS_q8qg4foBcqWp6dGvgOgguYZdFdbz/view" target="_blank">
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
