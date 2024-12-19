import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Container, MobileStepper} from "@mui/material";
import AcademicStressStapper from "./AcademicStressStapper";

function AcademicStressStape(props) {
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const language = sessionStorage.getItem("language")

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (points1?.length !== 19) {
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
            {"None": 0, "Little": 1, "Moderate": 2, "High": 3, "Extreme": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Not at all": 0, "Slightly": 1, "Moderately": 2, "A lot": 3, "Extremely": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4},
            {"Not at all": 0, "Slightly": 1, "Moderately": 2, "A lot": 3, "Extremely": 4},
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
            {"Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3, "Always": 4}
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
                return ("Academic Stress");
        }
    }

    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"1. How often do you feel overwhelmed by your academic workload?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                    />
                );
            case 1:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"2. How frequently do you worry about your academic performance?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 2:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "None"},
                            {label: "Little"},
                            {label: "Moderate"},
                            {label: "High"},
                            {label: "Extreme"}
                        ]}
                        therapyQuestion={"3. How much pressure do you feel to achieve high grades?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 3:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"4. How often do you experience physical symptoms (e.g., headaches, stomach aches) due to academic stress?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 4:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "A lot"},
                            {label: "Extremely"}
                        ]}
                        therapyQuestion={"5. How much does academic stress affect your sleep?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 5:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"6. How often do you feel anxious about exams or assignments?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 6:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"7. How frequently do you skip meals due to academic commitments?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 7:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"8. How often do you feel that you have too many assignments due at the same time?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 8:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "A lot"},
                            {label: "Extremely"}
                        ]}
                        therapyQuestion={"9. How much does academic stress interfere with your personal relationships?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 9:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"10. How often do you feel that your academic workload is unmanageable?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 10:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"11. How often do you use time management techniques (e.g., scheduling, to-do lists) to manage your academic work?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 11:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"12. How frequently do you seek help from professors or tutors when stressed about academics?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 12:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"13. How often do you take breaks to relax or engage in leisure activities while studying?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 13:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"14. How frequently do you use exercise as a way to cope with academic stress?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 14:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"15. How often do you talk to friends or family about your academic stress?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 15:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"16. How often do you use relaxation techniques (e.g., meditation, deep breathing) to manage stress?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 16:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"17. How frequently do you get adequate sleep during the academic term?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 17:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"18. How often do you plan and organize your study sessions in advance?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 18:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"19. How often do you participate in activities or hobbies to take your mind off academic stress?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                    />
                );
            case 19:
                return (
                    <AcademicStressStapper
                        therapyTypes={[
                            {label: "Never"},
                            {label: "Rarely"},
                            {label: "Sometimes"},
                            {label: "Often"},
                            {label: "Always"}
                        ]}
                        therapyQuestion={"20. How frequently do you feel that your coping strategies are effective in managing your academic stress?"}
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

export default AcademicStressStape;