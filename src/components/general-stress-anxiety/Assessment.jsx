import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {Button, Container, MobileStepper, Typography} from "@mui/material";
import LookingFor from "../ getstarted/LookingFor";

function GeneralStressAnxietyAssessment() {

    const [points1, setPoints1] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const [mainActiveStep, setMainActiveStep] = React.useState(0);
    const [options, setOptions] = useState([])
    const language = sessionStorage.getItem("language")

    const handleNext = () => {
        window.scrollTo(0, 0);
            console.log("Hello I am calling", points1.length)
        if (points1?.length < 11) {
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
        const data = string.substr(0, 1)
        const option = string.slice(3)
        options.push(option)
        let pointsToAdd = 0;

        if (data === "A") {
            pointsToAdd = 4;
        } else if (data === "B") {
            pointsToAdd = 3;
        } else if (data === "C") {
            pointsToAdd = 2;
        } else if (data === "D") {
            pointsToAdd = 1;
        } else {
            pointsToAdd = 0
        }

        setPoints1(prevPoints => [...prevPoints, pointsToAdd]);

        // if (activeStep === 11) {
        //     mainHandleNext();
        // }
        //
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
            if (activeStep === 11) {
                setMainActiveStep((prevActiveStep) => prevActiveStep - 1);
            }
            if (activeStep === 11) {
                points1.splice(-2)
                options.splice(-2)

            } else {
                points1.splice(-1)
                options.splice(-1)
            }
        }

    };

    const mainEnglishStepContent = (step) => {
        if (step === 0) {
            return ("General Stress and Anxiety");
        }
    }
    const mainHindiStepContent = (step) => {
        switch (step) {
            case 0:
                return ("तनाव प्रबंधन (Stress Management)");
            case 1:
                return ("भावनात्मक सहनशीलता (Emotional Resilience)");
            case 2 :
                return ("निर्णय लेने की क्षमता (Decision-Making)");
            case 3:
                return ("प्रेरणा और प्रतिबद्धता (Motivation and Commitment)");
            case 4:
                return ("अंतर्राष्ट्रीय कौशल (Interpersonal Skills)");

        }
    }

    const getEnglishStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <LookingFor therapyTypes={[
                        {label: "A) Always"},
                        {label: "B) Often"},
                        {label: "C) Sometimes"},
                        {label: "D) Rarely"},
                        {label: "E) Never"},
                    ]}

                                therapyQuestion={"1. I have Experienced Headaches, Muscle Tension or Unexplained Pain or Aches."}
                                handleNext={handleNext}
                                handlePoints={handlePoints}
                                points={points}
                                handleBack={handleBack}
                                // disabledAt={12}

                    />
                );
            case 1:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}

                        therapyQuestion={"2. I experienced trouble falling asleep, staying asleep, or woke up interrupted"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}

                    />
                );
            case 2:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}

                        therapyQuestion={"3. I experienced Fatigue and felt tired even after resting"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                    />
                );
            case 3:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}

                        therapyQuestion={"4. I experienced rapid heartbeat, shortness of breath and sweating"}
                        handleBack={handleBack}
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
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"5. Was unable to cope up with daily tasks and felt overwhelmed"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 5:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"6. Worried excessively with unlikely or about small problems"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 6:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"7. I feel irritable and easily frustrated"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 7:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"8. I have trouble concentrating and staying focused"}
                        handleBack={handleBack}
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
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"9. I avoid situations or tasks if they make me anxious"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 9:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"10. I procrastinate (Delay my Tasks) due to feeling stressed or overwhelmed"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 10:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"11. I have eating issues (Overeating or Undereating) or rely on substances (Caffeine, Nicotine, Alcohol) to manage stress."}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                        disabledAt={12}

                    />
                );
            case 11:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) Always"},
                            {label: "B) Often"},
                            {label: "C) Sometimes"},
                            {label: "D) Rarely"},
                            {label: "E) Never"},
                        ]}
                        therapyQuestion={"12. I find it hard to relax even during non-working or leisure hours"}
                        handleBack={handleBack}
                        submit={true}
                        last={true}
                        points={points}
                        handleClean={handleClean}
                        handlePoints={handlePoints}
                        apiOptions={options}
                        points1={points1}
                        disabledAt={12}

                    />
                );
            // case 12:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"13. What motivates you to pursue a career in the IAS?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //         />
            //     );
            // case 13:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"14. How do you keep yourself motivated during tough times?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //         />
            //     );
            // case 14:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"15. How do you handle distractions while studying?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //         />
            //     );
            // case 15:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"16. How committed are you to your preparation routine?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             mainHandleNext={mainHandleNext}
            //             points={points}
            //             handlePoints={handlePoints}
            //         />
            //     );
            // case 16:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"17. How do you handle conflicts or disagreements with others?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //         />
            //     );
            // case 17:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"18. How often do you seek feedback from others about your performance?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //             points1={points1}
            //         />
            //     );
            // case 18:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"19. How do you contribute to group study sessions or discussions?"}
            //             handleBack={handleBack}
            //             handleNext={handleNext}
            //             handlePoints={handlePoints}
            //             points={points}
            //             points1={points1}
            //
            //         />
            //     );
            // case 19:
            //     return (
            //         <LookingFor
            //             therapyTypes={[
            //                 {label: "A) Always"},
            //                 {label: "B) Often"},
            //                 {label: "C) Sometimes"},
            //                 {label: "D) Rarely"},
            //                 {label: "E) Never"},
            //             ]}
            //             therapyQuestion={"20. When working with others, what role do you typically take?"}
            //             handleBack={handleBack}
            //             submit={true}
            //             last={true}
            //             points={points}
            //             handleClean={handleClean}
            //             handlePoints={handlePoints}
            //             apiOptions={options}
            //             points1={points1}
            //
            //         />
            //     );
            default:
                return "Unknown step";
        }
    };

    const getHindiStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <LookingFor therapyTypes={[
                        {label: "A) शांत और केंद्रित रहते हैं"},
                        {label: "B) चिंतित हो जाते हैं लेकिन फिर भी संभालते हैं"},
                        {label: "C) संयम बनाए रखने में संघर्ष करते हैं"},
                        {label: "D) स्थिति से बचने की कोशिश करते हैं"},
                    ]}

                                therapyQuestion={"1. आप सामान्यतः उच्च दबाव वाली स्थितियों को कैसे संभालते हैं?"}
                                handleNext={handleNext}
                                handlePoints={handlePoints}
                                points={points}
                                handleBack={handleBack}


                    />
                );
            case 1:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) तत्कालता और महत्व के आधार पर"},
                            {label: "B) केवल समय-सीमाओं के आधार पर"},
                            {label: "C) बेतरतीब ढंग से"},
                            {label: "D) अक्सर उलझन में पड़ जाते हैं और निर्णय लेने में देरी करते हैं"},
                        ]}

                        therapyQuestion={"2. जब आपके पास कई समय-सीमाएं होती हैं, तो आप कार्यों को कैसे प्राथमिकता देते हैं?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}

                    />
                );
            case 2:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) नियमित रूप से, हर 1-2 घंटे में"},
                            {label: "B) कभी-कभी, जब थकान महसूस होती है"},
                            {label: "C) शायद ही कभी, केवल जब अत्यधिक थकान होती है"},
                            {label: "D) कभी नहीं, मैं लगातार पढ़ाई करता हूँ"},
                        ]}

                        therapyQuestion={"3. पढ़ाई के दौरान तनाव प्रबंधन के लिए आप कितनी बार ब्रेक लेते हैं?"}
                        handleBack={handleBack}
                        points={points}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                    />
                );
            case 3:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) गहरी साँस लेना और ध्यान करना"},
                            {label: "B) दोस्तों और परिवार से बात करना"},
                            {label: "C) इसे अनदेखा करना और उम्मीद करना कि यह चला जाएगा"},
                            {label: "D) पढ़ाई टालना या उससे बचना"},
                        ]}

                        therapyQuestion={"4. परीक्षा से संबंधित चिंता का सामना करने के लिए आप कौन सी तकनीकें उपयोग करते हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) विश्लेषण करते हैं कि क्या गलत हुआ और फिर से प्रयास करते हैं"},
                            {label: "B) निराश होते हैं लेकिन जल्दी ही आगे बढ़ जाते हैं"},
                            {label: "C) बहुत निराश और हतोत्साहित हो जाते हैं"},
                            {label: "D) हार मानने का विचार करते हैं"},
                        ]}
                        therapyQuestion={"5. असफलता या प्रतिकूल परिस्थितियों का सामना कैसे करते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 5:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) रचनात्मक रूप से, इसका उपयोग सुधारने के लिए करते हैं"},
                            {label: "B) तटस्थ रूप से, जिससे मेरी भावनाओं पर थोड़ा प्रभाव पड़ता है"},
                            {label: "C) रक्षात्मक रूप से, इसे व्यक्तिगत रूप में लेते हैं"},
                            {label: "D) नकारात्मक रूप से, हतोत्साहित हो जाते हैं"},
                        ]}
                        therapyQuestion={"6. जब आपको आलोचना मिलती है, तो आप कैसे प्रतिक्रिया करते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 6:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) उस समस्या का समाधान खोजते हैं जो निराशा का कारण बन रही है"},
                            {label: "B) ब्रेक लेते हैं और बाद में फिर से प्रयास करते हैं"},
                            {label: "C) दोस्तों या परिवार से अपनी भावनाएं व्यक्त करते हैं"},
                            {label: "D) इससे मेरी प्रेरणा और उत्पादकता पर प्रभाव पड़ता है"},
                        ]}
                        therapyQuestion={"7. अपनी तैयारी के दौरान निराशा की भावनाओं का आप कैसे सामना करते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 7:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) अक्सर, समझने और सुधारने के लिए"},
                            {label: "B) कभी-कभी, जब चीजें गलत हो जाती हैं"},
                            {label: "C) शायद ही कभी, केवल अत्यधिक मामलों में"},
                            {label: "D) कभी नहीं, मैं अपनी भावनाओं के बारे में नहीं सोचता"},
                        ]}
                        therapyQuestion={"8. आप कितनी बार अपनी भावनात्मक प्रतिक्रियाओं पर विचार करते हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) जितना संभव हो उतनी जानकारी एकत्रित करते हैं और फिर निर्णय लेते हैं"},
                            {label: "B) अपनी अंतर्दृष्टि पर भरोसा करते हैं"},
                            {label: "C) दूसरों से सलाह लेते हैं"},
                            {label: "D) निर्णय को तब तक टालते हैं जब तक कि अधिक जानकारी उपलब्ध नहीं हो जाती"},
                        ]}
                        therapyQuestion={"9. जब आपके पास पर्याप्त जानकारी नहीं होती है, तो आप कैसे निर्णय लेते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 9:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) दीर्घकालिक परिणाम"},
                            {label: "B) तात्कालिक लाभ"},
                            {label: "C) दूसरों की राय"},
                            {label: "D) संघर्ष से बचना"},
                        ]}
                        therapyQuestion={"10. कठिन निर्णय लेते समय आपका मुख्य विचार क्या होता है?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 10:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) बहुत आत्मविश्वासी"},
                            {label: "B) काफी आत्मविश्वासी"},
                            {label: "C) कभी-कभी अपने निर्णयों पर संदेह करते हैं"},
                            {label: "D) अक्सर अनिश्चित और पुनर्विचार करते हैं"},
                        ]}
                        therapyQuestion={"11. आप अपनी निर्णय लेने की क्षमता पर कितना विश्वास रखते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 11:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) इसे स्वीकार करते हैं, इससे सीखते हैं, और आगे बढ़ते हैं"},
                            {label: "B) पछतावा महसूस करते हैं लेकिन इसे सुधारने की कोशिश करते हैं"},
                            {label: "C) परेशान हो जाते हैं और इसे लेकर सोचते रहते हैं"},
                            {label: "D) बाहरी कारकों को दोष देते हैं"},
                        ]}
                        therapyQuestion={"12. जब आप गलत निर्णय लेते हैं, तो आप कैसे संभालते हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) समाज पर सकारात्मक प्रभाव डालने की इच्छा "},
                            {label: "B) नौकरी के साथ मिलने वाली प्रतिष्ठा और सम्मान"},
                            {label: "C) नौकरी की सुरक्षा और लाभ"},
                            {label: "D) परिवार या साथियों का दबाव"},
                        ]}
                        therapyQuestion={"13. आपको अपने चुने हुए करियर मार्ग को अपनाने के लिए क्या प्रेरित करता है?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 13:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) अपने लक्ष्यों और आकांक्षाओं को याद करते हैं"},
                            {label: "B) सफल लोगों से प्रेरणा लेते हैं"},
                            {label: "C) ब्रेक लेते हैं और आराम करते हैं"},
                            {label: "D) प्रेरित रहने के लिए संघर्ष करते हैं"},
                        ]}
                        therapyQuestion={"14. कठिन समय में खुद को प्रेरित रखने के लिए आप क्या करते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 14:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) सख्त पढ़ाई कार्यक्रम बनाते हैं और उसका पालन करते हैं"},
                            {label: "B) ध्यान भंग को कम करने के लिए पढ़ाई के अनुकूल माहौल बनाते हैं "},
                            {label: "C) कभी-कभी ध्यान भंग में फंस जाते हैं लेकिन फिर से ध्यान केंद्रित करते हैं"},
                            {label: "D) अक्सर ध्यान भंग में फंस जाते हैं और ध्यान केंद्रित करने में असमर्थ रहते हैं"},
                        ]}
                        therapyQuestion={"15. पढ़ाई के दौरान आप ध्यान भंग करने का कैसे सामना करते हैं??"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 15:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) पूरी तरह प्रतिबद्ध, शायद ही कभी पढ़ाई सत्र मिस करते हैं"},
                            {label: "B) काफी प्रतिबद्ध, लेकिन कभी-कभी लचीले रहते हैं"},
                            {label: "C) कुछ हद तक प्रतिबद्ध, अक्सर अन्य चीजों में फंस जाते हैं"},
                            {label: "D) निरंतर दिनचर्या बनाए रखने में संघर्ष करते हैं"},
                        ]}
                        therapyQuestion={"16. आप अपनी तैयारी की दिनचर्या के प्रति कितने प्रतिबद्ध हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) उनकी दृष्टिकोण को समझने की कोशिश करते हैं और सौहार्दपूर्ण ढंग से हल करते हैं"},
                            {label: "B) अपने दृष्टिकोण पर अडिग रहते हैं लेकिन सम्मानपूर्वक"},
                            {label: "C) जितना हो सके टकराव से बचते हैं"},
                            {label: "D) निराश हो जाते हैं और भावनाओं को हावी होने देते हैं"},
                        ]}
                        therapyQuestion={"17. आप दूसरों के साथ मतभेद या विवाद को कैसे संभालते हैं?"}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handlePoints={handlePoints}
                        points={points}
                    />
                );
            case 17:
                return (
                    <LookingFor
                        therapyTypes={[
                            {label: "A) नियमित रूप से, सुधारने और बढ़ने के लिए"},
                            {label: "B) कभी-कभी, जब मुझे लगता है कि इसकी आवश्यकता है"},
                            {label: "C) शायद ही कभी, केवल जब पूछा जाता है"},
                            {label: "D) कभी नहीं, मैं आत्म-मूल्यांकन पर निर्भर करता हूँ"},
                        ]}
                        therapyQuestion={"18. आप कितनी बार दूसरों से अपनी प्रदर्शन के बारे में प्रतिक्रिया मांगते हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) सक्रिय रूप से भाग लेते हैं और अपना ज्ञान साझा करते हैं"},
                            {label: "B) सुनते हैं और जब कुछ मूल्यवान जोड़ना होता है, तो योगदान करते हैं"},
                            {label: "C) ज्यादातर सुनते हैं, शायद ही कभी योगदान करते हैं"},
                            {label: "D) अकेले पढ़ाई करना पसंद करते हैं और समूह सत्रों से बचते हैं"},
                        ]}
                        therapyQuestion={"19. समूह अध्ययन सत्रों या चर्चाओं में आप कैसे योगदान करते हैं?"}
                        handleBack={handleBack}
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
                            {label: "A) नेता, समूह को संगठित और निर्देशित करते हैं"},
                            {label: "B) सहयोगी, दूसरों के साथ मिलकर काम करते हैं"},
                            {label: "C) समर्थक, जहां आवश्यकता होती है मदद करते हैं"},
                            {label: "D) पर्यवेक्षक, दूसरों को नेतृत्व करने देते हैं"},
                        ]}
                        therapyQuestion={"20. दूसरों के साथ काम करते समय आप सामान्यतः कौन-सी भूमिका निभाते हैं?"}
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
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: "5px"}}>
                <Container>

                    {/*<MobileStepper*/}
                    {/*    className="main"*/}
                    {/*    variant="dots"*/}
                    {/*    steps={5}*/}
                    {/*    position="static"*/}
                    {/*    activeStep={mainActiveStep}*/}
                    {/*    sx={{*/}
                    {/*        width: "100%",*/}
                    {/*        flexGrow: 1,*/}
                    {/*        backgroundColor: "#FFFCF6",*/}
                    {/*        display: "flex",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        mb: "20px",*/}
                    {/*        // "& .css-114p2tk-MuiMobileStepper-dot": {*/}
                    {/*        //     width: "50px !important",*/}
                    {/*        //     height: "5px !important",*/}
                    {/*        //     borderRadius: "unset !important",*/}
                    {/*        //     backgroundColor: "#DCE2DA !important",*/}
                    {/*        // },*/}
                    {/*        // "& .css-26w9jf-MuiMobileStepper-dot": {*/}
                    {/*        //     width: "50px !important",*/}
                    {/*        //     borderRadius: "unset !important",*/}
                    {/*        //     backgroundColor: "#325343 !important",*/}
                    {/*        //     height: "5px !important",*/}
                    {/*        // }*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <Box>
                        <Box sx={{fontSize: "46px", color: "#444444", textAlign: 'center'}} className="overpass">
                            {/*Help us match you to the <Typography variant="span" sx={{color:"green"}}> right therapist</Typography>*/}
                            {language === "hindi" ? mainHindiStepContent(mainActiveStep) : mainEnglishStepContent(mainActiveStep)}
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
                        <Box>{language === "hindi" ? getHindiStepContent(activeStep) : getEnglishStepContent(activeStep)}</Box>

                    </React.Fragment>

                </Container>
            </Box>
        </>
    );
}

export default GeneralStressAnxietyAssessment;