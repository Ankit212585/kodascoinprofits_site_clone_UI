import React from "react";
import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import Grid from "@mui/material/Grid";
import image from "./images/pic.jpg";
import Button from "@mui/joy/Button";
import BottomBar from "../NewProject/bottombar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextField from "@mui/material/TextField";

export default function login() {
  const cards = [
    {
      peragraph: "How can we help you?",
      peragraph1: "Send us an email",
    },
    {
      peragraph: "Feel free to get in touch?",
      peragraph1: "Message our support",
    },
    {
      peragraph: "Ready to request a quote?",
      peragraph1: "Describe your project",
    },
  ];

  return (
    <>
      <style>{`
    .contactus{
      margin:10px;
    }
    `}</style>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            width: "100%",
            height: "650px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "40%",
              fontSize: "42px",
              color: "whitesmoke",
              fontWeight: "500",
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f7f7f7",
          padding: "100px 0px",
        }}
      >
        <Box
          className={`contactus`}
          sx={{
            // width: "1000px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {cards.map((item) => (
            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "30px 50px",
                backgroundColor: "white",
                width: "350px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <LocalPhoneIcon />
              <Typography>{item.peragraph}</Typography>
              <a href="#">{item.peragraph1}</a>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", padding: "50px 0px" }}
      >
        <Box sx={{ width: "1000px", paddingTop: "50px" }}>
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "gray",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              Fill out the form and we’ll be in touch soon!
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontWeight: "600", fontSize: "42px" }}
            >
              How we can help you?
            </Typography>
          </Box>
          <Box className={`contactus`} sx={{ marginTop: "50px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Lastname Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="E-mail ID"
                  autoFocus
                />
              </Grid>

              <TextField
                sx={{ marginLeft: "15px", marginTop: "50px" }}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Text"
                autoFocus
              />
            </Grid>
          </Box>

          <Box
            className={`contactus`}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
              submit
            </Button>
          </Box>
        </Box>
      </Box>
      <BottomBar />
    </>
  );
}
