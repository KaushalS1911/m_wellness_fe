import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import LookingFor from "./LookingFor";
import {Button, Container, MobileStepper, Typography} from "@mui/material";


function GetStarted2(props) {

    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const handleNext = () => {
        if (points1?.length !== 19) {

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep((prevActiveStep => prevActiveStep))
        }
    };

    const points = points1.reduce((prev, next) => {
        return prev + next
    }, 0)
    console.log(points1)
    const handlePoints = (e, dat) => {
        const string = e.target.value
        const data = string.substr(0, 1)
        let pointsToAdd = 0;

        if (data === "A") {
            pointsToAdd = 3;
        } else if (data === "B") {
            pointsToAdd = 2;
        } else if (data === "C") {
            pointsToAdd = 1;
        } else {
            pointsToAdd = 0;
        }

        setPoints1(prevPoints => [...prevPoints, pointsToAdd]);

        if (activeStep === 3 || activeStep === 7 || activeStep === 11 || activeStep === 15) {
            mainHandleNext();
        }

        handleNext();
    }

    const handleClean = () => {
        setActiveStep(0);
        setMainActiveStep(0);

    };
    const mainHandleNext = () => {


        setMainActiveStep((prevActiveStep) => prevActiveStep + 1);
    }


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if (activeStep === 3 || activeStep === 7 || activeStep === 11 || activeStep === 15) {
            setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
        if (activeStep === 19) {
            points1.splice(-2)

        } else {
           points1.splice(-1)
        }

    };

    const mainStepContent = (step) => {
        switch (step) {
            case 0:
                return ("Stress Management");
            case 1:
                return ("Emotional Resilience");
            case 2 :
                return ("Decision-Making");
            case 3:
                return ("Motivation and Commitment");
            case 4:
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

                        therapyQuestion={"2. When faced with multiple deadlines, how do you prioritize tasks?"}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}

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
                        points1={points1}
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
                        points1={points1}
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

                        points1={points1}

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

export default GetStarted2;