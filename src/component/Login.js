import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box, Grid } from "@mui/material";
import LoginPage from "./asset/login.png";
import { useDispatch, useSelector } from "react-redux";
import { info } from "./Signup/userSlice";
import {useAuth} from './Auth';

function Login() {
  const user = useSelector((state) => state.user.value);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth=useAuth();

  const handleLogin = () => {
    const authUser =
      user.value.email === loginEmail && user.value.password === loginPassword;
    console.log(authUser);
    if (authUser) {
      alert("Login successful!");
      const updatedValue = {
        ...user.value,
        isLoggedIn: true,
      };

      const updatedUser = { ...user,value: updatedValue };

      dispatch(info(updatedUser));
      navigate("/home");
    } else {
      alert("Invalid username or password. Please try again.");
    }
    auth.login(loginEmail)
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          marginTop: "120px",
          marginLeft: "120px",
        }}
      >
        <img src={LoginPage} alt="login" width="70%" />
      </Box>
      <Box
        sx={{
          marginTop: "110px",
          marginRight: "220px",
          padding: "45px",
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          fontWeight="bold"
          marginLeft="70px"
          padding="20px"
        >
          Login
        </Typography>
        <div sx={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            value={loginEmail}
            variant="outlined"
            margin="normal"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"a
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            marginTop: "20px",
          }}
        >
          Login
        </Button>
        <Typography sx={{ marginTop: "20px", variant: "body1" }}>
          If you are a new user, go to Signup?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Click here
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
