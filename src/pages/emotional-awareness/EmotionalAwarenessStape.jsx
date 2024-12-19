import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Container, MobileStepper} from "@mui/material";
import EmotionalAwarenessStapper from "./EmotionalAwarenessStapper";

function EmotionalAwarenessStape(props) {
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const language = sessionStorage.getItem("language")

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (points1?.length !== 14) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep((prevActiveStep => prevActiveStep))
        }
    };

    const points = points1.reduce((prev, next) => {
        return prev + next
    }, 0)

    const handlePoints = (e, questionIndex) => {
        const selectedAnswer = e.target.value;

        const pointsMapping = [
            {"Happy": 1, "Sad": 0, "Angry": 0, "Scared": 0},
            {"Happy": 1, "Sad": 0, "Angry": 0, "Scared": 0},
            {"Happy": 0, "Sad": 0, "Angry": 1, "Scared": 0},
            {"Happy": 0, "Sad": 1, "Angry": 0, "Scared": 0},
            {"Happy": 1, "Sad": 0, "Angry": 0, "Scared": 0},
            {"Smile and laugh": 1, "Cry": 0, "Yell": 0, "Stay quiet": 0},
            {"Talk to someone": 1, "Cry": 0, "Hit something": 0, "Stay quiet": 0},
            {"Talk to someone": 1, "Take deep breaths": 1, "Hit something": 0, "Stay quiet": 0},
            {"Talk to someone": 1, "Cry": 0, "Yell": 0, "Stay quiet": 0},
            {"Talk to someone": 1, "Take deep breaths": 1, "Hit something": 0, "Stay quiet": 0},
            {"Happy": 0, "Sad": 1, "Angry": 0, "Scared": 0},
            {"Happy": 0, "Sad": 0, "Angry": 1, "Scared": 0},
            {"Happy": 1, "Sad": 0, "Angry": 0, "Scared": 0},
            {"Happy": 0, "Sad": 1, "Angry": 0, "Scared": 0},
            {"Happy": 0, "Sad": 0, "Angry": 0, "Scared": 1},
        ];

        const questionPoints = pointsMapping[questionIndex];
        const pointsToAdd = questionPoints[selectedAnswer] || 0;

        setPoints1((prevPoints) => {
            const updatedPoints = [...prevPoints];
            updatedPoints[questionIndex] = pointsToAdd;
            return updatedPoints;
        });

        setOptions((prevOptions) => {
            const updatedOptions = [...prevOptions];
            updatedOptions[questionIndex] = selectedAnswer;
            return updatedOptions;
        });

        if (activeStep === 14) {
            mainHandleNext();
        }
        handleNext();
    };

    const handleClean = () => {
        setActiveStep(0);
        setMainActiveStep(0);
    };

    const mainHandleNext = () => {
        setMainActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        window.scrollTo(0, 0);

        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }

        // if (mainActiveStep > 0 && activeStep === 0) {
        //     setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
        // }
        //
        // if (activeStep > 1) {
        //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // }

        setPoints1((prevPoints) => {
            const updatedPoints = [...prevPoints];
            updatedPoints.pop();
            updatedPoints.pop();
            return updatedPoints;
        });

        setOptions((prevOptions) => {
            const updatedOptions = [...prevOptions];
            updatedOptions.pop();
            updatedOptions.pop();
            return updatedOptions;
        });
    };

    const mainEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return ("Identifying Emotions");
        }
    }

    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[{label: "Happy"}, {label: "Sad"}, {label: "Angry"}, {label: "Scared"}]}
                        therapyQuestion={"1. Look at this picture. How do you think this person is feeling? (Show a picture of a happy face)"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                    />
                );
            case 1:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"2. How do you feel when you get to play with your favourite toy?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 2:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}

                        therapyQuestion={"3. When someone takes your toy without asking, how do you feel?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 3:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}

                        therapyQuestion={"4. How do you feel when you lose a game?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 4:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"5. When you get a hug from a family member, how do you feel?" + "specify"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 5:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Smile and laugh"},
                            {label: "Cry"},
                            {label: "Yell"},
                            {label: "Stay quiet"},
                        ]}
                        therapyQuestion={"6. What do you do when you feel happy?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 6:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Talk to someone"},
                            {label: "Cry"},
                            {label: "Hit something"},
                            {label: "Stay quiet"},
                        ]}
                        therapyQuestion={"7. What do you do when you feel sad?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 7:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Talk to someone"},
                            {label: "Take deep breaths"},
                            {label: "Hit something"},
                            {label: "Stay quiet"},
                        ]}
                        therapyQuestion={"8. If you feel angry, what can you do to feel better?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 8:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Talk to someone"},
                            {label: "Cry"},
                            {label: "Yell"},
                            {label: "Stay quiet"},
                        ]}
                        therapyQuestion={"9. When you are scared, what do you do?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 9:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Talk to someone"},
                            {label: "Take deep breaths"},
                            {label: "Hit something"},
                            {label: "Stay quiet"},
                        ]}
                        therapyQuestion={"10. What do you do when you feel frustrated?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 10:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"11. If your friend is crying, how do you think they feel?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 11:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"12. If your friend is yelling, how do you think they feel?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 12:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"13. If your friend is laughing, how do you think they feel?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 13:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"14. If your friend is very quiet, how do you think they feel?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 14:
                return (
                    <EmotionalAwarenessStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Sad"},
                            {label: "Angry"},
                            {label: "Scared"},
                        ]}
                        therapyQuestion={"15. If your friend is playing alone, how do you think they feel?"}
                        handleBack={handleBack}
                        points={points}
                        handleClean={handleClean}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        apiOptions={options}
                        points1={points1}
                        last={true}
                        submit={true}
                        disabledAt={15}
                    />
                );
            default:
                return "Unknown step";
        }
    };
    return (
        <>
            <Box sx={{
                width: '100%',
                pt: "150px",
                backgroundColor: "#FFFCF6",
                minHeight: "87vh",
                height: "100%",
                pb: "5px"
            }}>
                <Container>
                    <MobileStepper
                        className="main"
                        variant="dots"
                        steps={1}
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
                            {mainEnglishStepContent(mainActiveStep)}
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            {language === "english" &&
                            <Box sx={{textAlign: "center", mt: "20px", width: {md: "850px"}}}>
                                It's important to have a therapist who you can establish a personal connection with. The
                                following questions are designed to help match you to a licensed therapist based on your
                                needs and personal preferences.
                            </Box>}
                        </Box>
                    </Box>
                    <React.Fragment>
                        <Box>{getEnglishStepContent(activeStep)}</Box>
                    </React.Fragment>
                </Container>
            </Box>
        </>
    );
}

export default EmotionalAwarenessStape;