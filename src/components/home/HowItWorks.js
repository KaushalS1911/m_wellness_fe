import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import image1 from "../../assets/home/image-how-it-works-1.png";
import image2 from "../../assets/home/image-how-it-works-2.png";
import image3 from "../../assets/home/image-how-it-works-3.png";
import arro from "../../assets/home/arrow-down-green-2.png";
function HowItWorks() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const getTitleFontSize = () => {
        if (isSmallScreen) return "24px";
        if (isMediumScreen) return "36px";
        return "48px";
    };
    const getSubtitleFontSize = () => {
        if (isSmallScreen) return "16px";
        if (isMediumScreen) return "18px";
        return "20px";
    };
    return (
        <Box sx={{ backgroundColor: "#F5F7F5" }}>
            <Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Typography
                        my={5}
                        sx={{
                            fontSize: getTitleFontSize(),
                            fontWeight: "500",
                            color: "#252625",
                        }}
                    >
                        How it works
                    </Typography>
                </Box>
                <Grid container py={5} display={"flex"} justifyContent={"center"}>
                    <Grid item xl={8}>
                        <Box>
                            <Grid container my={5}>
                                <Grid item md={8}>
                                    <Box>
                                        <img src={image1} alt="How it works step 1" />
                                    </Box>
                                </Grid>
                                <Grid item md={4} alignSelf={"center"} p={{ xs: 5, md: 0 }}>
                                    <Box>
                                        <Typography style={{ fontSize: "32px", color: "4a4d4a" }}>
                                            Get matched to the best therapist for you
                                        </Typography>
                                        <Typography
                                            mt={3}
                                            style={{
                                                fontSize: getSubtitleFontSize(),
                                                color: "4a4d4a",
                                            }}
                                        >
                                            Answer a few questions to find a credentialled therapist
                                            who fits your needs and preferences. Tap into the largest
                                            network of credentialled providers.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box sx={{ height: "80px", width: "60px", objectFit: "contain" }}>
                                <img src={arro} alt="Arrow down" />
                            </Box>
                        </Box>
                        <Box>
                            <Grid container py={5} my={5}>
                                <Grid item md={8}>
                                    <Box>
                                        <img src={image2} alt="How it works step 2" />
                                    </Box>
                                </Grid>
                                <Grid item md={4} alignSelf={"center"} p={{ xs: 5, md: 0 }}>
                                    <Box>
                                        <Typography style={{ fontSize: "32px", color: "4a4d4a" }}>
                                            Get matched to the best therapist for you
                                        </Typography>
                                        <Typography
                                            mt={3}
                                            style={{
                                                fontSize: getSubtitleFontSize(),
                                                color: "4a4d4a",
                                            }}
                                        >
                                            Answer a few questions to find a credentialled therapist
                                            who fits your needs and preferences. Tap into the largest
                                            network of credentialled providers.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box sx={{ height: "80px", width: "60px", objectFit: "contain" }}>
                                <img src={arro} alt="Arrow down" />
                            </Box>
                        </Box>
                        <Box>
                            <Grid container py={5} my={5}>
                                <Grid item md={8}>
                                    <Box>
                                        <img src={image3} alt="How it works step 3" />
                                    </Box>
                                </Grid>
                                <Grid item md={4} alignSelf={"center"} p={{ xs: 5, md: 0 }}>
                                    <Box>
                                        <Typography style={{ fontSize: "32px", color: "4a4d4a" }}>
                                            Get matched to the best therapist for you
                                        </Typography>
                                        <Typography
                                            mt={3}
                                            style={{
                                                fontSize: getSubtitleFontSize(),
                                                color: "4a4d4a",
                                            }}
                                        >
                                            Answer a few questions to find a credentialled therapist
                                            who fits your needs and preferences. Tap into the largest
                                            network of credentialled providers.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default HowItWorks;