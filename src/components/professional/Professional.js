import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import professionalImg from '../../assets/home/professional.png';
import divider2 from '../../assets/home/divider-main-2.png';

function Professional(props) {
    return (
        <Box sx={{

            background: "linear-gradient(#f7f0e6 60%, #fffcf6 90%)",
            position: "relative",
            "&:before": {
                content: "''",
                height: "84px",
                width: "100%",
                backgroundColor: "cream",
                borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                position: "absolute",
                bottom: "100%"
            }
        }}>
            <Container>
                <Grid container sx={{py: {xs: "50px", md: "100px"}, pb: "250px !important"}}>
                    <Grid item xs={12} md={6}>
                        <Box className="title overpass" sx={{fontSize: {xs: 28, sm: 38, md: 48}, letterSpacing: -1.5, fontWeight: 300}}>Professional
                            and credentialed therapists who you can trust</Box>
                        <Box sx={{maxHeight: "100%", display: {md: "none", xs: "block"}}}>
                            <img src={professionalImg} alt="professional"/>
                        </Box>
                        <Box sx={{fontSize: {xs: "18px", md: "20px"}, color: 'liteBlack', my: "35px", lineHeight: 1.5, fontWeight: 300 }}>Tap into the
                            world's largest network of credentialed and experienced therapists who can help you with a
                            range of issues including depression, anxiety, relationships, trauma, grief, and more. With
                            our therapists, you get the same professionalism and quality you would expect from an
                            in-office therapist, but with the ability to communicate when and how you want.</Box>
                        <Box sx={{textAlign: {md: "start", xs: "center"}}}>
                            <Button
                                className="overpass"
                                sx={{
                                    // fontWeight: 600,
                                    backgroundColor: "liteGreen",
                                    py: "10px",
                                    px: {xs: "14px", md: "28px"},
                                    textTransform: "unset",
                                    fontSize: {xs: "17px", md: "20px"},
                                    color: "green",
                                    borderRadius: "30px",
                                    "&:hover": {
                                        backgroundColor: "green",
                                        color: "white",
                                    },
                                }}
                            >
                                Get matched to a therapist
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: {md: "block", xs: "none"}}}>
                        <Box sx={{maxHeight: "100%"}}>
                            <img src={professionalImg} alt="professional"/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{position: "absolute", bottom: "-10px", width: "100%"}}>
                <img src={divider2} alt="divider image"/>
            </Box>
        </Box>
    );
}

export default Professional;