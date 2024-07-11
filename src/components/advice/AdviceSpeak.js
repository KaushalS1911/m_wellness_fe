import React, {useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Collapse,
    Container, Divider, Grid,
    Typography
} from "@mui/material";
import Fade from "@mui/material/Fade";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sml from "../../assets/gift/sml-logo.png";

function AdviceSpeak(props) {
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Box sx={{py:"50px"}}>
                <Container >
                    <Box sx={{color:"liteBlack",fontSize: {sm:"42px",xs:"32px"}}}>
                        For additional help and support with your concerns
                    </Box>
                    <Box sx={{textAlign: {md: "start", xs: "center"},display:"flex",justifyContent:"center",my:"20px"}}>
                        <Button
                            className="overpass"
                            sx={{
                                // fontWeight: 600,
                                backgroundColor: "liteGreen",
                                py: "10px",
                                px: {xs: "8px", md: "28px"},
                                textTransform: "unset",
                                fontSize: {xs: "17px", md: "18px"},
                                color: "green",
                                borderRadius: "30px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "white",
                                },
                                width:{xs:"100%",sm:"unset"}
                            }}
                        >
                            Speak with a licensed therapist
                        </Button>
                    </Box>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleExpansion('panel1')}
                        TransitionComponent={Fade}
                        transitionDuration={400}
                        sx={{
                            boxShadow: "unset",
                            fontFamily: "Overpass",
                            py: "6px",
                            "& div": { paddingInline: "0px !important" },
                            "& p": { fontSize: "20px" },


                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                fontFamily: "Overpass",
                                // minHeight: "48px",
                                // "& .MuiAccordionSummary-content": {
                                //     margin: "12px 0",
                                // },
                            }}
                        >
                            <Typography>Continue reading</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Collapse in={expanded === 'panel1'}>
                                <Box
                                    sx={{
                                        // padding: "16px",
                                        "& p": { fontSize: "16px", color: "liteBlack" },
                                    }}
                                >
                                    <Typography>
                                        Mental health refers to wellness of the mind. According to the World Health Organization (WHO), mental health is a state of well-being in which individuals realize their abilities, can cope with the stresses of life, can work productively, and can make positive contributions to their communities.

                                        Stable mental health may cause you to perceive yourself as more equipped to manage daily challenges and more aware of your limits. When you get thrown off track, you may have a healthy repertoire of coping techniques to help you move forward.

                                        Those with poor mental health may be living with a challenge like a mental illness, chronic stress, relationship challenges, and other difficult life circumstances. These difficulties may cause challenges in functioning at school, work, or home.
                                    </Typography>
                                </Box>
                            </Collapse>
                        </AccordionDetails>
                    </Accordion>
                    <Box>
                        The information on this page is not intended to be a substitution for diagnosis, treatment, or informed professional advice. You should not take any action or avoid taking any action without consulting with a qualified mental health professional. For more information, please read our <Typography variant="span" sx={{color:"darkGreen",textDecoration:"underline"}}>terms of use.</Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{
                mt:"80px",
                position: "relative",backgroundColor:"cream", '&::before': {
                    content: '""',
                    height: '72px',
                    zIndex: -1,
                    backgroundColor: 'cream',
                    borderRadius: '40% 40% 0 0 / 50% 50% 0 0',
                    position: 'absolute',
                    top: '-40px',
                    left: 0,
                    width: "100%",
                    // transform: 'scaleX(1.15)'
                }
            }}>
                <Container>
                    <Grid container>
                        <Grid xs={12} md={6} mt={{ md: "40px", xs: "0px" }}>
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
                                        fontSize: "15px",
                                        color: "liteBlack",
                                        fontWeight: "700",
                                        lineHeight:1.5
                                    }}
                                >
                                    If you are in a crisis or any other person may be in danger -
                                    don't use this site. <br />
                                    <Typography
                                        variant="span"
                                        sx={{ color: "green", textDecoration: "underline" }}
                                    >
                                        These resources
                                    </Typography>{" "}
                                    can provide you with immediate help.
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={6} mt={{ md: "40px", xs: "32px" }}>
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
}

export default AdviceSpeak;