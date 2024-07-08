import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import logo1 from "../../assets/business/zoomillustration.png";
import Privacy from "../../assets/business/lock.png";
import Security from "../../assets/business/security.png";
import Quality from "../../assets/business/checklist.png";

function StandardIndustry() {
  return (
    <>
      <Box
        sx={{
          height: "50px",
          backgroundColor: "#F7F0E6",
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
        }}
      ></Box>
      <Box sx={{ backgroundColor: "#F7F0E6" }} pt={5}>
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={7}>
            <Box>
              <Grid container>
                <Grid item lg={4}>
                  <img src={logo1} alt="Zoom Illustration" />
                </Grid>
                <Grid
                  item
                  lg={8}
                  px={{ lg: 5, xs: 0 }}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box px={3}>
                    <Typography
                      className="overpass title"
                      pt={3}
                      mb={3}
                      sx={{
                        fontSize: "32px",
                        fontWeight: "300",
                        color: "#444444",
                      }}
                    >
                      We set the standard for the industry
                    </Typography>
                    <Typography sx={{ fontSize: "18px", color: "#4a4d4a" }}>
                      As the gold standard of the online mental health industry,
                      we proudly provide quality and clinically-proven results
                      to our members. It is our goal to ensure total privacy,
                      unparalleled security, and the highest-quality therapy for
                      your employees.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5} pt={3}>
              <Grid container spacing={3}>
                <Grid item sm={6} lg={4}>
                  <Box>
                    <Box sx={{ margin: "0px 80px" }}>
                      <img src={Privacy} alt={Privacy} />
                    </Box>
                    <Box textAlign={"center"}>
                      <Typography
                        className="overpass title"
                        sx={{
                          fontSize: "24px",
                          color: "#444444 ",
                          fontWeight: "300",
                        }}
                        pb={1.5}
                      >
                        Privacy
                      </Typography>
                      <Typography sx={{ fontSize: "16px", color: "#4a4d4a" }}>
                        Our platform is secured by banking-grade 256-bit
                        encryption.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={6} lg={4}>
                  <Box>
                    <Box sx={{ margin: "0px 80px" }}>
                      <img src={Security} alt={Security} />
                    </Box>
                    <Box textAlign={"center"}>
                      <Typography
                        className="overpass title"
                        sx={{
                          fontSize: "24px",
                          color: "#444444 ",
                          fontWeight: "300",
                        }}
                        pb={1.5}
                      >
                        Security
                      </Typography>
                      <Typography sx={{ fontSize: "16px", color: "#4a4d4a" }}>
                          Mwellness is HITRUST Risk-based, 2-year (r2) Certified.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={6} lg={4}>
                  <Box>
                    <Box sx={{ margin: "0px 80px" }}>
                      <img src={Quality} alt={Quality} />
                    </Box>
                    <Box textAlign={"center"}>
                      <Typography
                        className="overpass title"
                        sx={{
                          fontSize: "24px",
                          color: "#444444 ",
                          fontWeight: "300",
                        }}
                        pb={1.5}
                      >
                        Quality
                      </Typography>
                      <Typography sx={{ fontSize: "16px", color: "#4a4d4a" }}>
                        Our platform is built on state-of-the-art technology,
                        operations, and infrastructure.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box display={"flex"} justifyContent={"center"} my={5} py={4}>
              <Button
                className="overpass"
                sx={{
                  backgroundColor: "liteGreen",
                  py: "10px",
                  px: "28px",
                  textTransform: "unset",
                  fontSize: "20px",
                  color: "green",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                  },
                }}
              >
                Request a demo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default StandardIndustry;
