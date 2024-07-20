import React from 'react';
import Box from "@mui/material/Box";
import {Button, Checkbox, Container} from "@mui/material";
import GetStartedReview from "../../../components/ getstarted/GetStartedReview";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useNavigate} from "react-router-dom"

function StartAssessment(props) {
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{width: '100%', pt: {md:"150px",xs:"100px"}, backgroundColor: "#FFFCF6", pb: {md:"100px",xs:"50px"}}}>
                <Container>



                    <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                        <Box sx={{
                            width: {md:"600px",xs:"100%"},
                            backgroundColor: "#FFFFFF",
                            // height: "400px",
                            padding: {md:"40px",xs:"30px 20px"},
                            boxShadow: 2
                        }}>
                            <Box sx={{fontSize: "28px", color: "#444444"}} className="overpass">
                                Things to remember before you start the test
                                {/*{mainStepContent(mainActiveStep)}*/}
                            </Box>
                            <Box sx={{my:4,lineHeight:2}} className={"listStyle"}>
                                <li>Read each statement carefully</li>
                                <li>Consider your thoughts,feelings and actions in the last 2 weeks</li>
                                <li>Choose the response that you relate to the most</li>
                                <li>There are no right or wrong answers to the questions</li>
                            </Box>
                            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><AccessTimeIcon sx={{marginRight:1}} /> Estimated time required: 5 mins</Box>


                            <Box sx={{mt: "20px", display: "flex", justifyContent: "center"}}>

                                <Button
                                    className="overpass"
                                    onClick={() => navigate("/assessment")}
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
                                    Start Assessment
                                </Button>

                            </Box>
                            {/*<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid #4a4d4a59",padding:3,borderRadius:"15px",mt:3}}>*/}
                            {/*        <Box sx={{width:"300px"}}>Dose someone you care about show signs of OCD?</Box>*/}
                            {/*    <Box sx={{textDecoration:"underline",color:"darkGreen",letterSpacing:"1.2px"}} className={"overpass"}>SHARE THIS QUIZ</Box>*/}
                            {/*</Box>*/}
                        </Box>
                    </Box>


                </Container>
            </Box>

            {/*<GetStartedReview/>*/}
        </>
    );
}

export default StartAssessment;