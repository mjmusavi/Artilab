import DocumentsCard from "../components/DocumentsCard";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

export default function DeviceDetails({ devices }) {
    const { id } = useParams();

const device = devices[Number(id)];

if (!device) {
  return (
    <Typography variant="h5">
      Device Not Found
    </Typography>
  );
}
  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Device Details
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6" gutterBottom>
  General Information
</Typography>

<Typography>
  <strong>Device:</strong> {device.name}
</Typography>

<Typography>
  <strong>Manufacturer:</strong> {device.company}
</Typography>

<Typography>
  <strong>Model:</strong> {device.model}
</Typography>

<Typography>
  <strong>Serial Number:</strong> {device.serialNumber}
</Typography>

<Typography>
  <strong>Asset Number:</strong> {device.assetNumber}
</Typography>

<Typography>
  <strong>Status:</strong> {device.status}
</Typography>

<Typography>
  <strong>Department:</strong> {device.department}
</Typography>

<Typography>
  <strong>Laboratory:</strong> {device.laboratory}
</Typography>

<Typography>
  <strong>Installation Date:</strong> {device.installationDate}
</Typography>

<Typography>
  <strong>Warranty Expiry:</strong> {device.warrantyExpiry}
</Typography>

<Typography>
  <strong>Supplier:</strong> {device.supplier}
</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6">
              Service History
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6">
              Calibration
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <DocumentsCard />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6">
              Videos
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p:3 }}>
            <Typography variant="h6">
              AI Assistant
            </Typography>
          </Paper>
        </Grid>

      </Grid>

    </Box>
  );
}