"use client";

import { services } from "@/constants/data";
import { CSSProperties } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Services = () => {
  // Services items used as prop in the serviceItem section
  const serviceItemLists = [
    {
      id: "1",
      title: "Art Paintings",
      description:
        "Experience your dreams come to life in a personalized portrait. Let the artist capture your unique dreamworld in a stunning painting.",
      icon: <i className="fa-solid fa-brush" style={iconStyle}></i>,
    },
  ];

  const serviceItemLists2 = [
    {
      id: "2",
      title: "Art Workshops",
      description:
        "Explore the power of your subconscious through art! Join our workshops to learn how to translate your dreams into beautiful paintings.",
      icon: <i className="fa-solid fa-paintbrush" style={iconStyle}></i>,
    },
  ];

  const serviceItemLists3 = [
    {
      id: "3",
      title: "Art Exhibitions",
      description:
        "featuring mesmerizing dream-inspired artwork. Experience the magic on display and bring a piece of the dreamworld into your reality.",
      icon: <i className="fa-solid fa-paint-roller" style={iconStyle}></i>,
    },
  ];

  const serviceItemLists4 = [
    {
      id: "4",
      title: "Art Merchandise",
      description:
        "Surround yourself with the magic of dreams! Shop our collection of prints, posters, and clothing featuring dream-inspired artwork",
      icon: <i className="fa-solid fa-palette" style={iconStyle}></i>,
    },
  ];
  return (
    <>
      {services.map((service, i) => (
        <div key={service.id} style={serviceStyle}>
          {/* Service top */}
          <motion.div
            transition={{ type: "spring", damping: 50, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-[1500px] my-0 mx-auto"
          >
            {/* Servive H1 */}
            <h1 className="text-[4rem] text-black mb-[10px] uppercase text-center font-light md:text-[3rem] lg:text-[2.5rem]">
              Serv<span className="text-rose-700">i</span>ces
            </h1>
            <p className="text-justify text-lg">{service.content}</p>
          </motion.div>
          {/* service buttom */}
          <motion.div
            transition={{ type: "spring", damping: 50, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 }}
            animate={{ opacity: 1, x: 0 }}
            style={serviceBottomStyle}
          >
            {/* service Items */}
            {serviceItemLists.map((serviceItemList, i) => (
              <div
                key={serviceItemList.id}
                className="flex basis-[80%] items-start justify-center flex-col p-[30px] rounded-[10px] my-[10px] mx-[5%] relative z-[1] overflow-hidden bg-[url('../assets/dreamImage.jpg')] bg-cover bg-center md:basis-[45%] md:m-[2.5%] lg:basis-[22%] lg:m-[1.5%] xl:basis-[22%] xl:m-[1.5%] after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[100%] after:opacity-[.3] after:z-[1] after:content-[''] after:bg-gradient-to-r from-gray-800 to-gray-900"
              >
                <div>{serviceItemList.icon}</div>
                <h2 style={serviveItemH2Style}>{serviceItemList.title}</h2>
                <p style={serviveItemParagraphStyle}>
                  {serviceItemList.description}
                </p>
              </div>
            ))}
            {serviceItemLists2.map((serviceItemList2, i) => (
              <div
                key={serviceItemList2.id}
                className="flex basis-[80%] items-start justify-center flex-col p-[30px] rounded-[10px] my-[10px] mx-[5%] relative z-[1] overflow-hidden bg-[url('../assets/artWorkshopImage.jpg')] bg-cover bg-center md:basis-[45%] md:m-[2.5%] lg:basis-[22%] lg:m-[1.5%] xl:basis-[22%] xl:m-[1.5%] after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[100%] after:opacity-[.3] after:z-[1] after:content-[''] after:bg-gradient-to-r from-gray-800 to-gray-900"
              >
                <div>{serviceItemList2.icon}</div>
                <h2 style={serviveItemH2Style}>{serviceItemList2.title}</h2>
                <p style={serviveItemParagraphStyle}>
                  {serviceItemList2.description}
                </p>
              </div>
            ))}
            {serviceItemLists3.map((serviceItemList3, i) => (
              <div
                key={serviceItemList3.id}
                className="flex basis-[80%] items-start justify-center flex-col p-[30px] rounded-[10px] my-[10px] mx-[5%] relative z-[1] overflow-hidden bg-[url('../assets/exhibitionImage.jpg')] bg-cover bg-center md:basis-[45%] md:m-[2.5%] lg:basis-[22%] lg:m-[1.5%] xl:basis-[22%] xl:m-[1.5%] after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[100%] after:opacity-[.3] after:z-[1] after:content-[''] after:bg-gradient-to-r from-gray-800 to-gray-900"
              >
                <div>{serviceItemList3.icon}</div>
                <h2 style={serviveItemH2Style}>{serviceItemList3.title}</h2>
                <p style={serviveItemParagraphStyle}>
                  {serviceItemList3.description}
                </p>
              </div>
            ))}
            {serviceItemLists4.map((serviceItemList4, i) => (
              <div
                key={serviceItemList4.id}
                className="flex basis-[80%] items-start justify-center flex-col p-[30px] rounded-[10px] my-[10px] mx-[5%] relative z-[1] overflow-hidden bg-[url('../assets/merchandiseImage.jpg')] bg-cover bg-center md:basis-[45%] md:m-[2.5%] lg:basis-[22%] lg:m-[1.5%] xl:basis-[22%] xl:m-[1.5%] after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[100%] after:opacity-[.3] after:z-[1] after:content-[''] after:bg-gradient-to-r from-gray-800 to-gray-900"
              >
                <div>{serviceItemList4.icon}</div>
                <h2 style={serviveItemH2Style}>{serviceItemList4.title}</h2>
                <p style={serviveItemParagraphStyle}>
                  {serviceItemList4.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Services;

// Styling for the H2, P, and Service Section
const serviceStyle: CSSProperties = {
  flexDirection: "column",
  textAlign: "center",
  maxWidth: "1500px",
  margin: "0 auto",
  padding: "100px 0",
};

const serviceBottomStyle: CSSProperties = {
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "40px",
};

const serviveItemH2Style: CSSProperties = {
  fontSize: "1.7rem",
  color: "white",
  marginBottom: "20px",
  textTransform: "uppercase",
};

const serviveItemParagraphStyle: CSSProperties = {
  color: "white",
  textAlign: "justify",
  justifyContent: "center",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "20px",
};

const iconStyle: CSSProperties = {
  height: "50px",
  width: "50px",
  marginBottom: "10px",
  fontSize: "25px",
  color: "white",
};
