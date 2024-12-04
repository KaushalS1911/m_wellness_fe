import React, {useState} from 'react';
import {Box} from "@mui/material";
import GetStarted2 from "../../components/getstarted/GetStarted";
import LookingFor from "../../components/getstarted/LookingFor";
import GetStartedReview from "../../components/getstarted/GetStartedReview";

function GetStarted(props) {
    const [points1, setPoints1] = useState([])
    return (
<>
            <GetStarted2  />
    {/*<GetStartedReview />*/}
</>
    );
}

export default GetStarted;