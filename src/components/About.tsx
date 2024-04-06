"use client";

import { CSSProperties } from "react";
import { aboutMe } from "@/constants/data";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      transition={{ type: "spring", damping: 50, mass: 0.99 }}
      initial={{ opacity: 0, x: -2000 }}
      animate={{ opacity: 1, x: 0 }}
      style={aboutStyle}
    >
      {/* AboutMe Left Side */}
      <div style={colLeftStyle}>
        {/* Aboutme Image */}
        <div className="relative h-full w-full mt-[180px] mb-auto border-[10px] border-solid after:content-[''] after:absolute after:left-[-33px] after:top-[19px] after:h-[98%] after:w-[98%] after:border-[8px] after:border-rose-700 after:z-[-1]">
          <img src={"../../images/aboutImage.jpg"} alt="aboutImage" />
        </div>
      </div>
      {/* Aboutme Right Side */}
      <div className="w-[100%] basis-[65%] mx-10">
        {aboutMe.map((about, i) => (
          <>
            <h1 key={about.id} style={aboutmeH1Style}>
              About <span className="text-rose-700">Me</span>
            </h1>
            <h2 className="text-[1.8rem] font-medium tracking-[.2rem] mb-[10px]">
              {about.aboutMeParagraphContent}
            </h2>
            <p className="mb-[20px] text-justify">{about.aboutMeContent}</p>
            <a
              href="#gallery"
              className="inline-block py-[10px] px-[30px] text-black mb-[50px] text-lg bg-transparent border border-solid border-red-700 uppercase tracking-[.1rem] mt-[30px] transition hover:text-white hover:bg-rose-700"
            >
              Collections
            </a>
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default About;

// Styling

const aboutStyle: CSSProperties = {
  display: "flex",

  // flexDirection: "column-reverse",
  textAlign: "center",
  maxWidth: "1500px",
  margin: "0 auto",
  padding: "100px 20px",
};

const colLeftStyle: CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
  flexBasis: "30%",
  width: "250px",
  height: "360px",
};

const aboutmeH1Style: CSSProperties = {
  fontSize: "4rem",
  fontWeight: "300",
  color: "black",
  marginBottom: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  textAlign: "center",
};
