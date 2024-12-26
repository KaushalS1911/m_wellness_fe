import React, {useState} from 'react';
import {Box, Container, MobileStepper} from "@mui/material";
import WorkLifeAssessmentStepper from "./WorkLifeAssessmentStepper"

function WorkLifeAssessment(props) {
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const points = points1.reduce((prev, next) => {
        return prev + next
    }, 0)
    const handleNext = () => {
        window.scrollTo(0, 0);
        if (points1?.length !== 14) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep((prevActiveStep => prevActiveStep))
        }
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
                return ("Time Management");
                case 1:
                return ("Stress Levels");
                case 2:
                return ("Workload and Boundaries");
                case 3:
                return ("Personal Time and Fulfilment");
                case 4:
                return ("Physical and Mental Well-being") ;
        }
    }
    const handlePoints = (e, questionIndex) => {
        const selectedAnswer = e.target.value;

        const pointsMapping = [
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Not at all": 1, "Slightly": 2, "Moderately": 3, "Very": 4,"Extremely" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Not at all": 1, "Slightly": 2, "Moderately": 3, "Very": 4,"Extremely" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Not at all": 1, "Slightly": 2, "Moderately": 3, "Very": 4,"Extremely" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Not at all": 1, "Slightly": 2, "Moderately": 3, "Very": 4,"Extremely" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Never": 1, "Rarely": 2, "Sometimes": 3, "Often": 4,"Always" : 5},
            {"Not at all": 1, "Slightly": 2, "Moderately": 3, "Very": 4,"Extremely" : 5},

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

        handleNext();
        if (activeStep === 2 || activeStep === 5 || activeStep === 8 || activeStep === 11) {
            mainHandleNext()
        }
    };

    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"1. How often do you feel you have enough time for both work-related and personal activities?"}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                        points={points}
                        handleNext={handleNext}
                    />
                );
            case 1:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"2. How frequently do you finish your work within scheduled hours?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 2:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "Very"},
                            {label: "Extremely"},
                        ]}

                        therapyQuestion={"3. How confident are you in managing your time between professional and personal responsibilities?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 3:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}

                        therapyQuestion={"4. How often do you feel overwhelmed by your job demands?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );
            case 4:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"5. How frequently does work-related stress affect your personal life?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 5:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"6. How often do you feel emotionally present when spending time with family and friends?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 6:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "Very"},
                            {label: "Extremely"},
                        ]}
                        therapyQuestion={"7. How confident are you in setting boundaries between your work and personal life?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 7:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"8. How often does your workload allow you to take breaks or time off without guilt?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 8:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "Very"},
                            {label: "Extremely"},
                        ]}
                        therapyQuestion={"9. How comfortable do you feel saying no to extra work that could affect your personal time?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 9:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"10. How often do you engage in hobbies or personal activities you enjoy?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 10:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "Very"},
                            {label: "Extremely"},
                        ]}
                        therapyQuestion={"11. How satisfied are you with the quality time you spend with your loved ones?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 11:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"12. How often do your personal relationships feel unaffected by work responsibilities?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 12:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"13. How regularly do you make time for activities that support your physical or mental well-being?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 13:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[{label: "Never"}, {label: "Rarely"}, {label: "Sometimes"}, {label: "Often"},{label:"Always"}]}
                        therapyQuestion={"14. How frequently does work negatively impact your sleep or eating habits?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={(e) => handlePoints(e, activeStep)}
                    />
                );  case 14:
                return (
                    <WorkLifeAssessmentStepper
                        therapyTypes={[
                            {label: "Not at all"},
                            {label: "Slightly"},
                            {label: "Moderately"},
                            {label: "Very"},
                            {label: "Extremely"},
                        ]}
                        therapyQuestion={"15. How satisfied are you with the balance between your professional ambitions and personal happiness?"}
                        handleBack={handleBack}
                        points={points}
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
                            {mainEnglishStepContent(mainActiveStep)}
                        </Box>
                    </Box>
                    <Box>{getEnglishStepContent(activeStep)}</Box>
                </Container>
            </Box>
        </>
    );
}

export default WorkLifeAssessment;