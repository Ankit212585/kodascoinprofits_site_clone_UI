import React from "react";
import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import logo from "./images/logo-no-background.png";

export default function bottombar() {
  const grayPointer = { color: "gray", cursor: "pointer" };
  return (
    <>
      <style>
        {`
        .Box1{
          padding:10px 20px
        }
        .Box2{
          margin-top:40px;
        }
        `}
      </style>
      <Box
        className={`Box1`}
        sx={{
          backgroundColor: "#262b35",
          padding: "100px 150px",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img src={logo} width="150px" />
          <Typography sx={{ color: "gray" }}>
            MAIN ADDRESS:
            <br />
            Wharf House Victoria Quays, Wharf
            <br /> Street, Sheffield, England, S2 5SY
          </Typography>
          <Typography sx={grayPointer}>
            © Copyright 2023 kodascoinprofits.ltd
          </Typography>
        </Box>
        <Box
          className={`Box2`}
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography sx={{ color: "white" }}>Company</Typography>
          <Typography sx={{ color: "gray", cursor: "pointer" }}>
            Home
          </Typography>
          <Typography sx={{ color: "gray", cursor: "pointer" }}>
            About Us
          </Typography>
          <Typography sx={{ color: "gray", cursor: "pointer" }}>
            Faq's
          </Typography>
        </Box>
        <Box
          className={`Box2`}
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography sx={{ color: "white" }}>Support</Typography>
          <Typography sx={grayPointer}>Login</Typography>
          <Typography sx={grayPointer}>Signup</Typography>
          <Typography sx={grayPointer}>Contact Us</Typography>
          <Typography sx={grayPointer}>Terms</Typography>
        </Box>
      </Box>
    </>
  );
}
