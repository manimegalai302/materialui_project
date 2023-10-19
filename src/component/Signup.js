import React from "react";
import First from "./Signup/First";
import Second from "./Signup/Second";
import Third from "./Signup/Third";
import { useSelector } from "react-redux";
import { Step, StepLabel, Stepper, Box, Typography } from "@mui/material";

const Signup = () => {
  const page = useSelector((e) => e.page.value);

  const steps = ["Step 1", "Step 2", "Step 3"];

  function pageDisplay() {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      default:
        return new Error("Invalid");
    }
  }

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography
        color="secondary"
        padding="10px"
        align="center"
        fontSize="30px"
        fontWeight="bold"
        marginLeft="90px"
        
      >
        Signup
      </Typography>
      <Box>
        <Stepper
          style={{ width: "120%",marginBottom: "30px"}}
          activeStep={page}
          orientation="horizontal"
          backgroundColor="#e600e6"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel></StepLabel>
           </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          display: "grid",
          marginLeft: "70px",
          padding:"40px",
          boxShadow:10,
          backgroundColor:"#ffe6ff"
        }}
      >
        <Typography>{pageDisplay()}</Typography>
      </Box>
    </Box>
  );
};

export default Signup;
