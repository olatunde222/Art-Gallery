"use client";

import { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  // form submission and feild clearing after submission
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Srcipt URL generated from google sheet
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby09VTLBAPLa6YDBuuO4qfqdlx95ZVU7K3ibGeIUfX8lPhF3_9sTh2YMF3JtPddP8FpRw/exec";

  // Function for handling submission and sending the details to the google sheet.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        setSubmitted(true);
        setLoading(false);
        form.reset(); // Clear form fields
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setLoading(false);
      });
  };
  return (
    <motion.div
      transition={{ type: "spring", damping: 50, mass: 0.99 }}
      initial={{ opacity: 0, x: -2000 }}
      animate={{ opacity: 1, x: 0 }}
      style={contactStyle}
    >
      <div style={contantRowStyle}>
        {/* contact left */}
        <div className="basis-[35%]">
          <h1 className="text-[4rem] font-light uppercase text-black mb-[10px] md:text-[3rem] lg:text-[2.5rem]">
            Contact <span className="text-rose-700">Me</span>
          </h1>
          <p className="text-[#ff004f] mt-[30px] mr-[15px] text-[25px]">
            rasha.jazairi@hotmail.com
          </p>
          <p className="text-[#ff004f] mt-[30px] mr-[15px] text-[25px]">
            +971544590574, +46767225850
          </p>
          {/* contact Social icons */}
          <div className="mt-[30px]">
            <a
              href="https://www.instagram.com/rashajazairi/"
              className="no-underline text-[30px] mr-[15px] text-[#ababab] inline-block transition-transform hover:text-rose-700 hover:translate-y-[-5px]"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rasha-jazairi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B25AqRU3lTGOTXk5wNs49JQ%3D%3D"
              className="no-underline text-[30px] mr-[15px] text-[#ababab] inline-block transition-transform hover:text-rose-700 hover:translate-y-[-5px]"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              className="no-underline text-[30px] mr-[15px] text-[#ababab] inline-block transition-transform hover:text-rose-700 hover:translate-y-[-5px]"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        {/* contact right */}
        <div className="basis-[60%]">
          {/* Contact Form */}
          <form
            action=""
            className="w-full"
            name="submit-to-google-sheet"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full border-[2px] border-rose-700 p-4 outline-none text-black text-lg rounded-3xl m-4 "
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border-[2px] border-rose-700 p-4 outline-none text-black text-lg rounded-3xl m-4"
            />
            <textarea
              name="Message"
              id=""
              placeholder="Your Message"
              rows={6}
              className="w-full border-rose-700 border-[2px] p-4 outline-none text-black text-lg rounded-3xl m-4 "
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="inline-block py-[10px] px-[30px] text-black mb-[50px] text-lg bg-transparent border border-solid border-red-700 uppercase tracking-[.1rem] mt-[30px] transition hover:text-white hover:bg-rose-700"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          {/* User Notification Message */}
          {submitted && <p>Thank you for reaching out. Will be in touch shortly!</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

const contactStyle: CSSProperties = {
  flexDirection: "column",
  textAlign: "center",
  maxWidth: "1500px",
  margin: "0 auto",
  padding: "100px 0",
};

const contantRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
};
