import React from "react";
import { Box, Container } from "@mui/material";
function Footer(props) {
  return (
    <>
      <Container>
        <Box>
          <Box
            className="main"
            sx={{
              display: {md:"flex"},
              justifyContent: "space-between",
              //   alignItems: "center",
              py: "16px",
              borderBottom: "2px solid #e7ece7 ",
              color: "liteBlack",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: { lg: "flex" },
                  padding: {xs:'30px 0 0 0', sm: "30px 0", lg: "unset" },
                }}
              >
                {" "}
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Home
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Business
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  About
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  FAQ
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Reviews
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Advice
                </Box>
              </Box>
              <Box
                sx={{
                  display: { lg: "flex" },
                  padding: {xs:"30px 0 0 0",md: "30px 70px", lg: "unset" },
                  marginLeft:{xs:'20%',sm:"20%",md:'unset'}
                }}
              >
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Careers
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Find aTherapist
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Online Therapy
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  Contact
                </Box>
                <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                  For Therapists
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", py: { xs: "30px", lg: "unset" } }}>
              {" "}
              <Box
                sx={{
                  color: "white",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "darkGreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "5px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  cursor: "pointer",
                }}
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Box>
              <Box
                sx={{
                  color: "white",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "darkGreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "5px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  cursor: "pointer",
                }}
              >
                <i class="fa-brands fa-instagram"></i>
              </Box>
              <Box
                sx={{
                  color: "white",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "darkGreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "5px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  cursor: "pointer",
                }}
              >
                <i class="fa-brands fa-tiktok"></i>
              </Box>
              <Box
                sx={{
                  color: "white",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "darkGreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "5px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  cursor: "pointer",
                }}
              >
                <i class="fa-brands fa-x-twitter"></i>
              </Box>
              <Box
                sx={{
                  color: "white",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "darkGreen",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "5px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                  cursor: "pointer",
                }}
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              className="main"
              sx={{
                display: {md:"flex"},
                alignItems: "center",
                py: "16px",
                color: "liteBlack",
              }}
            >
              <Box className="box" sx={{my:{xs:"15px",md:'unset'}}}>Terms & Conditions</Box>
              <Box className="box" sx={{my:{xs:"15px",md:'unset'}}}>Privacy Policy</Box>
              <Box className="box" sx={{my:{xs:"15px",md:'unset'}}}>Sharing Setting</Box>
              <Box className="box" sx={{my:{xs:"15px",md:'unset'}}}>Web Accessbility</Box>
              <Box className="box" sx={{my:{xs:"15px",md:'unset'}}}>© 2024 BetterHelp</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
