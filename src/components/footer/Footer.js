import React from "react";
import { Box, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
function Footer(props) {
  return (
    <>
      <Box sx={{ backgroundColor: "white", padding: "20px 0 40px" }}>
        <Container>
          <Box>
            <Box
              className="main"
              sx={{
                display: { md: "flex" },
                justifyContent: "space-between",
                //   alignItems: "center",
                py: "16px",
                borderBottom: "2px solid #e7ece7 ",
                color: "liteBlack",
                fontSize: "14px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: { lg: "flex" },
                    padding: { xs: "30px 0 0 0", sm: "30px 0", lg: "unset" },
                  }}
                >
                  {" "}
                  <NavLink to={"/"}>
                    <Box
                      className="box"
                      sx={{ my: { xs: "20px", lg: "unset" } }}
                    >
                      Home
                    </Box>
                  </NavLink>
                  <NavLink to={"/business"}>
                    <Box
                      className="box"
                      sx={{ my: { xs: "20px", lg: "unset" } }}
                    >
                      Business
                    </Box>
                  </NavLink>
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
                    padding: { xs: "30px 0 0 0", md: "30px 70px", lg: "unset" },
                    marginLeft: { xs: "20%", sm: "20%", md: "unset" },
                  }}
                >
                  <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                    Careers
                  </Box>
                  <Box className="box" sx={{ my: { xs: "20px", lg: "unset" } }}>
                    FindaTherapist
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
                  display: { md: "flex" },
                  alignItems: "center",
                  py: "16px",
                  color: "liteBlack",
                  fontSize: "14px",
                }}
              >
                <Box className="box" sx={{ my: { xs: "15px", md: "unset" } }}>
                  Terms & Conditions
                </Box>
                <Box className="box" sx={{ my: { xs: "15px", md: "unset" } }}>
                  Privacy Policy
                </Box>
                <Box className="box" sx={{ my: { xs: "15px", md: "unset" } }}>
                  Sharing Setting
                </Box>
                <Box className="box" sx={{ my: { xs: "15px", md: "unset" } }}>
                  Web Accessbility
                </Box>
                <Box className="box" sx={{ my: { xs: "15px", md: "unset" } }}>
                  © 2024 MWellness
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
