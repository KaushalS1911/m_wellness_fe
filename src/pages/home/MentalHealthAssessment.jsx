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
                            <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                Exam Stress Gauge (18-21)
                            </Box>
                            <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 10}}}>
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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    SHAPE K-12
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 15}}}>
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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    General Stress and Anxiety
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 10}}}>
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
                                                navigate("/general-stress-anxiety-start-assessment")

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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    Emotional Awareness and Regulation (Ages 4-10)
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 5}}}>
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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    Academic Stress 16-25 Years
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 10}}}>
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
                                                navigate("/AcademicStress")
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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    Self-Esteem Scale for Pre-Adolescents (Ages 11-13)
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 5}}}>
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
                                                navigate("/SelfEsteemAssessment")
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
                                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass title">
                                    Work-Life Balance Assessment (21+)
                                </Box>
                                <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", mt: {xs: 4, sm: 5}}}>
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
                                                navigate("/work-life-Assessment")
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

