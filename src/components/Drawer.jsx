import React ,{useState} from 'react'
import {Drawer,List, ListItemText,ListItemIcon,ListItemButton, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from "react-router-dom";
const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer open={openDrawer}
    onClose={()=>setOpenDrawer(false)}
    >
        <List>
            <ListItemButton onClick={()=>setOpenDrawer(false)} component="a" href="#Aboutme" >
                <ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)} component="a" href="#skills">
                <ListItemIcon>
                    <ListItemText >Skills</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)} component="a" href="#work">
                <ListItemIcon>
                    <ListItemText >Projects</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)} component="a" href="https://drive.google.com/file/d/1sbS_q8qg4foBcqWp6dGvgOgguYZdFdbz/view" target="_blank">
                <ListItemIcon>
                    <ListItemText >Download CV</ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
    </Drawer>
    <IconButton sx={{color: "white", marginLeft: "auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{marginRight:"auto"}}/>
    </IconButton>
    </>
  )
}

export default DrawerComp