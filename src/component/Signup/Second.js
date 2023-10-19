import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { info } from "./userSlice";
import { next, back } from "./pageSlice";

export default function SecondStep() {
  const selector = useSelector((state) => state.user);
  const page = useSelector((state) => state.page.value);

  const [data, setData] = useState(selector);
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(info(data));
  }, [data]); 

  const handleNextClick = () => {
    if (data.phone.length === 10) {
      dispatch(next(2));
      console.log(data);
      console.log("data: " + JSON.stringify(data)); 
    }
  };

  const handleBackClick = () => {
    dispatch(back(0));
  };

  const handleTextFieldChange = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
  };

  useEffect(() => {
    setIsFormValid(
      data.firstName?.trim() !== "" &&
      data.lastName?.trim() !== "" &&
      data.phone?.trim() !== ""
    );
  }, [data]);

  return (
    <Box>
      <Box>
        <TextField
          id="outlined-basic"
          type="text"
          label="First name"
          variant="outlined"
          margin="normal"
          value={data.firstName || ""}
          onChange={(e) => handleTextFieldChange("firstName", e.target.value)}
        />
      </Box>

      <Box>
        <TextField
          id="outlined-basic"
          type="text"
          label="Last name"
          variant="outlined"
          margin="normal"
          value={data.lastName || ""}
          onChange={(e) => handleTextFieldChange("lastName", e.target.value)}
        />
      </Box>

      <Box>
        <TextField
          id="outlined-basic"
          type="number"
          label="Phone"
          variant="outlined"
          // helperText={
          //   data.phone.length === 0 ? (
          //     ""
          //   ) : (
          //     <Typography color="error" variant="body2">
          //       Enter a valid phone number
          //     </Typography>
          //   )
          // }
          margin="normal"
          value={data.phone || ""}
          onChange={(e) => handleTextFieldChange("phone", e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleBackClick}>
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          disabled={!isFormValid}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
