import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <Box sx={{ background: "#222831" }}>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
