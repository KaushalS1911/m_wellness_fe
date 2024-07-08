import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Hitrust from "../../assets/business/hitrust-2x.png";
import image1 from "../../assets/business/image-1.jpg";
import image2 from "../../assets/business/image-2.jpg";

function HitrustCertified() {
  return (
    <>
      <Box
        position={"relative"}
        // sx={{ padding: " 90px 0px" }}
      >
        <Grid
          container
          py={5}
          display={"flex"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#325343" }}
        >
          <Grid item xs={7} padding={{ md: "80px 0" }}>
            <Box>
              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid
                  item
                  md={2}
                  xl={1}
                  my={{ md: 0, xs: 3 }}
                  alignSelf={"center"}
                >
                  <Box sx={{ height: "74px", width: "96px" }}>
                    <img
                      src={Hitrust}
                      alt={Hitrust}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={9}
                  px={5}
                  my={{ md: 0, xs: 3 }}
                  className="title overpass"
                >
                  <Typography sx={{ fontSize: "24px", color: "white" }}>
                    Now more than ever it's crucially important to know who you
                    can trust.
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "white" }}>
                    Mwellness.com is now HITRUST certified.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ position: "absolute", top: "0", width: "100%" }}>
          <img src={image1} alt={image1} />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-20px", width: "100%" }}>
          <img src={image2} alt={image2} />
        </Box>
      </Box>
    </>
  );
}

export default HitrustCertified;
