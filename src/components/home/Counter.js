import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import counterImg from '../../assets/home/counter.png';

function Counter() {
    const stats = [
        { value: '386,025,679', description: 'Messages, chat, phone, video sessions' },
        { value: '34,794', description: 'Credentialed therapists ready to help' },
        { value: '4,830,879', description: 'People got help' }
    ];

    const titleLines = [
        "The world's largest therapy service.",
        "100% online."
    ];

    return (
        <Box sx={{ backgroundColor: "liteCream",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <Container>
                <Box sx={{ pb:20, pt: 6 }}>
                    <Grid container sx={{display:" flex", justifyContent: "center", alignItems: "center"}}>
                        <Grid item md={6} xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: { xs: "40px", md: "unset" },
                                    width: "70%",
                                    mx: "auto"
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        "&:after": {
                                            content: '""',
                                            width: "72px",
                                            height: "108px",
                                            backgroundImage: `url(${counterImg})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "100% 100%",
                                            position: "absolute",
                                            bottom: { md: "80%", sm: "50%", xs: "70%" },
                                            right: { sm: "100%", xs: "90%" },
                                        }
                                    }}
                                >
                                    {titleLines.map((line, index) => (
                                        <Box className="title overpass" key={index} sx={{ fontSize: { lg: 48, xs: 32 }, letterSpacing: -1.5, fontWeight: 300, color: index === 1 ? "green" : "black" }}>
                                            {line}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            {stats.map((stat, index) => (
                                <Box key={index} sx={{
                                    borderBottom: index !== stats.length - 1 ? "1px solid #c3c8c1" : "none",
                                    my: index !== 0 ? "20px" : "0"
                                }}>
                                    <Box className="title overpass" sx={{ color: "green", fontWeight: 700, fontSize: { md: 32, xs: 24 }, letterSpacing: "-1.5px" }}>
                                        {stat.value}
                                    </Box>
                                    <Box sx={{ fontSize: { md: 21, xs: 20 }, color: "liteBlack", my: "10px" }}>
                                        {stat.description}
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Counter;
