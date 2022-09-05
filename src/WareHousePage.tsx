import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { Box, Stack, Typography } from "@mui/material";

const WareHousePage = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const columns: GridColDef[] = [
    {
      field: "WarehouseID",
      headerName: "Id",
      renderCell: (params) => (
        <Link to={`/${params.row.WarehouseID}`}>{params.value}</Link>
      ),
    },
    {
      field: "Branch",
      headerName: "Branch",
    },
    {
      field: "Active",
      headerName: "Active",
    },
    {
      field: "Description",
      headerName: "Description",
    },
    {
      field: "LastSync",
      headerName: "LastSync",
      valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY"),
      width: 200,
    },
  ];

  useEffect(() => {
    axios
      .get("https://api.belajartableau.com/api/WarehouseReps")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Stack style={{ width: "90%" }}>
      <Typography variant="h4">Warehouse</Typography>
      <Box sx={{ height: "50vh", width: "50%" }}>
        <DataGrid
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowId={(row) => row.WarehouseID}
          rows={data}
          columns={columns}
        />
      </Box>
    </Stack>
  );
};

export default WareHousePage;
