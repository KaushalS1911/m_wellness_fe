import React from 'react';
import AdviceSlider from "../../components/advice/AdviceSlider";
import AdviceRecent from "../../components/advice/AdviceRecent";
import AdviceReview from "../../components/advice/AdviceReview";
import AdviceSignUp from "../../components/advice/AdviceSignUp";
import AdviceSpeak from "../../components/advice/AdviceSpeak";

function Advice(props) {
    return (
        <>
        <AdviceSlider />
            <AdviceRecent />
            <AdviceReview />
            <AdviceSignUp />
            <AdviceSpeak />
        </>
    );
}

export default Advice;