import { Box } from "@mui/joy";
import React from "react";
import Topbar from "./topbar";
import logo from "./images/logo-no-background.png";
import Typography from "@mui/joy/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderImage1 from "./images/pic1.jpg";
import sliderImage2 from "./images/pic2.jpg";
import sliderImage3 from "./images/pics.jpg";
import phonelogo from "./images/telephone.png";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import image from "./images/home-business-tab-img01.jpg";
import image1 from "./images/home-business-parallax-bg.jpg";
import BottomBar from "./bottombar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import SignUp from "../pages/signUp";
import Login from "../pages/login";
import ContactUs from "../pages/ContactUs";

export default function index() {
  const cards = [
    {
      heading: "BLUE PLAN",
      peragraph0: "BASIC FEATURES",
      peragraph1: "4% DAILY FOR 4 DAYS",
      peragraph2: "Minimum deposit: $50",
      peragraph3: "Maximum deposit:$4,999",
      peragraph4: "Principal Returned",
      peragraph5: "Instant Withdrawal",
      peragraph6: "Referral Commission:10%",
    },
    {
      heading: "ADVANCE PLAN",
      peragraph0: "STANDARD FEATURES",
      peragraph1: "10% DAILY FOR 7 DAYS",
      peragraph2: "Minimum deposit: $5,000",
      peragraph3: "Maximum deposit:$10,000",
      peragraph4: "Instant Withdrawal",
      peragraph5: "Referral Commission:10%",
      peragraph6: "Referral Commission:10%",
    },
    {
      heading: "BLUE PLAN",
      peragraph0: "PREMIUM FEATURES",
      peragraph1: "15% DAILY FOR 7 DAYS",
      peragraph2: "Minimum invest: $10,000",
      peragraph3: "Maximum Deposit: $14,999",
      peragraph4: "Principal Returned",
      peragraph5: "Instant Withdrawal",
      peragraph6: "Referral Commission:10%",
      peragraph6: "Referral Commission:10%",
    },
  ];
  const data1 = [
    {
      img: `${phonelogo}`,
      peragraph0: "Online Registration",
      peragraph1:
        "Everything starts with free online registration. Only basic data is needed - name, email, investment plan etc.",
    },
    {
      img: `${phonelogo}`,
      peragraph0: "Develop Portfolio",
      peragraph1:
        "After the basic registration, we develop an investment portfolio to help reach your financial goals.",
    },
    {
      img: `${phonelogo}`,
      peragraph0: "Fund Account",
      peragraph1:
        "You open your account for trading by depositing investment funds.",
    },
    {
      img: `${phonelogo}`,
      peragraph0: "Earning Returns",
      peragraph1:
        "Management and Trading starts on your account and you start accumulating earnings.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1500 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <style>{`
@media only screen and (max-width: 768px){
  .box1{
    display:none;
  }
  .AboutSection{
    display:none;
  }
.aboutSection1{
  margin:0;
}
.Typography1{
  font-Size:20px;
}
.Box00{
  width:100%;
  
}
.indexSection{
  display:none;
}
.indexS{
  margin-Top:0;
  background-Color:lightgray;
 padding-Bottom:20px;

}
.fontS{
  font-Size:24px;
  font-weight:800;
}
.indexSection0{
  width:100%
}
.AboutThis{
  margin-Top:0;
  padding:10px;
}
 
.services1{
  padding:10px;
}
.services2{
  width:100%;
}
.position1{
 display:none;
}
 
}

`}</style>

      <Box className={`box1`}>
        <Carousel responsive={responsive}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage1})`,
                width: "100%",
                height: "650px",
              }}
            ></Box>

            <Typography
              sx={{
                position: "absolute",
                top: "5%",
                left: "15%",
                fontSize: "52px",
                fontWeight: "800",
                color: "white",
                width: "500px",
              }}
            >
              <Box>
                <Typography sx={{ color: "red" }}>Ankit</Typography>
              </Box>
              All Your investment in one place
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "60%",
                left: "15%",
                fontSize: "18px",
                fontWeight: "400",
                color: "white",
                width: "550px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem voluptate possimus nisi ea quas? Facere, nemo
              aperiam excepturi saepe officia debitis harum eius
              provident minima tempore corporis nam vitae natus.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                left: "15%",
                display: "flex",
                gap: "20px",
              }}
            >
              <Link to="SignUp">
                <button
                  style={{
                    padding: "5px 20px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Register
                </button>
              </Link>
              <Link
                style={{
                  padding: "5px 20px",
                  border: "none",
                }}
                to="Login"
              >
                Login
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage2})`,
                width: "100%",
                height: "650px",
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "5%",
                left: "15%",
                fontSize: "52px",
                fontWeight: "800",
                color: "white",
                width: "500px",
              }}
            >
              Investment & Wealth Management
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "15%",
                fontSize: "18px",
                fontWeight: "400",
                color: "white",
                width: "550px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem voluptate possimus nisi ea quas? Facere, nemo
              aperiam excepturi saepe officia debitis harum eius
              provident minima tempore corporis nam vitae natus.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: "20%",
                left: "15%",
                display: "flex",
                gap: "20px",
              }}
            >
              <button
                style={{
                  padding: "5px 20px",
                  border: "none",
                  background: "rgba(255, 255, 255, 0.5)",
                }}
              >
                About
              </button>
              <a
                style={{
                  padding: "5px 20px",
                  border: "none",
                }}
                href="#"
              >
                Faq's
              </a>
            </Box>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderImage3})`,
                width: "100%",
                height: "650px",
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: "5%",
                left: "15%",
                fontSize: "52px",
                fontWeight: "800",
                color: "white",
                width: "500px",
              }}
            >
              Security
              <br /> Above Everything
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "15%",
                fontSize: "18px",
                fontWeight: "400",
                color: "white",
                width: "550px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem voluptate possimus nisi ea quas? Facere, nemo
              aperiam excepturi saepe officia debitis harum eius
              provident minima tempore corporis nam vitae natus.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: "20%",
                left: "15%",
                display: "flex",
                gap: "20px",
              }}
            >
              <Link to="ContactUs">
                <button
                  style={{
                    padding: "5px 20px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Contact
                </button>
              </Link>
              <a
                style={{
                  padding: "5px 20px",
                  border: "none",
                }}
                href="#"
              >
                How we work
              </a>
            </Box>
          </Box>
        </Carousel>
      </Box>
      <Box
        className={`aboutSection1`}
        sx={{
          marginTop: "100px",
          padding: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1200px",
            justifyContent: "space-between",
          }}
        >
          <Box
            className={`AboutSection`}
            sx={{
              width: "500px",
              height: "400px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginRight: "300px",
            }}
          >
            <Typography>About Company</Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "32px",
                textAlign: "center",
              }}
            >
              Starting investing Right Now
            </Typography>
            <button
              style={{
                position: "absolute",
                bottom: "0",
                border: "none",
                padding: "2px 15px",
              }}
            >
              view license certificate
            </button>
          </Box>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: "50px" }}
          >
            {data1.map((item) => {
              return (
                <Box
                  sx={{
                    width: "300px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <img
                      src={item.img}
                      alt="logo"
                      width="40px"
                      height="40px"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "500",
                      }}
                    >
                      {item.peragraph0}
                    </Typography>
                    <Typography
                      sx={{ color: "gray", fontSize: "15px" }}
                    >
                      {item.peragraph1}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            className={`Typography1`}
            sx={{ fontSize: "32px", fontWeight: "600" }}
          >
            Kodascoinprofits Company Video
          </Typography>
        </Box>
        <Box
          className={`Box00`}
          component="ul"
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            p: 0,
            mt: 4,
          }}
        >
          <Card
            component="li"
            sx={{ minWidth: 300, minHeight: 600, flexGrow: 1 }}
          >
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </CardCover>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f7f7f7",
          paddingTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "42px", fontWeight: "600" }}>
            Investment Plans
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {cards.map((item) => {
            return (
              <Box
                sx={{
                  padding: "50px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "32px",
                    color: "blue",
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  {item.peragraph0}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "50px",
                    textAlign: "center",
                    fontSize: "32px",
                    fontWeight: "600",
                  }}
                >
                  {item.peragraph1}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    {item.peragraph2}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    {item.peragraph3}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    {item.peragraph4}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    {item.peragraph5}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    {item.peragraph6}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <button style={{ padding: "2px 20px" }}>
                    Choose plan
                  </button>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "relative",
            left: "-5px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#f7f7f7",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              padding: "50px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "32px",
                color: "blue",
              }}
            >
              EXPERT PLAN
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "12px",
                color: "gray",
              }}
            >
              PREMIUM FEATURES
            </Typography>
            <Typography
              sx={{
                marginTop: "50px",
                textAlign: "center",
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              25% DAILY FOR 7 DAYS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Minimum invest: $15000
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Maximum Deposit: Unlimited
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Principal Returned
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Instant Withdrawal
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Referral Commission:10%
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <button style={{ padding: "2px 20px" }}>
                Choose plan
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            // height: "400px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            className={`indexSection`}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>DIVERSIFICATION IS KEY</Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
              Invest Confidently in <br />
              Digital Currencies
            </Typography>
            <button
              style={{
                position: "absolute",
                bottom: "0",
                padding: "5px 25px",
                border: "1px solid lightgray",
              }}
            >
              start Investing
            </button>
          </Box>
          <Box
            className={`indexSection`}
            sx={{
              display: "flex",
              gap: "50px",
            }}
          >
            <Box sx={{ width: "300px" }}>
              <Box
                sx={{
                  border: "10px solid lightgray",
                  borderTop: "10px solid white",
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                92%
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "600" }}
                >
                  TRAINED TEAM
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  kodascoinprofits.ltd has a team of trained traders
                  in Forex & Crypto Exchange and Crypto Mining who
                  grasp how to clutch the profit at the end of the
                  day.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "300px" }}>
              <Box
                sx={{
                  border: "10px solid lightgray",
                  borderTop: "10px solid white",
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                92%
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "600" }}
                >
                  Diversified Portfolio
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  Every portfolio we create for each of our clients is
                  built through an independent selection process which
                  balances factors such as geography, sector and
                  volatility to help ensure it’s successfully
                  diversified.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={`indexS`} sx={{ marginTop: "100px" }}>
        <Typography
          className={`fontS`}
          sx={{ padding: "20px", textAlign: "center" }}
        >
          Planing
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "1100px",
              flexWrap: "wrap",
            }}
          >
            <Box
              className={`indexSection`}
              sx={{
                width: "500px",
              }}
            >
              <img src={image} alt="logo" width="500px" />
            </Box>
            <Box
              className={`indexSection0`}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "500px",
              }}
            >
              <Box
                className={`AboutThis`}
                sx={{
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "600" }}
                >
                  MODERNIZED INVESTMENT
                </Typography>
                <Typography
                  sx={{ fontSize: "32px", fontWeight: "700" }}
                >
                  The Investment Landscape is Changing
                </Typography>
                <Typography
                  sx={{ fontSize: "15px", lineHeight: "25px" }}
                >
                  Digital currencies are at the center of several
                  trends reshaping the investment landscape,
                  particularly demographic shifts, an updated market
                  paradigm, and evolving regulations.
                </Typography>
              </Box>
              <Box>
                <button
                  style={{
                    padding: "5px 30px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Company Certificate
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={`Services`} sx={{ marginTop: "150px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>
            OUR PREMIUM SERVICES
          </Typography>
          <Typography sx={{ color: "lightgray" }}>
            WHY INSVERSTOR CHOOSE US
          </Typography>
        </Box>
        <Box
          className={`services1`}
          sx={{
            padding: "100px 100px 0px 100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            className={`services1`}
            sx={{
              display: "flex",

              gap: "20px",
              padding: "60px",
            }}
          >
            <img src={phonelogo} width="40px" height="40px" />
            <Box className={`services2`} sx={{ width: "450px" }}>
              <Typography
                sx={{ fontWeight: "500", marginBottom: "20px" }}
              >
                INSTANT ACCOUNT
              </Typography>
              <Typography sx={{ color: "lightgray" }}>
                Set up your account within seconds with
                kodascoinprofits.ltd, invest in a plan and get daily
                returns using our Crypto investment service.
              </Typography>
            </Box>
          </Box>
          <Box
            className={`services1`}
            sx={{ display: "flex", gap: "20px", padding: "60px" }}
          >
            <img src={phonelogo} width="40px" height="40px" />
            <Box className={`services2`} sx={{ width: "450px" }}>
              <Typography
                sx={{ fontWeight: "500", marginBottom: "20px" }}
              >
                INSTANT WITHDRAWAL
              </Typography>
              <Typography sx={{ color: "lightgray" }}>
                Withdrawals from kodascoinprofits.ltd wallet are sent
                to your external wallet instantly from the time of
                your withdrawal.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className={`services1`}
          sx={{
            padding: "20px 100px 0px 100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            className={`services1`}
            sx={{ display: "flex", gap: "20px", padding: "60px" }}
          >
            <img src={phonelogo} width="40px" height="40px" />
            <Box className={`services2`} sx={{ width: "450px" }}>
              <Typography
                sx={{ fontWeight: "500", marginBottom: "20px" }}
              >
                DETAILED STATISTICS
              </Typography>
              <Typography sx={{ color: "lightgray" }}>
                Get detailed statistics of your plans purchased with
                kodascoinprofits.ltd and the daily returns you are
                getting from them.
              </Typography>
            </Box>
          </Box>
          <Box
            className={`services1`}
            sx={{ display: "flex", gap: "20px", padding: "60px" }}
          >
            <img src={phonelogo} width="40px" height="40px" />
            <Box className={`services2`} sx={{ width: "450px" }}>
              <Typography
                sx={{ fontWeight: "500", marginBottom: "20px" }}
              >
                FAST CUSTOMER SUPPORT
              </Typography>
              <Typography sx={{ color: "lightgray" }}>
                The customer is always right. It is the basis of all
                which our business is based on. You will feel comfort,
                having cooperated with us.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`position1`}
        sx={{ position: "relative", marginTop: "50px" }}
      >
        <img src={image1} alt="logo" width="100%" height="600px" />
        <Typography
          sx={{
            position: "absolute",
            top: "40%",
            left: "37%",
            color: "white",
            fontSize: "42px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Partnership Program
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "52%",
            left: "28%",
            color: "white",
            fontSize: "42px",
          }}
        >
          EARN 10% AFFILIATE COMMISSION
        </Typography>
      </Box>
      <BottomBar />
      <Box>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
      </Box>
    </>
  );
}
