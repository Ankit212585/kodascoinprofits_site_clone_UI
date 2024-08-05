import React from "react";
import { Box, Typography } from "@mui/joy";
import image from "./images/about-us-bg.jpg";
import phonelogo from "../NewProject/images/telephone.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BottomBar from "../NewProject/bottombar";

export default function Aboutus() {
  const arrow = { display: "flex", gap: "10px" };
  const color = { color: "lightgray", fontWeight: "500" };
  const cards = [
    {
      img: `${phonelogo}`,
      typography1: "INVESTMENT SELECTION",
      typography:
        "Vast selection of financial products to help build and expand your diversified portfolio.",
    },
    {
      img: `${phonelogo}`,
      typography1: "WEALTH MANAGEMENT",
      typography:
        "Financial experts are within reach to assist you in making your financial dreams a reality.",
    },
    {
      img: `${phonelogo}`,
      typography1: "NETWORK ADVISORY",
      typography:
        "Intertwined worldwide networks that allows fast dissemination of news across the globe - making most of the news before it becomes public.",
    },
  ];
  return (
    <>
      <style>
        {`

@media only screen and (max-width: 768px) {
  .Aboutus{
    display:none;
  }
  .Aboutus1{
    overflow:hidden;
   padding:10px;
    width:100%;
  }
  .Aboutus00{
    margin:10px;
  }
  .width1{
   width:100%; 
  }
  .fontsize1{
    font-Size:24px;
  }
.aboutpage{
  padding:20px;
}
}
   
    
    `}
      </style>
      <Box
        className={`Aboutus`}
        sx={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          height: "650px",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "46%",
              color: "white",
            }}
          >
            About our company
          </Typography>
          <Typography
            sx={{
              fontSize: "42px",
              position: "absolute",
              top: "55%",
              left: "43%",
              color: "white",
              fontWeight: "700",
            }}
          >
            Introduction
          </Typography>
        </Box>
      </Box>
      <Box
        className={`Aboutus1`}
        sx={{ padding: "100px 0px 100px 0px", backgroundColor: "#f7f7f7" }}
      >
        <Typography
          className={`Aboutus1`}
          sx={{ textAlign: "center", fontSize: "42px", fontWeight: "600" }}
        >
          The Best Broker Choice
        </Typography>
        <Box
          className={`Aboutus00`}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "50px",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              padding: "50px",
              display: "flex",
              gap: "20px",
              backgroundColor: "white",
            }}
          >
            <img src={phonelogo} width="30px" height="30px" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "500", width: "400px" }}
              >
                Safety of Principal
              </Typography>
              <Typography>
                This signifies protection against any possible loss
                <br /> under the changing market conditions.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "50px",
              display: "flex",

              gap: "20px",
              backgroundColor: "white",
            }}
          >
            <img src={phonelogo} width="30px" height="30px" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "400px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                Operating Efficiency
              </Typography>
              <Typography>
                All sectors are headed by professionals with lots of
                <br /> industry experience.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className={`Aboutus00`}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              padding: "50px",
              display: "flex",
              gap: "20px",
              backgroundColor: "white",
            }}
          >
            <img src={phonelogo} width="30px" height="30px" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "400px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                Earnings Stability
              </Typography>
              <Typography>
                This lowers the probability of forecasting errors and therefore
                reduces risk.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "50px",
              display: "flex",
              gap: "20px",
              backgroundColor: "white",
            }}
          >
            <img src={phonelogo} width="30px" height="30px" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "400px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                Good Management
              </Typography>
              <Typography>
                Our good management abilities allows us see opportunities and
                capitalize on them.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className={`width1`} sx={{ display: "flex", width: "1200px" }}>
          <Box className={`Aboutus`} sx={{ flex: "1" }}>
            <img src="" alt="logo" />
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
            }}
          >
            <Typography
              className={`fontsize1`}
              sx={{ fontSize: "42px", fontWeight: "600" }}
            >
              A Few Words About Our Company
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", color: "gray" }}
            >
              At kodascoinprofits.ltd, we are guided by a common purpose to help
              make financial lives better by connecting investors and companies
              to the resource they need to be successful. We are driving growth
              – a company formed by the group of individuals who have
              established themselves as successful business personnel – while
              managing risk and providing returns to our investors.
            </Typography>
            <Box sx={arrow}>
              <ArrowCircleRightIcon />
              <Typography>Cryptocurrency Investments</Typography>
            </Box>
            <Box sx={arrow}>
              <ArrowCircleRightIcon />
              <Typography>Financial Consulting</Typography>
            </Box>
            <Box sx={arrow}>
              <ArrowCircleRightIcon />
              <Typography>Stock & Commodities Trading</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`aboutpage`}
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "100px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {cards.map((items) => (
          <Box
            sx={{
              width: "400px",
              backgroundColor: "white",
              padding: "50px",
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
            }}
          >
            <Box sx={{ display: "flex", gap: "20px" }}>
              <img src={items.img} width="40px" height="40px" />
              <Typography>{items.typography1}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <Typography sx={color}>{items.typography}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <BottomBar />
    </>
  );
}
