import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import home1 from "../../assets/home/home1.jpg"
import home2 from "../../assets/home/home2.jpeg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useNavigate} from "react-router-dom";

export default function MentalHealthAssessment(props) {
    const navigate = useNavigate()
    return (
        <Box sx={{
            width: '100%',
            pt: "150px",
            backgroundColor: "#FFFCF6",
            pb: "60px",
            minHeight: "88vh",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Container>
                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                    Assessments
                </Box>
                <Box sx={{fontSize: "18px", color: "#444444", my: 4}}>
                    Gain insight into your mental and emotional health and find ways to support yourself
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{
                            width: '100%',
                            backgroundColor: "#fff",
                            borderRadius: 8,
                            padding: "24px"
                        }}>
                            <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                                Exam Stress Gauage Test (18-21)
                            </Box>
                            <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 15}}}>
                                <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                    <img src={home1} alt="first"/>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "end"}}>
                                    <Box>
                                        <Box sx={{color: "#a7a7a7", display: "flex", alignItems: "center"}}>
                                            <CalendarTodayIcon/> <Box sx={{marginLeft: 1}}>5 mins quiz</Box>
                                        </Box>
                                        <Box sx={{
                                            color: "darkGreen",
                                            mt: 4,
                                            textDecoration: "underline",
                                            fontWeight: 600,
                                            cursor: "pointer"
                                        }} onClick={() => {
                                            sessionStorage.setItem("data", "hello")
                                            navigate("/emotional")
                                        }}>
                                            TAKE ASSESSMENT
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <Box sx={{
                                width: '100%',
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                padding: "24px"
                            }}>
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                                    SHAPE K-12 Assessment Test
                                </Box>
                                <Box sx={{fontSize: "18px", color: "#444444", mt: 4}}>
                                    OCD, or Obsessive Compulsive Disorder, is a common mental health concern that many
                                    people struggle with. However, it
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: 7}}>
                                    <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                        <img src={home2} alt="first"/>
                                    </Box>
                                    <Box sx={{display: "flex", alignItems: "end"}}>
                                        <Box>
                                            <Box sx={{color: "#a7a7a7", display: "flex", alignItems: "center"}}>
                                                <CalendarTodayIcon/> <Box sx={{marginLeft: 1}}>5 mins quiz</Box>
                                                {/*<i className="fa-regular fa-calendar" ></i>*/}
                                            </Box>
                                            <Box sx={{
                                                color: "darkGreen",
                                                mt: 4,
                                                textDecoration: "underline",
                                                fontWeight: 600,
                                                cursor: "pointer"
                                            }} onClick={() => {
                                                sessionStorage.clear()
                                                navigate("/shape-form")

                                            }}>
                                                TAKE ASSESSMENT
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box></Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <Box sx={{
                                width: '100%',
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                padding: "24px"
                            }}>
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                                    Emotional Awareness and Regulation Ages 4-10 Years
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 15}}}>
                                    <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                        <img src={home1} alt="first"/>
                                    </Box>
                                    <Box sx={{display: "flex", alignItems: "end"}}>
                                        <Box>
                                            <Box sx={{color: "#a7a7a7", display: "flex", alignItems: "center"}}>
                                                <CalendarTodayIcon/> <Box sx={{marginLeft: 1}}>5 mins quiz</Box>
                                            </Box>
                                            <Box sx={{
                                                color: "darkGreen",
                                                mt: 4,
                                                textDecoration: "underline",
                                                fontWeight: 600,
                                                cursor: "pointer"
                                            }} onClick={() => {
                                                sessionStorage.setItem("data", "hello")
                                                navigate("/EmotionalAwareness")
                                            }}>
                                                TAKE ASSESSMENT
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box></Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <Box sx={{
                                width: '100%',
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                padding: "24px"
                            }}>
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                                    Academic Stress 16-25 Years
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 15}}}>
                                    <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                        <img src={home1} alt="first"/>
                                    </Box>
                                    <Box sx={{display: "flex", alignItems: "end"}}>
                                        <Box>
                                            <Box sx={{color: "#a7a7a7", display: "flex", alignItems: "center"}}>
                                                <CalendarTodayIcon/> <Box sx={{marginLeft: 1}}>5 mins quiz</Box>
                                            </Box>
                                            <Box sx={{
                                                color: "darkGreen",
                                                mt: 4,
                                                textDecoration: "underline",
                                                fontWeight: 600,
                                                cursor: "pointer"
                                            }} onClick={() => {
                                                sessionStorage.setItem("data", "hello")
                                                navigate("/emotional")
                                            }}>
                                                TAKE ASSESSMENT
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box></Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box>
                            <Box sx={{
                                width: '100%',
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                padding: "24px"
                            }}>
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                                    Self-Esteem Assessment 11-13 Years
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 15}}}>
                                    <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                        <img src={home1} alt="first"/>
                                    </Box>
                                    <Box sx={{display: "flex", alignItems: "end"}}>
                                        <Box>
                                            <Box sx={{
                                                color: "#a7a7a7",
                                                display: "flex",
                                                alignItems: "center",
                                                mt: {xs: 2, sm: 0}
                                            }}>
                                                <CalendarTodayIcon/> <Box sx={{marginLeft: 1}}>5
                                                mins quiz</Box>
                                            </Box>
                                            <Box sx={{
                                                color: "darkGreen",
                                                mt: 4,
                                                textDecoration: "underline",
                                                fontWeight: 600,
                                                cursor: "pointer"
                                            }} onClick={() => {
                                                sessionStorage.setItem("data", "hello")
                                                navigate("/emotional")
                                            }}>
                                                TAKE ASSESSMENT
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box></Grid>
                </Grid>
            </Container>
        </Box>
    );
}

