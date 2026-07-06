import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#1976d2",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            🧪 ArtiLab
          </Typography>

          <Typography variant="body2">
            Laboratory Equipment Management System
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}