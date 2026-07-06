import {
Grid,
Card,
CardContent,
Typography
} from "@mui/material";

import DevicesIcon from "@mui/icons-material/Devices";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function DashboardCards({devices}){

return(

<Grid container spacing={3}>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<DevicesIcon fontSize="large"/>

<Typography variant="h6">

Devices

</Typography>

<Typography variant="h3">

{devices.length}

</Typography>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<BuildIcon fontSize="large"/>

<Typography variant="h6">

Maintenance

</Typography>

<Typography variant="h3">

0

</Typography>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<CalendarMonthIcon fontSize="large"/>

<Typography variant="h6">

Calibration

</Typography>

<Typography variant="h3">

0

</Typography>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<WarningAmberIcon fontSize="large"/>

<Typography variant="h6">

Faults

</Typography>

<Typography variant="h3">

0

</Typography>

</CardContent>

</Card>

</Grid>

</Grid>

);

}