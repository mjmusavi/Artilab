import { Link } from "react-router-dom";
import {
Drawer,
List,
ListItemButton,
ListItemIcon,
ListItemText,
Toolbar,
Typography
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesIcon from "@mui/icons-material/Devices";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function Sidebar(){

return(

<Drawer
variant="permanent"
sx={{
width:drawerWidth,
flexShrink:0,
"& .MuiDrawer-paper":{
width:drawerWidth,
boxSizing:"border-box"
}
}}
>

<Toolbar>

<Typography
variant="h5"
fontWeight="bold"
>

🧪 ArtiLab

</Typography>

</Toolbar>

<List>

<ListItemButton>

<ListItemIcon>

<DashboardIcon/>

</ListItemIcon>

<ListItemText primary="Dashboard"/>

</ListItemButton>

<ListItemButton component={Link} to="/">

<ListItemIcon>

<DevicesIcon/>

</ListItemIcon>

<ListItemText primary="Devices"/>

</ListItemButton>

<ListItemButton component={Link} to="/devices">

<ListItemIcon>

<BuildIcon/>

</ListItemIcon>

<ListItemText primary="Maintenance"/>

</ListItemButton>

<ListItemButton component={Link} to="/service">

<ListItemIcon>

<CalendarMonthIcon/>

</ListItemIcon>

<ListItemText primary="Calibration"/>

</ListItemButton>

<ListItemButton component={Link} to="/calibration">

<ListItemIcon>

<AssessmentIcon/>

</ListItemIcon>

<ListItemText primary="Reports"/>

</ListItemButton>

<ListItemButton component={Link} to="/documents">

<ListItemIcon>

<SettingsIcon/>

</ListItemIcon>

<ListItemText primary="Settings"/>

</ListItemButton>

</List>

</Drawer>

);

}