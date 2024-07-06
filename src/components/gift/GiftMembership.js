import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import gift from '../../assets/gift/gift-give.jpg'
import wive from '../../assets/gift/line-squiggle.svg'
import sml from '../../assets/gift/sml-logo.png' 
import divider from '../../assets/gift/divider-main-5.png'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Tooltip,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useTheme } from "@mui/material/styles";
import checkboxImg from '../../assets/home/checkboxImg.png'
import crossImg from '../../assets/home/cross.png'
const GiftMembership = () => {

  return (

    <>

      <Box sx={{ backgroundColor: "cream", pt: "20px",pb:"70px", position:"relative" }}>
        <Box sx={{ position: 'absolute', top:{sm:'-40px',xs:"-20px"},left:'0',width:"100%"}}>
          <img src={divider} alt="divider image" />
        </Box>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{textAlign:{xs:'center',md:'unset'},zIndex:'11'}}>
              <Box
                sx={{
                  fontSize: { md: "48px", xs: "32px" },
                  margin: {md:"48px 0 24px"},
                }}
              >
                <Typography variant="span" sx={{ color: "darkGreen" }}>
                  Give the gift
                </Typography>{" "}
                of a BetterHelp membership
              </Box>
              <Grid
                item
                xs={12}
                              sx={{
                    
                                  display: { xs: "flex", md: "none" },
                                  justifyContent: "center",
                                  alignItems:"center"
                }}
              >
                <Box>
                  <Box
                    sx={{
                      borderRadius: "240px 15px 15px",
                      overflow: "hidden",
                      height:"194px",
                                          width: "198px",
                      my:"24px"
                    }}
                  >
                    <img src={gift} alt="gift" />
                  </Box>
                </Box>
              </Grid>
              <Box sx={{ fontSize:{md: "20px",xs:"16px"}, margin: { xl: "0 100px 40px 0" } }}>
                Therapy is one of the most meaningful gifts you can give to your
                friends and loved ones.
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "20px",
                    borderRadius: "30px",
                    color: "darkGreen",
                    borderColor: "darkGreen",
                    padding: "10px 36px",
                    textTransform: "inherit",
                    "&:hover": {
                      borderColor: "darkGreen",
                      backgroundColor: "#F5FBF4",
                    },
                    my: { xs: "40px", lg: "unset" },
                    width:{md:"unset",xs:"100%"}
                  }}
                >
                  Gift a membership
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                alignContent: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    borderRadius: "240px 15px 15px",
                    overflow: "hidden",
                    height: { xl: "346px" },
                    width: { xl: "384px" },
                  }}
                >
                  <img src={gift} alt="gift" />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-50px",
                    right: { xl: "-20%", xs: "-5%" },
                    width: "85px",
                    height: "52px",
                    zIndex: "11",
                  }}
                >
                  <img src={wive} alt="gift wive" />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={6} mt={{ md: "90px", xs: "0px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: "20px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "14px",
                    color: "liteBlack",
                    fontWeight: "700",
                  }}
                >
                  If you are in a crisis or any other person may be in danger -
                  don't use this site. <br />
                  <Typography
                    variant="span"
                    sx={{ color: "darkGreen", textDecoration: "underline" }}
                  >
                    These resources
                  </Typography>{" "}
                  can provide you with immediate help.
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={6} mt={{ md: "90px", xs: "32px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {md:"end"},
                  alignItems: "center",
                  py: {md:"20px"},
                  opacity: ".5",
                }}
              >
                <Box sx={{ height: "40px", width: "115px" }}>
                  <img src={sml} alt="small logo" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GiftMembership;
