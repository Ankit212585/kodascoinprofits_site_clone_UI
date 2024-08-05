import React from "react";
import image from "./images/faq-bg.jpg";
import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import BottomBar from "../NewProject/bottombar";

export default function faq() {
  const flex1 = [
    {
      heading: "How can I invest with kodascoinprofits.ltd?",
      peragraph:
        "To make an investment you must first become a member of kodascoinprofits.ltd. Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when signup.",
    },
    {
      heading: "Is there any restrictions on individuals?",
      peragraph:
        "Yes, project participants may be only adult persons aged 18 and older.",
    },
    {
      heading:
        "How long does it take for my deposit to be added to my account?",
      peragraph: "Your account will be updated as fast, as you deposit.",
    },
    {
      heading: "Is there a fee on participants while withdrawing?",
      peragraph:
        "There is no fees for deposits and withdrawals.We are not responsible for fees payment systems through which you make deposit. As a rule, the amount they are regulated and described on the website of each of the submitted payment systems.",
    },
  ];
  const flex2 = [
    {
      heading: "How do you calculate the interest on my account?",
      peragraph:
        "Depending on each plan. Interest on your account is acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and credited to your available balance at the end of each day.",
    },
    {
      heading: "May I open several accounts in your platform?",
      peragraph:
        "No. If we find that one member has more than one account, the entire funds will be frozen.",
    },
    {
      heading: "Where can I find more information?",
      peragraph:
        "For more information or follow-up questions, please contact us directly through our live chat or support",
    },
    {
      heading:
        "Can I make an additional deposit to account once it has been opened?",
      peragraph: "Yes, you can but all transactions are handled separately.",
    },
  ];
  return (
    <>
      <style>{`
      @media only screen and (max-width: 768px) {
        .faq{
          display:none
        }
        .faq1{
          width:100%;
        }

      }
    
    `}</style>
      {/* <Box className={`faq`} sx={{ position: "relative" }}>
        <img src={image} width="100%" height="650px" />
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
              top: "30%",
              fontSize: "42px",
              color: "whitesmoke",
              fontWeight: "500",
            }}
          >
            How can we help you?
          </Typography>
          <input
            style={{
              width: "700px",
              position: "absolute",
              top: "50%",
              padding: "15px 20px",
              border: "none",
              outline: "none",
            }}
            placeholder="Type keyword to find answer"
          ></input>
        </Box>
      </Box> */}
      <Box
        className={`faq1`}
        sx={{ padding: "100px 0px", backgroundColor: "#f7f7f7" }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            Most common question
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "42px ", fontWeight: "600" }}
          >
            Frequently asked question
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            className={`faq1`}
            sx={{
              marginTop: "100px",
              display: "flex",
              flexWrap: "wrap",
              padding: "20px",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                flex: "1",
                flexWrap: "wrap",
                margin: "20px",
                display: "grid",
                gap: "20px",
              }}
            >
              {flex1.map((item) => (
                <Box
                  className={`faq1`}
                  sx={{
                    width: "500px",
                    display: "grid",
                    gap: "20px",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    {item.peragraph}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ flex: "1", display: "grid", gap: "20px" }}>
              {flex2.map((item) => (
                <Box
                  className={`faq1`}
                  sx={{
                    width: "500px",
                    display: "grid",
                    gap: "20px",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    {item.peragraph}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <BottomBar />
    </>
  );
}
