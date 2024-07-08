import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/home/divider-main-2.png";
import img1 from "../../assets/business/asset 38.png";
import img2 from "../../assets/business/asset 37.png";
import image1 from "../../assets/business/image-3.jpg";

function ClinicalApproach() {
  return (
    <>
      <Box position={"relative"}>
        <Box
          position={"relative"}
          sx={{ height: "100%", width: "100%", backgroundColor: "#FFFCF6" }}
        >
          <Grid container display={"flex"} justifyContent={"center"} pt={3}>
            <Grid item xl={7}>
              <Grid container display={"flex"} justifyContent={"center"} pt={5}>
                <Grid item lg={6} alignSelf={"center"} px={5}>
                  <Box>
                    <Typography
                      className="overpass title"
                      mb={4}
                      sx={{ fontSize: "32px", color: "#444444" }}
                    >
                      A clinical approach that works
                    </Typography>
                    <Typography
                      mb={4}
                      sx={{
                        fontSize: "17px",
                        color: "#4a4d4a",
                        lineHeight: "1.75rem",
                        fontWeight: "100",
                      }}
                    >
                      Since 2013, Mwellness has supported millions of clients
                      and hundreds of organizations by providing
                      clinically-proven and evidence-based results for companies
                      seeking to improve employee wellbeing.
                    </Typography>
                    <Box>
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
                  </Box>
                </Grid>
                <Grid
                  item
                  mt={5}
                  lg={6}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box sx={{ margin: "80px 0px 0px 0px" }}>
                    <Box px={5} mx={0}>
                      <Box
                        position={"relative"}
                        sx={{
                          width: { xs: "160px", sm: "288px" },
                          height: { xs: "auto", sm: "285px" },
                        }}
                      >
                        <img
                          src={img2}
                          alt="Image 2"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <Box
                          position={"absolute"}
                          top={{ sm: "-100px", xs: "-80px" }}
                          right={{ sm: "-240px", xs: "-130px" }}
                          sx={{
                            width: { xs: "100%", sm: "288px" },
                            height: { xs: "auto", sm: "285px" },
                          }}
                        >
                          <img
                            src={img1}
                            alt="Image 1"
                            style={{ width: "100%", height: "auto" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ margin: "0px 90px" }}>
                      <Typography
                        my={2}
                        display={"inline-block"}
                        sx={{ fontSize: "18px", color: "#6d706c" }}
                      >
                        * After 6 weeks of therapy on Mwellness.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ position: "absolute", top: "0px", width: "100%" }}>
            <img src={image1} alt={image1} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ClinicalApproach;
