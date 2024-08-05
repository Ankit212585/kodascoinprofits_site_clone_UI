import React from "react";
import { Box } from "@mui/joy";
import logo from "./images/logo-no-background.png";
import Typography from "@mui/joy/Typography";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./index";
import Aboutus from "../pages/Aboutus";
import Faq from "../pages/faq";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import ContactUs from "../pages/ContactUs";

export default function Topbar() {
  const pointer = { cursor: "pointer" };

  return (
    <>
      <Router>
        <Box>
          <Box sx={{ padding: "20px" }}>
            <Box
              className={`Box1`}
              sx={{
                display: "flex",

                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <Box>
                <img src={logo} width="150px" />
              </Box>

              <Box
                className={`icons`}
                sx={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  <Typography sx={pointer}>Home</Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Aboutus">
                  {" "}
                  <Typography sx={pointer}>About Us</Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Faq">
                  <Typography sx={pointer}>Faq's</Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="Login">
                  {" "}
                  <Typography sx={pointer}>Login</Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="SignUp">
                  <Typography sx={pointer}>signup</Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="ContactUs">
                  <Typography sx={pointer}>Contact us</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Aboutus" element={<Aboutus />}></Route>
            <Route path="/Faq" element={<Faq />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
          </Routes>
        </Box>
      </Router>
      <style>
        {`
@media only screen and (max-width: 768px) {
  .Box1{
    flex-wrap:wrap;
    justify-content:center;
  }
  .icons{
    padding-top:20px;
    flex-wrap:wrap;
    gap:30px;
    justify-content:center;
  }
  
}   
      `}
      </style>
    </>
  );
}
