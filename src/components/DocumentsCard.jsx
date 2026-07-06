import {
  Paper,
  Typography,
  Button,
} from "@mui/material";

export default function DocumentsCard() {

  return (

    <Paper sx={{p:3}}>

      <Typography
        variant="h6"
        gutterBottom
      >

        Documents

      </Typography>

      <Button
        variant="contained"
      >

        Upload PDF

      </Button>

    </Paper>

  );

}