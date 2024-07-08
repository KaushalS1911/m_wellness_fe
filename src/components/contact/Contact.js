import { Box, Button, Typography } from "@mui/material";
// import "../page/style.css";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import sml from '../../assets/gift/sml-logo.png'
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    fontFamily: "Overpass, sans-serif",
}));
const Textarea = styled(BaseTextareaAutosize)(({ theme }) => ({
    boxSizing: 'border-box',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
    padding: '8px 12px',
    borderRadius: '5px',
    border: '1px solid black',
    width: '100%',
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
        <div>
            <Box sx={{ backgroundColor: "#FEF0D4" }}>
                <Box className="container">
                    <Box>
                        <Box className="d-flex flex-column align-items-center" sx={{ paddingBottom: "72px", paddingTop: "72px" }}>
                            <Typography sx={{ fontFamily: "Overpass, sans-serif", fontSize: { xs: "32px", md: "48px" }, fontWeight: "300" }}>
                                Contact us
                            </Typography>
                            <Typography className="text-center pt-2" sx={{ fontFamily: "Overpass, sans-serif", color: "#242624", width: { xs: "100%", md: "820px" } }}>
                                Use this form to reach out to our Customer Success Team regarding any questions, concerns, or feedback. You can also view our{" "}
                                <a href="" sx={{ color: "#397A4A", fontWeight: "600", display: "block" }}>
                                    FAQ
                                </a> for quick answers to commonly asked questions.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className="container" sx={{ padding: { xs: "20px", md: "30px" } }}>
                    <Box>
                        <Typography sx={{ fontFamily: "Overpass, sans-serif", fontSize: { xs: "24px", md: "32px" } }}>
                            Type of Contact
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={8} sx={{ display: "flex", flexDirection: "column" }}>
                                    <FormControl className="pb-3">
                                        <RadioGroup sx={{ textAlign: "left", fontFamily: "Overpass, sans-serif" }}>
                                            {contact.map((item, index) => (
                                                <FormControlLabel key={index} value={item.contact} sx={{ fontFamily: "Overpass, sans-serif" }} control={<Radio />} label={item.contact} />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <TextField id="outlined-multiline-flexible" label="First name" sx={{ borderRadius: "6px", gap: "20px", width: "100%" }} />
                                        <TextField id="outlined-multiline-flexible" label="Last name" sx={{ borderRadius: "6px", width: "100%" }} />
                                        <TextField id="outlined-multiline-flexible" label="Email address" sx={{ borderRadius: "6px", width: "100%" }} />
                                        <Textarea aria-label="minimum height" minRows={5} placeholder="Address" sx={{ borderRadius: "6px", width: "100%" }} />
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <Box sx={{ margin: "20px", backgroundColor: "#F5FBF4", textAlign: "left", padding: "20px", fontFamily: "Overpass, sans-serif" }}>
                                        <Typography sx={{ color: "#444444", fontFamily: "Overpass, sans-serif" }}>Mwellness</Typography>
                                        <Typography sx={{ color: "#444444", fontFamily: "Overpass, sans-serif" }}>990 Villa Street,</Typography>
                                        <Typography sx={{ color: "#444444", fontFamily: "Overpass, sans-serif" }}>Mountain View, CA 94041</Typography>
                                        <Typography sx={{ color: "#397A4A", fontWeight: "700", fontFamily: "Overpass, sans-serif" }}>contact@mwellness.com</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#FEF0D4" }}>
                <Box className="container">
                    <Box className="d-flex flex-column align-items-center p-3">
                        <Typography textAlign="center" sx={{ marginBottom: "20px" }}>If you are in a crisis or any other person may be in danger - don't use this site. <br /> These resources can provide you with immediate help.</Typography>
                        <img src={sml} height={"50px"} width={"120px"} alt="SSL Secure Logo" />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default Contact;