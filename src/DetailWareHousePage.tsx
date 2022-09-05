import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Stack, Box } from "@mui/material";
import moment from 'moment';

interface Data {
  Active: boolean,
  Description: string,
  LastSync: string,
  LastModifiedDateTime: string,
  Branch: string,
  WareHouseID: string
}

const DetailWareHousePage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    axios
      .get("https://api.belajartableau.com/api/WarehouseReps/" + id)
      .then((datas) => {
        setData(datas.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Stack>
      <Typography variant="h4">Detail Location Warehouse - {id}</Typography>
      <Box sx={{height: '50vh', width: '50%'}}>
        <Stack direction={'row'}>
          <Typography> Description : </Typography>
          <Typography>{data?.Description}</Typography>
        </Stack>
        <Stack direction={'row'}>
          <Typography> Last Modified : </Typography>
          <Typography>{moment(data?.LastModifiedDateTime).format('DD/MM/YYYY')}</Typography>
        </Stack>
        <Stack direction={'row'}>
          <Typography> Branch : </Typography>
          <Typography>{data?.Branch}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default DetailWareHousePage;
