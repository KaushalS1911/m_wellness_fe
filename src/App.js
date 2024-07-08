import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import About from "./pages/About";
import BusinessPage from "./pages/BusinessPage";

function App(props) {
  return (
    <>
      <Header />
      {/* <About /> */}
      <BusinessPage />
      <Box sx={{ backgroundColor: "white", padding: "10px 0 40px" }}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
