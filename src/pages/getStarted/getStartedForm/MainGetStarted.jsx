import {useState} from 'react';
import GetStartedForm from "./GetStartedForm";
import Auth from "../../../components/auth/Auth";

function MainGetStarted(props) {
    const [otpSent, setOtpSent] = useState(false);
    const [user, setUser] = useState(null);
    console.log(user)
    const handleOtpSent = () => {
        setOtpSent(true);
    };
    const handleOtpVerified = (user) => {
        setUser(user);
        alert('OTP Verified! Proceeding further...');

    };
    return (
        <>
            <div> {!otpSent ? (<GetStartedForm onOtpSent={handleOtpSent}/>) : (
                <Auth onOtpVerified={handleOtpVerified}/>)} </div>
        </>
    );
}

export default MainGetStarted