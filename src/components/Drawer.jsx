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
            <ListItemButton onClick={()=>setOpenDrawer(false)} >
                <ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText >Skills</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText >Projects</ListItemText>
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