import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./component/Login";
import Signup from "./component/Signup";
import Nomatch from "./component/Nomatch";
import Detailshow from "./component/Detailshow";
import SideNav from "./component/Sidenav";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Profile from "./component/Profile";
import { AuthProvider } from "./component/Auth";
import RequireAuth from "./component/RequiredAuth";


function App() {
  return (
    <AuthProvider>
     
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <SideNav />
              </RequireAuth>
            }
          >
            <Route path="/home/:id" element={<Detailshow />} />
            <Route
              path="home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
            <Route path="/cart/:id" element={<Detailshow />} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
