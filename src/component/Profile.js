import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function UserProfile() {
  const selector = useSelector((state) => state.user.value);

  return (
    <Box>
      <Typography
        align="center"
        color="secondary"
        fontWeight="bold"
        fontSize="30px"
      >
        Profile
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "350px 350px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "90px",
          margin: "10%",
          fontSize: "30px",
          gap: "30px",
          border: "2px solid black",
          boxShadow: "8",
          padding: "70px",
        }}
      >
        <Box>
          <Typography>First Name:</Typography>
          <Typography
            sx={{
              backgroundColor: " #cce0ff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: 4,
            }}
          >
            {" "}
            {selector.firstName}
          </Typography>
        </Box>
        <Box>
          <Typography>Last Name:</Typography>
          <Typography
            sx={{
              backgroundColor: " #cce0ff",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: 4,
            }}
          >
            {" "}
            {selector.lastName}
          </Typography>
        </Box>
        <Box>
          <Typography>Email:</Typography>
          <Typography
            sx={{
              backgroundColor: " #cce0ff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: 4,
            }}
          >
            {" "}
            {selector.value.email}
          </Typography>
        </Box>
        <Box>
          <Typography>Phone Number:</Typography>
          <Typography
            sx={{
              backgroundColor: " #cce0ff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: 4,
            }}
          >
            {" "}
            {selector.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
