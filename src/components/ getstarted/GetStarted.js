// import React from 'react';
// import {Box, Button, Container, Grid, Typography} from "@mui/material";
// import img1 from "../../assets/getstarted/professional.svg"
// import img2 from '../../assets/getstarted/pro-2.svg'
// import img3 from '../../assets/getstarted/pro-3.svg'
// import img4 from '../../assets/getstarted/pro-4.svg'
// import divider1 from "../../assets/getstarted/divider-get.jpg";
// import people from '../../assets/getstarted/people.png'
// import sml from "../../assets/gift/sml-logo.png";
// function GetStarted(props) {
//     return (
//         <Box sx={{position:"relative",mt:"200px",backgroundColor:"#FFFCF6",padding:"100px 0 20px 0"}}>
//             <Container>
//                 <Box>
//                     <Grid container spacing={3}>
//                         <Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img1} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Professional.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img2} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Affordable.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Pay a low flat fee for both live sessions as well as messaging with your therapist. Therapy doesn't have to be expensive.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img3} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Convenient.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it's needed.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img4} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Effective.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Thousands of people have benefited from therapy (just check out their reviews!) With BetterHelp, you can switch therapists at any point if you don't feel you are getting enough benefit.
//                             </Box>
//                         </Grid>
//                        <Box sx={{display: {md:"flex"},alignItems:"center",margin:"56px 0 0 "}}>
//                            <Grid>
//                                <Box sx={{fontSize:"32px",color:"#444444",textAlign:{xs:"center",md:"unset"}}} className="overpass">
//                                    Join over 4,800,000 people who decided to <Typography variant="span" sx={{color:"green"}}>get help and get happy</Typography> with BetterHelp.
//                                    <Box sx={{my:"20px"}}>
//                                        <Button
//                                            className="overpass"
//                                            sx={{
//                                                backgroundColor: "liteGreen",
//                                                py: "10px",
//                                                px: "28px",
//                                                textTransform: "unset",
//                                                fontSize: "20px",
//                                                color: "green",
//                                                borderRadius: "30px",
//                                                "&:hover": {
//                                                    backgroundColor: "green",
//                                                    color: "white",
//                                                },
//                                            }}
//                                        >
//                                            Get Started
//                                        </Button>
//                                    </Box>
//                                </Box>
//                            </Grid>
//                            <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//                                <Box sx={{width: {md:"485px",xs:"315px"},height: {md:"478px",xs:"325px"},overflow:"hidden",borderRadius:"10px",borderTopLeftRadius:"240px"}}>
//                                    <img src={people} alt="" />
//                                </Box>
//                            </Grid>
//                        </Box>
//                     </Grid>
//                 </Box>
//                 <Grid container>
//                     <Grid xs={12} md={6} mt={{ md: "15px", xs: "0px" }}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                                 py: "20px",
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     fontSize: "15px",
//                                     color: "liteBlack",
//                                     fontWeight: "700",
//                                     lineHeight:1.5
//                                 }}
//                             >
//                                 If you are in a crisis or any other person may be in danger -
//                                 don't use this site. <br />
//                                 <Typography
//                                     variant="span"
//                                     sx={{ color: "green", textDecoration: "underline" }}
//                                 >
//                                     These resources
//                                 </Typography>{" "}
//                                 can provide you with immediate help.
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid xs={12} md={6} mt={{ md: "15px", xs: "32px" }}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: {md:"end"},
//                                 alignItems: "center",
//                                 py: {md:"20px"},
//                                 opacity: ".5",
//                             }}
//                         >
//                             <Box sx={{ height: "40px", width: "115px" }}>
//                                 <img src={sml} alt="small logo" />
//                             </Box>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//             <Box sx={{position: "absolute", top: {md:"-50px",xs:"-10px"},height:"80px", width: "100%"}}><img src={divider1}
//                                                                                                                 alt="design image"/></Box>
//         </Box>
//     );
// }
//
// export default GetStarted;

import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import LookingFor from "./LookingFor";
import {Button, Container, MobileStepper, Typography} from "@mui/material";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

function GetStarted(props) {

    const [age, setAge] = useState([])
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [disabaled,setDisabled] = useState(false)
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const handleNext = () => {
        if(points1?.length !== 20){

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }else{
            setActiveStep((prevActiveStep => prevActiveStep ))
        }
    };

    const points = points1.reduce((prev, next) => {
        return prev + next
    }, 0)

    const handlePoints = (e,dat) => {
        const string = e.target.value
        const data = string.substr(0, 1)
        if (data == "A") {
            // setPoints(points + 3)
            points1.push(3)
        } else if (data == "B") {
            // setPoints(points + 2)
            points1.push(2)
        } else if (data == "C") {
            // setPoints(points + 1)
            points1.push(1)
        } else {
            // setPoints(points + 0)
            points1.push(0)
        }

        // if (mainHandleNext) {
        mainHandleNext()
        // }
        // if (handleNext) {
        handleNext()
        // }
        // if (last) {
        //     setDisable(true)
        //
        // }
    }
    const handleClean = () => {
        setActiveStep(0);
        setMainActiveStep(0);

    };
    const mainHandleNext = () => {

       // if(activeStep === 18){
           // alert()
           // setMainActiveStep((prevActiveStep) => prevActiveStep );
       // }else{
           setMainActiveStep((prevActiveStep) => prevActiveStep + 1);
       }

    // };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
           setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
        points1.pop()
    };
    useEffect(() => {
        for (let i = 13; i <= 99; i++) {
            age.push(i);
        }
    }, [])

    const mainStepContent = (step) => {
        switch (true) {
            case step >= 0 && step < 4 :
                return ("Stress Management");
            case step >= 4 && step < 8:
                return ("Emotional Resilience");
            case step >= 8 && step < 12:
                return ("Decision-Making");
            case step >= 12 && step < 16:
                return ("Motivation and Commitment");
            case step >= 16 && step <= 20:
                return ("Interpersonal Skills");

        }
    }
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <LookingFor therapyTypes={[
                        {label: "A) Stay calm and focused"},
                        {label: "B) Get anxious but manage to push through"},
                        {label: "C) Struggle to maintain composure"},
                        {label: "D) Avoid the situation altogether"},
                    ]}
                        // processMessage={"Let's walk through the process of finding the best therapist for you! We'll start off with some basic questions."}
                                therapyQuestion={"1. How do you typically handle high-pressure situations?"}
                                handleNext={handleNext}
                                handlePoints={handlePoints}
                                points={points}


                    />
                );
            case 1:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) By urgency and importance "},
                            {label: "B) By deadlines only"},
                            {label: "C) Randomly"},
                            {label: "D) Often get overwhelmed and delay decision-making"},
                        ]}
                        // link={"More options"}
                        // processMessage={"Gender plays an important role in shaping personal identity and experiences. This information will help your therapist create a more personalized approach."}
                        therapyQuestion={"2. When faced with multiple deadlines, how do you prioritize tasks?"}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        // mainHandleNext={mainHandleNext}
                    />
                );
            case 2:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Regularly, every 1-2 hours"},
                            {label: "B) Occasionally, when I feel tired"},
                            {label: "C) Rarely, only when exhausted"},
                            {label: "D) Never, I just push through"},
                        ]}
                        // link={"More options"}
                        // processMessage={"Your answer will help us match you to a suitable therapist as well as help your therapist create a treatment plan that respects your identity and experiences."}
                        therapyQuestion={"3. How often do you take breaks to manage stress during study sessions?"}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                    />
                );
            case 3:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Deep breathing and meditation"},
                            {label: "B) Talking to friends and family"},
                            {label: "C) Ignoring it and hoping it goes away"},
                            {label: "D) Procrastinating or avoiding study"},
                        ]}
                        // link={"More options"}
                        // processMessage={"Your answer will help us match you to a suitable therapist as well as help your therapist create a treatment plan that respects your identity and experiences."}
                        therapyQuestion={"4. What techniques do you use to cope with exam-related anxiety?"}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                    />
                );
            case 4:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Analyse what went wrong and try again"},
                            {label: "B) Feel disappointed but move on quickly"},
                            {label: "C) Get very upset and demotivated"},
                            {label: "D) Consider giving up"},
                        ]}
                        therapyQuestion={"5. How do you react to failure or setbacks?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 5:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Constructively, using it to improve"},
                            {label: "B) Neutrally, with little impact on my emotions"},
                            {label: "C) Defensively, often taking it personally"},
                            {label: "D) Negatively, feeling discouraged"},
                        ]}
                        therapyQuestion={"6. When you receive criticism, how do you respond?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 6:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Find a way to resolve the issue causing frustration"},
                            {label: "B) Take a break and come back to it later"},
                            {label: "C) Vent to friends or family"},
                            {label: "D) Let it affect my motivation and productivity"},
                        ]}
                        therapyQuestion={"7. How do you deal with feelings of frustration during your preparation?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 7:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Frequently, to understand and improve"},
                            {label: "B) Sometimes, when things go wrong"},
                            {label: "C) Rarely, only in extreme cases"},
                            {label: "D) Never, I don't think about my emotions much"},
                        ]}
                        therapyQuestion={"8. How often do you reflect on your emotional responses to situations?"}
                        handleNext={handleNext}
                        mainHandleNext={mainHandleNext}
                        points={points}
                        handlePoints={handlePoints}
                    />
                );
            case 8:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Gather as much information as possible and then decide"},
                            {label: "B) Go with my intuition"},
                            {label: "C) Seek advice from others"},
                            {label: "D) Postpone the decision until more information is available"},
                        ]}
                        therapyQuestion={"9. How do you make decisions when you have insufficient information?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 9:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Long-term consequences"},
                            {label: "B) Immediate benefits"},
                            {label: "C) Opinions of others"},
                            {label: "D) Avoiding conflict"},
                        ]}
                        therapyQuestion={"10. When making a tough decision, what is your primary consideration?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 10:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Very confident"},
                            {label: "B) Fairly confident"},
                            {label: "C) Sometimes doubt my decisions"},
                            {label: "D) Often unsure and second-guess myself"},
                        ]}
                        therapyQuestion={"11. How confident are you in your decision-making abilities?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 11:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Accept it, learn from it, and move on"},
                            {label: "B) Feel regret but try to fix it"},
                            {label: "C) Get upset and dwell on it"},
                            {label: "D) Blame external factors"},
                        ]}
                        therapyQuestion={"12. How do you handle situations where you have made a wrong decision?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        mainHandleNext={mainHandleNext}
                    />
                );
            case 12:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Desire to make a positive impact on society"},
                            {label: "B) Prestige and respect associated with the job"},
                            {label: "C) Job security and benefits"},
                            {label: "D) Pressure from family or peers"},
                        ]}
                        therapyQuestion={"13. What motivates you to pursue a career in the IAS?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 13:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Remind myself of my goals and aspirations"},
                            {label: "B) Seek inspiration from successful people"},
                            {label: "C) Take breaks and relax"},
                            {label: "D) Struggle to stay motivated"},
                        ]}
                        therapyQuestion={"14. How do you keep yourself motivated during tough times?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 14:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Create a strict study schedule and stick to it"},
                            {label: "B) Limit distractions by creating a study-friendly environment"},
                            {label: "C) Occasionally give in to distractions but get back on track"},
                            {label: "D) Often find myself distracted and unable to focus"},
                        ]}
                        therapyQuestion={"15. How do you handle distractions while studying?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 15:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Fully committed, rarely miss a study session"},
                            {label: "B) Mostly committed, but sometimes flexible"},
                            {label: "C) Somewhat committed, often get sidetracked"},
                            {label: "D) Struggle to maintain a consistent routine"},
                        ]}
                        therapyQuestion={"16. How committed are you to your preparation routine?"}
                        handleNext={handleNext}
                        mainHandleNext={mainHandleNext}
                        points={points}
                        handlePoints={handlePoints}
                    />
                );
            case 16:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Try to understand their perspective and resolve amicably"},
                            {label: "B) Stand firm on my viewpoint but remain respectful"},
                            {label: "C) Avoid confrontation as much as possible"},
                            {label: "D) Get frustrated and let emotions take over"},
                        ]}
                        therapyQuestion={"17. How do you handle conflicts or disagreements with others?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 17:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Regularly, to improve and grow"},
                            {label: "B) Occasionally, when I feel it's needed"},
                            {label: "C) Rarely, only when asked"},
                            {label: "D) Never, I rely on self-assessment"},
                        ]}
                        therapyQuestion={"18. How often do you seek feedback from others about your performance?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 18:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Actively participate and share my knowledge"},
                            {label: "B) Listen and contribute when I have something valuable to add"},
                            {label: "C) Mostly listen, rarely contribute"},
                            {label: "D) Prefer to study alone and avoid group sessions"},
                        ]}
                        therapyQuestion={"19. How do you contribute to group study sessions or discussions?"}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 19:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Leader, organizing and directing the group"},
                            {label: "B) Collaborator, working closely with others"},
                            {label: "C) Supporter, helping where needed"},
                            {label: "D) Observer, letting others take the lead"},
                        ]}
                        therapyQuestion={"20. When working with others, what role do you typically take?"}
                        submit={true}
                        last={true}
                        points={points}
                        handleClean={handleClean}
                        handlePoints={handlePoints}
                        // disable2={true}
                        disabaled={disabaled}
                        points1={points1}
                        // handleNext={handleNext}
                    />
                );
            default:
                return "Unknown step";
        }
    };

    return (
        <>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: "5px"}}>
                <Container>
                    <Box onClick={handleBack}
                         sx={{cursor: "pointer", fontSize: "18px", display: activeStep !== 0 ? "block" : "none"}}>
                        <i className="fa-solid fa-arrow-left" style={{marginRight: 8}}></i>Back
                    </Box>
                    <MobileStepper
                        className="main"
                        variant="dots"
                        steps={5}
                        position="static"
                        activeStep={mainActiveStep}
                        sx={{
                            width: "100%",
                            flexGrow: 1,
                            backgroundColor: "#FFFCF6",
                            display: "flex",
                            justifyContent: "center",
                            mb: "20px",
                            "& .css-114p2tk-MuiMobileStepper-dot": {
                                width: "50px !important",
                                height: "5px !important",
                                borderRadius: "unset !important",
                                backgroundColor: "#DCE2DA !important",
                            },
                            "& .css-26w9jf-MuiMobileStepper-dot": {
                                width: "50px !important",
                                borderRadius: "unset !important",
                                backgroundColor: "#325343 !important",
                                height: "5px !important",
                            }
                        }}
                    />
                    <Box>
                        <Box sx={{fontSize: "46px", color: "#444444", textAlign: 'center'}} className="overpass">
                            {/*Help us match you to the <Typography variant="span" sx={{color:"green"}}> right therapist</Typography>*/}
                            {mainStepContent(mainActiveStep)}
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Box sx={{textAlign: "center", mt: "20px", width: {md: "850px"}}}>
                                It's important to have a therapist who you can establish a personal connection with. The
                                following questions are designed to help match you to a licensed therapist based on your
                                needs and personal preferences.
                            </Box>
                        </Box>
                    </Box>

                    <React.Fragment>
                        <Box>{getStepContent(activeStep)}</Box>

                    </React.Fragment>

                </Container>
            </Box>
        </>
    );
}

export default GetStarted;