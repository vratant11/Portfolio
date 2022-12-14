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
import "./navbar.css";

// import { makeStyles } from "@material-ui/core/styles";

// import { positions } from '@mui/system';
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
      <AppBar   style={{ background: 'rgba(128, 128, 128, 0.968)', boxShadow: 'none'}} className="app" >
        <Toolbar>
          <LogoDevIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "10%" }}>
                <strong>My-Portfolio</strong>
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
            <Typography sx={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
            <strong>My-Portfolio</strong>

              </Typography>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColour="secondary"
                
                sx={{marginLeft: 'auto'}}
              >
               <Tab label="About" href="#Aboutme" />
                <Tab label="Skills" href="#skills" />
                <Tab label="Projects" href="#work"/>
                <Tab label="Profiles" href="#profile"/>
                <Tab label="Experiences" href="#experience"/>


              </Tabs>
              <Button  sx={{ marginLeft: "auto" }} variant="contained" href="https://drive.google.com/file/d/1mRS0bK5qawSdjhczah2ALOojX_1gYhjW/view?usp=share_link" target="_blank">
                Resume
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
