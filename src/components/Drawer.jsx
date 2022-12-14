import React, { useState } from "react";
import "./drawer.css";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className="drawerlist">
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#Aboutme"
          >
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#skills"
          >
            <ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#work"
          >
            <ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#profile"
          >
            <ListItemIcon>
              <ListItemText>Profiles</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="#experience"
          >
            <ListItemIcon>
              <ListItemText>Experiences</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            component="a"
            href="https://drive.google.com/file/d/1mRS0bK5qawSdjhczah2ALOojX_1gYhjW/view?usp=share_link"
            target="_blank"
          >
            <ListItemIcon>
              <ListItemText>Resume</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ marginRight: "auto" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
