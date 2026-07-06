import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

export default function DeviceTable({
  devices,
  editDevice,
  deleteDevice,
}) {

    const navigate = useNavigate();
 
    const columns = [

    {
      field: "name",
      headerName: "Device",
      flex: 1,
    },

    {
      field: "company",
      headerName: "Manufacturer",
      flex: 1,
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },

    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },

    {
      field: "laboratory",
      headerName: "Laboratory",
      flex: 1,
    },

    {
      field: "installationDate",
      headerName: "Installed",
      flex: 1,
    },

    {
      field: "warrantyExpiry",
      headerName: "Warranty",
      flex: 1,
    },

    {
      field: "supplier",
      headerName: "Supplier",
      flex: 1,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 1.2,

      sortable: false,

     renderCell: (params) => (
  <>
    <Button
      variant="outlined"
      color="success"
      size="small"
      sx={{ mr: 1 }}
      onClick={() => navigate("/devices/" + params.row.index)}
    >
      View
    </Button>

    <Button
      variant="contained"
      size="small"
      onClick={() => editDevice(params.row.index)}
      sx={{ mr: 1 }}
    >
      Edit
    </Button>

    <Button
      variant="outlined"
      color="error"
      size="small"
      onClick={() => deleteDevice(params.row.index)}
    >
      Delete
    </Button>
  </>
),
    },
  ];

  const rows = devices.map((device, index) => ({
    id: index,
    index,
    ...device,
  }));

  return (

    <Box sx={{ height: 500, width: "100%", mt: 3 }}>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5,10,20]}
        initialState={{
          pagination:{
            paginationModel:{
              pageSize:5
            }
          }
        }}
      />

    </Box>

  );

}