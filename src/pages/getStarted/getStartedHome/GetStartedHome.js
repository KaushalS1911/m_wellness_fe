import React, {useState} from 'react';
import GetStartedReview from "../../../components/ getstarted/GetStartedReview";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom"
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormLabel,
    MobileStepper, Radio,
    RadioGroup,
    Typography
} from "@mui/material";

function GetStartedHome(props) {
    const [check,setCheck] = useState()
    const [language,setLanguage] = useState()
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setLanguage(e.target.checked)
        sessionStorage.setItem("language",e.target.value)
    }
    return (
        <>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: "200px"}}>
                <Container>
                    {/*<Box onClick={}*/}
                    {/*     sx={{cursor: "pointer", fontSize: "18px", display: activeStep !== 0 ? "block" : "none"}}>*/}
                    {/*    <i className="fa-solid fa-arrow-left" style={{marginRight: 8}}></i>Back*/}
                    {/*</Box>*/}

                    {/*<Box>*/}
                    {/*    <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">*/}
                    {/*        If you are in a crisis or any other person may be in danger - don't use this site.*/}
                    {/*        /!*{mainStepContent(mainActiveStep)}*!/*/}
                    {/*    </Box>*/}
                    {/*    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>*/}
                    {/*        <Box sx={{textAlign: "center", mt: "20px", width: {md: "850px"}}}>*/}
                    {/*            We do not handle medical or psychological emergencies and are not equipped to provide support in crisis situations, including when someone is experiencing thoughts of self-harm, suicide, or severe clinical disorders and other psychotic conditions.*/}
                    {/*        </Box>*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}


                    <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                        <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            // height: "400px",
                            padding: "30px",
                            boxShadow: 2
                        }}>
                            <Box sx={{fontSize: "32px", color: "#444444",letterSpacing:-1.5}} className="overpass">
                                If you are in a crisis or any other person may be in danger - don't use this site.
                                {/*{mainStepContent(mainActiveStep)}*/}
                            </Box>
                            <Box sx={{ mt: "32px", width: {md: "100%"},fontSize: "20px",letterSpacing:1}}>
                                We do not handle medical or psychological emergencies and are not equipped to provide support in crisis situations, including when someone is experiencing thoughts of self-harm, suicide, or severe clinical disorders and other psychotic conditions.
                            </Box>
                            <Box sx={{fontSize: "20px", color: "black",letterSpacing:1,mt:2}}>
                                If you are experiencing any of these issues, we strongly urge you to seek help at the nearest hospital or emergency.

                            </Box>

                            <Box display="flex" alignItems="center" margin="normal" my={3} sx={{fontWeight:700}} className={"overpass"}>
                                <FormLabel  sx={{ marginRight: '1rem',color:"black" }} className={"overpass"}>Language :</FormLabel>
                                <RadioGroup
                                    name="gender"
                                    // value={formValues.gender}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel value="english" control={<Radio />} label="English" />
                                    <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
                                </RadioGroup>
                            </Box>
                            <Box sx={{display:"flex",alignItems:"center"}}>
                                <Checkbox  onChange={(e) => setCheck(e.target.checked)} />
                                <Box className={"overpass"}>
                                    I accept the terms and conditions outlined above.
                                </Box>
                            </Box>
                            <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>

                                <Button
                                    className="overpass"
                                    // onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: "#A6DE9B",
                                        py: "5px",
                                        px: "28px",
                                        textTransform: "unset",
                                        fontSize: "20px",
                                        color: "#325343",
                                        borderRadius: "30px",
                                        "&:hover": {
                                            backgroundColor: "darkGreen",
                                            color: "white",
                                        },
                                        mt: "10px",marginRight:1
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="overpass"
                                    onClick={()=> navigate("/assessment-form")}
                                    disabled={check && language === true ? false : true }
                                    sx={{
                                        backgroundColor: "green",
                                        py: "5px",
                                        px: "28px",
                                        textTransform: "unset",
                                        fontSize: "20px",
                                        color: "white",
                                        borderRadius: "30px",
                                        "&:hover": {
                                            backgroundColor: "darkGreen",
                                            color: "white",
                                        },
                                        mt: "10px"
                                    }}
                                >
                                    I Agree
                                </Button>
                            </Box>
                        </Box>
                    </Box>


                </Container>
            </Box>

            {/*<Box sx={{mt:"200px"}}>*/}
            <GetStartedReview/>
            {/*</Box>*/}
        </>
    );
}

export default GetStartedHome;