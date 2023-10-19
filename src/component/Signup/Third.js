import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {next} from './pageSlice';
import { useDispatch } from "react-redux";

const Final = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  const handleToLogin=()=>{
    navigate("/login");
    dispatch(next(0));
  }
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px",
        rowGap: "10px",
      }}
    >
      <Typography variant="h4">successfully Register 👍</Typography>
      <Button onClick={handleToLogin}>Login</Button>
   
    </Box>
  );
};

export default Final;
