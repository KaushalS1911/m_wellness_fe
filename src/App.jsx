import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import GetStarted from "./pages/getStarted/GetStarted";
import StartAssessment from "./pages/getStarted/startAssessment/StartAssessment";
import {Box} from "@mui/material";
import ShapAssessment from "./pages/shape-assessment/ShapAssessment";
import FamilyInfo from "./pages/shape-assessment/FamilyInfo";
import Auth from "./components/auth/Auth";
import MainGetStarted from "./pages/getStarted/getStartedForm/MainGetStarted";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/global/Header";
import PsyConnectDrishti from "./pages/psyconnect-drishti button/PsyConnect-Drishti";
import PsyConnectDrishtiForm from "./pages/psyconnect-drishti button/PsyConnectDrishtiForm";
import GetStartedHome from "./pages/getStarted/getStartedHome/GetStartedHome";
import PointTable from "./pages/PointTable";
import ShapAssementStape from "./pages/shape-assessment/ShapAssementStape";
import MentalHealthAssessment from "./pages/home/MentalHealthAssessment";
import EmotionalAwarenessStape from "./pages/emotional-awareness/EmotionalAwarenessStape";
import EmotionalAwarenessPointTable from "./pages/EmotionalAwarenessPointTable";
import AcademicStressStape from "./pages/academic-stress/AcademicStressStape";
import AcademicStressPointTable from "./pages/AcademicStressPointTable";
import SelfEsteemAssessmentStape from "./pages/self-esteem-assessment/SelfEsteemAssessmentStape";
import SelfEsteemAssessmentPointTable from "./pages/SelfEsteemAssessmentPointTable";
import GeneralStressAnxiety from "./pages/general-stress-anxiety/GeneralStressAnxiety";
import GeneralStressAnxietyStartAssessment
    from "./pages/getStarted/startAssessment/GeneralStressAnxietyStartAssessment";
import GeneralStressAnxietyAssessment from "./components/general-stress-anxiety/Assessment";
import GeneralStressAnxietyPointTable from "./components/general-stress-anxiety/GeneralStressAnxietyPointsTable";

function App() {
    function ScrollToTop() {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            easing: 'ease-in-out',
        });
        // AOS.refresh()
    }, []);

    return (
        <>
            <Header/>
            <ScrollToTop/>
            {/*<ShapAssementStape />*/}

            {/*<FamilyInfo />*/}
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
                <Route path="/" element={<MentalHealthAssessment/>}/>
                <Route path="/psyconnect-drishti" element={<PsyConnectDrishti/>}/>
                <Route path="/psyconnect-drishti-form" element={<PsyConnectDrishtiForm/>}/>
                <Route path="/emotional" element={<GetStartedHome/>}/>
                <Route path="/assessment/:id" element={<PointTable/>}/>
                <Route path="/EmotionalAwarenessAssessment/:id" element={<EmotionalAwarenessPointTable/>}/>
                <Route path="/AcademicStressAssessment/:id" element={<AcademicStressPointTable/>}/>
                <Route path="/SelfEsteemAssessment/:id" element={<SelfEsteemAssessmentPointTable/>}/>
                <Route path="/general-stress-anxiety/:id" element={<GeneralStressAnxietyPointTable/>}/>
                <Route path="/shape-form" element={<ShapAssessment/>}/>
                <Route path="/shape-family" element={<FamilyInfo/>}/>
                <Route path="/shape-assessment" element={<ShapAssementStape/>}/>
                <Route path="/general-stress-anxiety" element={<GeneralStressAnxiety/>}/>
                {/*<Route path="about" element={<About />} />*/}
                {/*<Route path="business" element={<BusinessPage />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
                <Route path="/assessment" element={<GetStarted/>}/>
                <Route path="/general-stress-anxiety-assessment" element={<GeneralStressAnxietyAssessment/>}/>
                <Route path="/auth-form" element={<Auth/>}/>
                <Route path="/consent-form" element={<GetStartedHome/>}/>
                <Route path="/assessment-form" element={<MainGetStarted/>}/>
                <Route path="/start-assessment" element={<StartAssessment/>}/>
                <Route path="/general-stress-anxiety-start-assessment" element={<GeneralStressAnxietyStartAssessment/>}/>
                <Route path="/EmotionalAwareness" element={<EmotionalAwarenessStape/>}/>
                <Route path="/AcademicStress" element={<AcademicStressStape/>}/>
                <Route path="/SelfEsteemAssessment" element={<SelfEsteemAssessmentStape/>}/>

                {/*<Route path="faq" element={<MainFaqs />} />*/}
                {/*<Route path="advice" element={<Advice />} />*/}
            </Routes>

            {/*<Footer />*/}
            <Box sx={{fontSize: "20px", py: 5, textAlign: "center", fontWeight: "600", px: {md: 5, xs: 1}}}
                 className={"overpass"}>Mahadevasth Technologies or any of their employees and associates are not into
                providing any Suicide Prevention. For any such emergency or help, kindly connect with National Suicide
                Helpline/TeleManas: 1-800-8914416</Box>
        </>
    )
}

export default App
