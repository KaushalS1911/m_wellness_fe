import React from 'react';
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import {Box} from "@mui/material";

function App(props) {
    return (
        <>
            <Header />
         <Home />
                <Footer />
        </>
    );
}

export default App;