import * as React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Typography, Button, Box } from "@mui/material";
import Error from "./asset/error.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Nomatch = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.user.value);

  const handleBack = () => {
    if (selector.isLoggedIn) {
      navigate("/home");
    }
    // } else {
    //   navigate("/login");
    // }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="left" color="error">
        <WarningAmberIcon /> 404: Page Not Found
      </Typography>
      <img src={Error} alt="error" width="50%" />
      <Button variant="outlined" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
};

export default Nomatch;
