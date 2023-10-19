import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { next } from "./pageSlice";
import { info } from "./userSlice";

 function FirstStep() {
  const selector = useSelector((state) => state.user.value);
  const [data, setData] = useState(selector);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();
  // const page = useSelector((e) => e.page.value);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let passwordRegex = /^[a-zA-Z0-9._-]{7,15}$/;

  useEffect(() => {
    dispatch(info(data));
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    setPasswordsMatch(data.password === newPassword);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      password: !passwordRegex.test(newPassword),
    }));
  };

  const handleNextClick = () => {
    const errors = {};

    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!passwordRegex.test(data.password)) {
      errors.password = "Password must be 7-15 characters";
    }

    if (!passwordsMatch) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      window.alert("Validation successful. Going to the next page!");
      dispatch(next(1));
    } else {
    
      window.alert("Validation failed. Please check your input.");
      setValidationErrors(errors);
    }
  };

  return (
    <Box sx={{
      padding:"15px",
    }}>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          error={!!validationErrors.email}
          helperText={validationErrors.email || ""}
        />
      </div>

      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          error={!!validationErrors.password}
          helperText={validationErrors.password || ""}
        />
      </div>

      <Box
        sx={{
          marginTop: "10px",
        }}
      >
        <TextField
          id="outlined-confirm-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          helperText={!passwordsMatch ? validationErrors.confirmPassword : ""}
          error={!!validationErrors.confirmPassword}
          onChange={handlePasswordChange}
        />
      </Box>

      <Box sx={{
        marginTop:"10px",
      }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
export default FirstStep;