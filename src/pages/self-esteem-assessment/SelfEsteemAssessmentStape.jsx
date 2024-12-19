import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Container, MobileStepper} from "@mui/material";
import SelfEsteemAssessmentStapper from "./SelfEsteemAssessmentStapper";

function SelfEsteemAssessmentStape(props) {
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const language = sessionStorage.getItem("language")

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (points1?.length < 19) {
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
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},

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

        if (activeStep === 19) {
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
        // if (activeStep > 0) {
        //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // }

        // if (mainActiveStep > 0 && activeStep === 0) {
        //     setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
        // }

        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }

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
                return ("Academic Stress");
        }
    }

    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"1. I feel good about myself."}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                    />
                );
            case 1:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"2. I am happy with the way I look."}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 2:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}

                        therapyQuestion={"3. I feel proud of the things I do."}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 3:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}

                        therapyQuestion={"4. I believe I can do things well."}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 4:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"5. I think I am a good person."}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 5:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"6. I feel confident when I try new things."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 6:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"7. I feel good about my abilities."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 7:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"8. I think positively about myself."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 8:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"9. I feel that others like me."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 9:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"10. I am satisfied with my achievements."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 10:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"11. I feel comfortable in social situations."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 11:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"12. I can handle my problems well"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 12:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"13. I feel respected by others."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 13:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"14. I believe I am important."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
                case 14:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"15. I accept my mistakes and learn from them."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
                case 15:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"16. I feel happy with my friendships."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
                case 16:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"17. I like myself even when things go wrong."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
                case 17:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"18. I believe I can achieve my goals."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 18:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"19. I feel positive about my future."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 19:
                return (
                    <SelfEsteemAssessmentStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"},
                        ]}
                        therapyQuestion={"20. I think I am special."}
                        handleBack={handleBack}
                        points={points}
                        handleClean={handleClean}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        apiOptions={options}
                        points1={points1}
                        last={true}
                        submit={true}
                        disabledAt={20}
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

export default SelfEsteemAssessmentStape;