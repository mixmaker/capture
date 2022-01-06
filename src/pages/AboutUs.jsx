import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrolltoTop from "../components/ScrolltoTop";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrolltoTop/>
    </motion.div>
  );
};

export default AboutUs;
