import React from 'react';
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='about' element={ <About />} />
            </Routes>
                <Footer />
        </>
    );
}

export default App;