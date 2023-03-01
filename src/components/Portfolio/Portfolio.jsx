import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import { imageSources } from "../../utils/data";

const Portfolio=() => {
  const [activeTab, setActiveTab]=useState('ALL');
  const [key, setKey]=useState(0);

  const handleTabClick=(tab) => {
    setActiveTab(tab);
    setKey(key+1);
  };

  return (
    <motion.section
      key={key}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.top_btns}`}>
          <button className={activeTab==='ALL'? css.active:''} onClick={() => handleTabClick('ALL')}>
            All
          </button>
          <button className={activeTab==='FRONTEND'? css.active:''} onClick={() => handleTabClick('FRONTEND')}>
            Frontend
          </button>
          <button className={activeTab==='FULLSTACK'? css.active:''} onClick={() => handleTabClick('FULLSTACK')}>
            Fullstack
          </button>
        </div>

        <div className={`flexCenter ${css.showCase}`}>
          {imageSources.filter((src) => {
            if (activeTab==='ALL') return true;
            else return src.tag.includes(activeTab);
          }).map((src, index) => (
            <a href={src.href} key={src.alt} target="_blank">
              <motion.img variants={fadeIn("up", "tween", (index/10)+.5, .6)} src={src.loc} alt={src.alt} />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
