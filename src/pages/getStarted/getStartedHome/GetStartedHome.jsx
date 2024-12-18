import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom"
import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

function GetStartedHome(props) {
    const [check, setCheck] = useState()
    const [language, setLanguage] = useState()
    const navigate = useNavigate()
    const ad = sessionStorage.getItem("data")
    const handleChange = (e) => {
        setLanguage(e.target.checked)
        sessionStorage.setItem("language", e.target.value)
    }
    return (
        <>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: "60px"}}>
                <Container>
                    <Box sx={{mt: "20px", display: "flex", justifyContent: "start"}}>
                        <Button
                            className="overpass"
                            onClick={() => navigate("/")}
                            sx={{
                                backgroundColor: "darkGreen",
                                py: "5px",
                                px: "28px",
                                textTransform: "unset",
                                fontSize: "20px",
                                color: "white",
                                borderRadius: "30px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "white",
                                },
                                mt: "10px"
                            }}
                        >
                            Back
                        </Button>
                    </Box>
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
                    <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                        {ad ? "Exam Stress Gauage Test (18-21)" : "SHAPE K-12 Assessment Test"}
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                        <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            // height: "400px",
                            padding: "30px",
                            boxShadow: 2
                        }}>
                            {/*<Box sx={{fontSize: "32px", color: "#444444",letterSpacing:-1.5}} className="overpass">*/}
                            {/*    Emotional Wellness Basic Screening Test- Adults*/}
                            {/*    /!*{mainStepContent(mainActiveStep)}*!/*/}
                            {/*</Box>*/}
                            <Box sx={{mt: 2, width: {md: "100%"}, fontSize: "20px", letterSpacing: -0.5}}>
                                The form is initial data for Annual health & Performance Evaluation carried by
                                Mahadevasth Technologies Pvt Ltd in association with your organisation.
                            </Box>
                            <Box sx={{fontSize: "20px", color: "black", letterSpacing: -0.5, mt: 2}}>
                                Emotional wellness is crucial for maintaining overall well-being and navigating life's
                                challenges effectively. This basic screening test aims to provide individuals with an
                                initial assessment of their emotional well-being. While not a diagnostic tool, it can
                                offer insights into areas that may require attention or improvement.
                            </Box>
                            <Box display={{sm: "flex"}} alignItems="center" margin="normal" my={3}
                                 sx={{fontWeight: 700}} className={"overpass"}>
                                <FormLabel sx={{marginRight: '1rem', color: "black"}} className={"overpass"}>Language
                                    :</FormLabel>
                                <RadioGroup
                                    name="gender"
                                    // value={formValues.gender}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel value="english" control={<Radio/>} label="English"/>
                                    <FormControlLabel value="hindi" control={<Radio/>} label="Hindi"/>
                                </RadioGroup>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Checkbox onChange={(e) => setCheck(e.target.checked)}/>
                                <Box className={"overpass"}>
                                    I accept the terms and conditions outlined above.
                                </Box>
                            </Box>
                            <Box sx={{mt: "20px", display: {sm: "flex"}, justifyContent: "end"}}>
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
                                        mt: "10px", marginRight: 1,
                                        width: {xs: "100%", sm: "unset"}
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="overpass"
                                    onClick={() => navigate("/assessment-form")}
                                    disabled={check && language === true ? false : true}
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
                                        mt: "10px",
                                        width: {xs: "100%", sm: "unset"}
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
            {/*<GetStartedReview/>*/}
            {/*</Box>*/}
        </>
    );
}

export default GetStartedHome;