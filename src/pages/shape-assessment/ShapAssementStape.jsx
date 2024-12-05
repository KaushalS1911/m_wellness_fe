import React, {useState} from 'react';
import LookingFor from "../../components/ getstarted/LookingFor";
import Box from "@mui/material/Box";
import {Container, MobileStepper} from "@mui/material";
import ShapStapper from "./ShapStapper";

function ShapAssementStape(props) {
    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const language = sessionStorage.getItem("language")
    const handleNext = () => {
        window.scrollTo(0, 0);
        if (points1?.length !== 32) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep((prevActiveStep => prevActiveStep))
        }
    };

    const points = points1.reduce((prev, next) => {
        return prev + next
    }, 0)
    const handlePoints = (e, dat) => {
        const string = e.target.value
        // const data = string.substr(0, 1)
        // const option = string.slice(3)
        options.push(string)
        let pointsToAdd = 0;

        if (string === "A") {
            pointsToAdd = 3;
        } else if (string === "B") {
            pointsToAdd = 2;
        } else if (string === "C") {
            pointsToAdd = 1;
        } else {
            pointsToAdd = 1;
        }

        setPoints1(prevPoints => [...prevPoints, pointsToAdd]);

        if (activeStep === 4 || activeStep === 7 || activeStep === 12 || activeStep === 16 || activeStep === 21  || activeStep === 26) {
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
        window.scrollTo(0, 0);
        if (activeStep !== 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
            if (activeStep === 4 || activeStep === 7 || activeStep === 12 || activeStep === 16 || activeStep === 21  || activeStep === 26) {
                setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
            }
            if (activeStep === 32) {
                points1.splice(-2)
                options.splice(-2)

            } else {
                points1.splice(-1)
                options.splice(-1)
            }
        }

    };

    const mainEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return ("Emotional Wellbeing");
            case 1:
                return ("Behavioral Wellbeing");
            case 2 :
                return ("Physical Wellbeing");
            case 3:
                return ("Academic Wellbeing");
            case 4:
                return ("Nutritional Wellbeing");
                case 5:
                return ("Digital Wellbeing");
                case 6:
                return ("Safety and Environmental Wellbeing");


        }
    }


    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <ShapStapper therapyTypes={[
                        {label: "Very Often"},
                        {label: "Often"},
                        {label: "Sometimes"},
                        {label: "Rarely"},
                        {label: "Never"},
                    ]}

                                therapyQuestion={"1. How often does your child seem happy?"}
                                handleNext={handleNext}
                                handlePoints={handlePoints}
                                points={points}
                                handleBack={handleBack}


                    />
                );
            case 1:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Occasionally"},
                        ]}

                        therapyQuestion={"2. Does your child express sadness or tearfulness?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}

                    />
                );
            case 2:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Very Often"},
                            {label: "Often"},
                            {label: "Sometimes"},
                            {label: "Rarely"},
                            {label: "Never"},
                        ]}

                        therapyQuestion={"3. How often does your child express feelings of anger or frustration?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                    />
                );
            case 3:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Happy"},
                            {label: "Content"},
                            {label: "Neutral"},
                            {label: "Sad"},
                            {label: "Angry"},
                        ]}

                        therapyQuestion={"4. How would you rate your child's overall mood lately?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                    />
                );
            case 4:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Academic performance"},
                            {label: "Social relationships"},
                            {label: "Family matters"},
                            {label: "Other (please specify)"},
                        ]}
                        therapyQuestion={"5. Does your child express worries or anxiety about specific things? If yes, please \n" +
                        "specify"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                        points={points}
                    />
                );
            case 5:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Cooperative"},
                            {label: "Defiant"},
                            {label: "Quiet"},
                            {label: "Hyperactive"},
                            {label: "Withdrawn"},
                        ]}
                        therapyQuestion={"6. How does your child typically behave at home?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 6:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Sociable and outgoing"},
                            {label: "Shy and reserved"},
                            {label: "Aggressive"},
                            {label: "Passive"},
                            {label: "Other (please specify)"},
                        ]}
                        therapyQuestion={"7. How does your child behave in social settings (e.g., with friends, at school)?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 7:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},

                        ]}
                        therapyQuestion={"8. Does your child exhibit repetitive behaviors (e.g., hand-flapping, rocking)?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        points={points}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                    />
                );
            case 8:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Poor"},
                            {label: "Average"},
                            {label: "Good"},
                            {label: "Very Good"},
                        ]}
                        therapyQuestion={"9. How would you describe your child's overall physical health?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 9:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Please Mention"},

                        ]}
                        therapyQuestion={"10. Does your child have any chronic health conditions or medical concerns?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 10:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Everyday"},
                            {label: "Occasionally"},
                            {label: "Rarely"},
                            {label: "Never"},
                        ]}
                        therapyQuestion={"11. How often does your child engage in physical activity (e.g., playing sports, outdoor play)?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 11:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Poor"},
                            {label: "Average"},
                            {label: "Good"},
                            {label: "Very Good"},
                        ]}
                        therapyQuestion={"12.How well does your child sleep at night?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 12:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Regularly"},
                            {label: "Occasionally"},
                            {label: "Rarely"},
                            {label: "Never"},
                        ]}
                        therapyQuestion={"13. Are there any difficulties with sleep?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                        points={points}
                    />
                );
            case 13:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Outstanding (Above 90%)"},
                            {label: "Very Good (80%- 90%)"},
                            {label: "Good (70%- 80%)"},
                            {label: "Average (50%- 70%)"},
                            {label: "Poor (Less than 50%)"},
                        ]}
                        therapyQuestion={"14. How do you rate your Child’s Last year's Academic Performance?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 14:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"15. Are you worried about your child’s performance?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 15:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"16. Do you think the child is scoring up to his full potential"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                                                points={points}
                        handlePoints={handlePoints}
                    />
                );
            case 16:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Child"},
                            {label: "Parents"},
                            {label: "Teachers"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"17. Who will decide the child’s career goal?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                        points={points}
                    />
                );
            case 17:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Poor"},
                            {label: "Average"},
                            {label: "Good"},
                            {label: "Very Good"},
                        ]}
                        therapyQuestion={"18. What are your child's eating habits like?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}
                    />
                );
            case 18:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Home Cooked Food"},
                            {label: "Junk Food"},
                            {label: "Both"},
                        ]}
                        therapyQuestion={"19. What does your child prefer to eat?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );
                case 19:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"20. Does your child have a healthy appetite?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                ); case 20:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"21. Are there any concerns about your child's weight or nutrition?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                ); case 21:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Regularly"},
                            {label: "Occasionally"},
                            {label: "Rarely"},
                            {label: "Never"},
                        ]}
                        mainHandleNext={mainHandleNext}
                        therapyQuestion={"22. How often your child demands outside/Junk food?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                ); case 22:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Less Than 1 Hour"},
                            {label: "1-4 Hours"},
                            {label: "Beyond 4 Hours"},
                        ]}
                        therapyQuestion={"23. How much time does your child spend using screens (e.g., TV, computer, tablet,smartphone) each day?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                ); case 23:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Sometimes"},
                        ]}
                        therapyQuestion={"24. Are there any rules or restrictions in place regarding screen time?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );
                case 24:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Regularly"},
                            {label: "Sometimes"},
                            {label: "Never"},
                        ]}
                        therapyQuestion={"25. Does the Child Follow the restrictions?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );case 25:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Regularly"},
                            {label: "Sometimes"},
                            {label: "Never"},
                        ]}
                        therapyQuestion={"26. Does your Child Sleep or Eat while using Mobile/Laptop/Other electronic devices?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );case 26:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                        ]}
                        therapyQuestion={"27. Has the child threatened you regarding restrictions?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        mainHandleNext={mainHandleNext}
                        points={points}
                        points1={points1}

                    />
                );case 27:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"28. Does your child feel safe at home, school, and in the community?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );
                case 28:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"29. Are there any concerns about safety or potential hazards in your child's environment?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );  case 29:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Don’t Know"},
                        ]}
                        therapyQuestion={"30. Is there open communication between your child and trusted adults regarding safety concerns?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );  case 30:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Never Observed"},
                        ]}
                        therapyQuestion={"31. Does your child get disturbed in the presence of any specific person inside or outside the family?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );  case 31:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Never Observed"},
                        ]}
                        therapyQuestion={"32. Does your child think of self or his/her body as repulsive, dirty or bad??"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        points1={points1}

                    />
                );
            case 32:
                return (
                    <ShapStapper
                        therapyTypes={[
                            {label: "Yes"},
                            {label: "No"},
                            {label: "Never Observed"},
                        ]}
                        therapyQuestion={"33. Have you ever observed sudden money, gifts, or toys from unknown person?"}
                        handleBack={handleBack}
                        submit={true}
                        last={true}
                        points={points}
                        handleClean={handleClean}
                        handlePoints={handlePoints}
                        apiOptions={options}
                        points1={points1}

                    />
                );
            default:
                return "Unknown step";
        }
    };
    return (
        <>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6",minHeight:"87vh",height:"100%", pb: "5px"}}>
                <Container>

                    <MobileStepper
                        className="main"
                        variant="dots"
                        steps={7}
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
                            { mainEnglishStepContent(mainActiveStep)}
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            {language === "english" && <Box sx={{textAlign: "center", mt: "20px", width: {md: "850px"}}}>
                                It's important to have a therapist who you can establish a personal connection with. The
                                following questions are designed to help match you to a licensed therapist based on your
                                needs and personal preferences.
                            </Box>}
                        </Box>
                    </Box>

                    <React.Fragment>
                        <Box>{ getEnglishStepContent(activeStep)}</Box>

                    </React.Fragment>

                </Container>
            </Box>
        </>
    );
}

export default ShapAssementStape;