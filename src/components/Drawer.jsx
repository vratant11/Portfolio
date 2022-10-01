import React ,{useState} from 'react'
import {Drawer,List, ListItemText,ListItemIcon,ListItemButton, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer open={openDrawer}
    onClose={()=>setOpenDrawer(false)}
    >
        <List>
            <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>aaaa</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>bbbb</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>cccc</ListItemText>
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