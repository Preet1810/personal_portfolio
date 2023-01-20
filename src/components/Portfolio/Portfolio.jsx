import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { imageSources } from "../../utils/data";
const Portfolio=() => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            {/* <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p> */}
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          {imageSources.map((src, index) => (
            <a href={src.href} key={index} target="_blank">
              <motion.img variants={fadeIn("up", "tween", (index/10)+.5, .6)} src={src.loc} alt={src.alt} />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
