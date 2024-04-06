"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

const Hero = () => {
  return (
    <motion.div
      transition={{ type: "spring", damping: 50, mass: 0.99 }}
      initial={{ opacity: 0, x: -2000 }}
      animate={{ opacity: 1, x: 0 }}
      className="HS"
    >
      <div>
        <h1 className="block w-fit text-[4rem] relative text-rose-700/100 ">
          Hello,
        </h1>
        <h1 className="block w-fit text-[4rem] relative text-rose-700/100 ">
          My Name is
        </h1>
        <h1 className="block w-fit text-[4rem] relative text-rose-700/100 ">
          Rasha Jazairi
        </h1>
        <a href="#gallery" type="button" className="inline-block py-[10px] px-[30px] text-white text-lg bg-transparent border border-solid border-red-700 uppercase tracking-[.1rem] mt-[30px] transition hover:text-white hover:bg-rose-700">
          Art Works
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;

