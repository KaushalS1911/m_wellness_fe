import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField, Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import React from "react";
import {NavLink} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    fontFamily: "Overpass, sans-serif",
}));

const Textarea = styled(BaseTextareaAutosize)(({ theme }) => ({
    boxSizing: "border-box",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px solid black",
    width: "100%",
}));

const contact = [
    { contact: "I am a registered client and I need support." },
    { contact: "I am a current Mwellness therapist and I need support." },
    { contact: "I am a therapist interested in joining or a current applicant." },
    { contact: "I have a question about the service." },
    { contact: "I have a billing related question." },
    { contact: "I have a press-related question." },
    { contact: "I have a business-related inquiry." },
    { contact: "I'm interested in Mwellness for my organization." },
];

function Contact() {
    return (
        <Box sx={{mt:"80px"}}>
            <Box sx={{ backgroundColor: "#FEF0D4" }}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom: "72px",
                            paddingTop: "72px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Overpass, sans-serif",
                                fontSize: { xs: "32px", md: "48px" },
                                fontWeight: "300",
                            }}
                        >
                            Contact us
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Overpass, sans-serif",
                                color: "#242624",
                                width: { xs: "100%", md: "820px" },
                                textAlign: "center",
                                pt: 2,
                            }}
                        >
                            Use this form to reach out to our Customer Success Team regarding
                            any questions, concerns, or feedback. You can also view our
                            <a
                                href=""
                                style={{
                                    color: "#397A4A",
                                    fontWeight: "600",
                                }}
                            >
                                FAQ
                            </a>{" "}
                            for quick answers to commonly asked questions.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container sx={{ padding: { xs: "20px", md: "30px" } }}>
                    <Typography
                        sx={{
                            fontFamily: "Overpass, sans-serif",
                            fontSize: { xs: "24px", md: "32px" },
                        }}
                    >
                        Type of Contact
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <FormControl>
                                <RadioGroup
                                    sx={{ textAlign: "left", fontFamily: "Overpass, sans-serif" }}
                                >
                                    {contact.map((item, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={item.contact}
                                            control={<Radio />}
                                            label={item.contact}
                                            sx={{ fontFamily: "Overpass, sans-serif" }}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    mt: 3,
                                }}
                            >
                                <TextField
                                    label="First name"
                                    sx={{ borderRadius: "6px", width: "100%" }}
                                />
                                <TextField
                                    label="Last name"
                                    sx={{ borderRadius: "6px", width: "100%" }}
                                />
                                <TextField
                                    label="Email address"
                                    sx={{ borderRadius: "6px", width: "100%" }}
                                />
                                <Textarea minRows={5} placeholder="Address" />
                            </Box>
                            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",pt:"40px",}}>
                               <NavLink to={'/'}>
                                   <Button
                                       className="overpass"
                                       variant="outlined"
                                       sx={{
                                           fontSize: "20px",
                                           borderRadius: "30px",
                                           color: "darkGreen",
                                           borderColor: "darkGreen",
                                           padding: "5px 36px",
                                           textTransform: "inherit",
                                           "&:hover": {
                                               borderColor: "darkGreen",
                                               backgroundColor: "#F5FBF4",
                                           },
                                           // my: { xs: "10px", lg: "unset" },
                                       }}
                                   >
                                       Submit
                                   </Button>
                               </NavLink>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    margin: {md:"20px",xs:"20px 0"},
                                    backgroundColor: "#F5FBF4",
                                    padding: "20px",
                                    fontFamily: "Overpass, sans-serif",
                                    textAlign: "left",
                                }}
                            >
                                <Typography sx={{ color: "#444444" , fontFamily: "Overpass, sans-serif", }}>Mwellness</Typography>
                                <Typography sx={{ color: "#444444" , fontFamily: "Overpass, sans-serif",}}>
                                    990 Villa Street,
                                </Typography>
                                <Typography sx={{ color: "#444444" , fontFamily: "Overpass, sans-serif",}}>
                                    Mountain View, CA 94041
                                </Typography>
                                <Typography sx={{ color: "#397A4A", fontWeight: "700" , fontFamily: "Overpass, sans-serif", }}>
                                    contact@mwellness.com
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: "#FEF0D4" }}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            pt: 5,
                            pb: 5,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Overpass, sans-serif",
                                width: { xs: "100%", md: "525px" },
                                mb: { xs: "16px", md: "0" },
                            }}
                        >
                            If you are in a crisis or any other person may be in danger -
                            don't use this site. <span>These resources</span> can provide you
                            with immediate help.
                        </Typography>
                        <img
                            src="https://assets.betterhelp.com/home/ssl-secure-bw-logo.png?v=f4959109d99e"
                            // height={"50px"}
                            // width={"120px"}
                            alt="SSL Secure Logo"
                            style={{height:"50px",width:"120px", maxWidth: "100%",objectFit:"contain" }}
                        />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Contact;
