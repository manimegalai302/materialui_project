import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Dialog, DialogTitle, Button, MenuItem, Menu, Tooltip} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AnimeLogo from "./asset/anime.png";
import Home from "./Home";
import Profile from "./Profile";
import Cart from "./Cart";
import Detailshow from "./Detailshow";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { info } from "./Signup/userSlice";

import Logout from '@mui/icons-material/Logout';
// import Avatar from '@mui/material/Avatar';


const drawerWidth = 240;

const ClippedDrawer = () => {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAvatarClick = () => {
    setProfileOpen(true);
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const handleLogout = () => {
    const updatedValue = {
      ...user.value,
      isLoggedIn: false,
    };

    const updatedUser = { ...user, value: updatedValue };
    dispatch(info(updatedUser));
    navigate("/login");
  };

  const handleProfile = () => {
    setProfileOpen(false);
    navigate("/profile");
    setSelectedIndex(1);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
        // sx={{
        //   background: "#00bfff",
        //   width:"100%",
        // }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="toolbar"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "fitContent",
            }}
          >
            <Box
              sx={{
                padding: "2px",
              }}
            >
              <img src={AnimeLogo} alt="anime" width="8%" />
            </Box>
            <Box>
              <Typography
                fontSize="23px"
                fontWeight="bolder"
                fontFamily="cursive"
                marginLeft="150px"
                marginTop="20px"
              >
                {user.firstName + " " + user.lastName}
              </Typography>
              <Tooltip title="Account settings">
              <Avatar
                sx={{
                  bgcolor: deepOrange[600],
                  position: "absolute",
                  right: "5%",
                  top: "20%",
                  boxShadow: "3",
                  cursor: "pointer",
                  padding: "2px",
                }}
                onClick={handleAvatarClick}
              >
                {user.firstName.charAt(0).toUpperCase()}
              </Avatar>
              </Tooltip>
              <Menu  open={profileOpen}
        onClose={handleProfileClose}
       >
      <MenuItem onClick={handleProfile}>
          <Avatar /> Profile
        </MenuItem>
      <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Menu>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            // background: "#00bfff",
            padding: "12px",
          },
        }}
      >
        <Toolbar />
        <List>
          <Box background="red">
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                selected={selectedIndex === 0}
                onClick={() => setSelectedIndex(0)}
                to="/home"
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Box>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              selected={selectedIndex === 1}
              onClick={() => setSelectedIndex(1)}
              to="/profile"
            >
              <ListItemIcon>
                {" "}
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              selected={selectedIndex === 2}
              onClick={() => setSelectedIndex(2)}
              to="/cart"
            >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detailshow />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Detailshow />} />
        </Routes>
      </Box>
      

      {/* <Dialog
        open={profileOpen}
        onClose={handleProfileClose}
        sx={{
          width: "2500px",
          position: "absolute",
          bottom: "60%",
          right: "1%",
          cursor: "pointer",
        }}
      >
        <DialogTitle onClick={handleProfile}>Profile</DialogTitle>
        <Button onClick={handleLogout}>Logout</Button>
      </Dialog> */}

      <footer
        style={{
          width: "100%",
          background: "#00bfff",
          padding: "13px",
          position: "fixed",
          bottom: "0px",
          color: "black",
        }}
      >
        <Typography variant="body2" align="right">
          Terms of use | Security | Privacy | Infringement | copyright© 2023
          anime.com
        </Typography>
      </footer>
    </Box>
  );
};

export default ClippedDrawer;
