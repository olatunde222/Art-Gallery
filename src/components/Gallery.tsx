"use client";
import { artworks } from "@/constants/data";
import { CSSProperties } from "react";
import ArtworkCard from "./ArtworkCard";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div>
      <motion.div
        transition={{ type: "spring", damping: 50, mass: 0.99 }}
        initial={{ opacity: 0, x: -2000 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-5"
      >
        {/* Collection H1 */}
        <h1 className="text-[4rem] font-light text-black mb-[50px] uppercase tracking-wider text-center md:text-[3rem] lg:text-[2.5rem]">
          Art <span className="text-rose-700">Collections</span>
        </h1>
      </motion.div>
      {/* Collection group */}
      <motion.div
        transition={{ type: "spring", damping: 50, mass: 0.99 }}
        initial={{ opacity: 0, x: -2000 }}
        animate={{ opacity: 1, x: 0 }}
        style={grouperStyle}
      >
        {/* Collection List */}
        <ul style={ulGroupStyle}>
          {artworks.map((artwork, i) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 50, mass: 0.75 }}
              initial={{ opacity: 0, x: 200 * (i + 1) }}
              animate={{ opacity: 1, x: 0 }}
              key={i}
            >
              <a
                href={`/artwork/${artwork.id}`}
                style={{ textDecoration: "none" }}
              >
                {/* Collection Card */}
                <ArtworkCard
                  title={artwork.title}
                  coverImage={artwork.image}
                  description={artwork.description}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Gallery;

// const titleStyle: CSSProperties = {
//   paddingLeft: "40px",
// };

const grouperStyle: CSSProperties = {
  backgroundColor: "crimson",
  maxWidth: "1500px",
  margin: "0 auto",
  padding: "50px 20px",
  borderRadius: "20px",
};

const ulGroupStyle: CSSProperties = {
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};
