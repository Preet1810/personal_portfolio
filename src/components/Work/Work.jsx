import React from "react";
import { useState } from 'react';
import { workExp, eduExp } from "../../utils/data";
import css from "./Work.module.scss";
import { motion } from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
const Work=() => {

  const [activeTab, setActiveTab]=useState('Education');
  const [showExperience, setShowExperience]=useState(false);
  const [showEducation, setShowEducation]=useState(true);
  const handleExperienceClick=() => {
    setActiveTab('Experience');
    setShowExperience(true);
    setShowEducation(false);
  }

  const handleEducationClick=() => {
    setActiveTab('Education');
    setShowEducation(true);
    setShowExperience(false);
  }
  return (
    <div>

      {showExperience&&<div>
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`paddings ${css.wrapper}`}>
          <a className="anchor" id="work"></a>

          <div className={`innerWidth flexCenter ${css.container}`}>
            {/* heading */}
            <span className="primaryText yPaddings">Work Experience</span>

            <div className={`flexCenter ${css.exp_btns}`}>
              <button onClick={handleEducationClick} className={activeTab==='Education'? `${css.active}`:''}>Education</button>
              <button onClick={handleExperienceClick} className={activeTab==='Experience'? `${css.active}`:''}>Experience</button>
            </div>


            <div className={`flexCenter ${css.experiences}`}>

              {workExp.map((exp, i) => {
                return (
                  <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                    <div className={css.post}>
                      <h1>{exp.place}</h1>
                      <p>{exp.tenure}</p>
                    </div>
                    <div className={css.role}>
                      <h1>{exp.role}</h1>
                      <p>{exp.detail}</p>
                    </div>
                  </motion.div>
                );
              })}


              <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                <div><div className={css.circle} style={{ background: "#286F6C" }}></div></div>
                <div><div className={css.circle} style={{ background: "#F2704E" }}></div></div>
                <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div>
              </motion.div>

            </div>
          </div>
        </motion.section></div>}

      {showEducation&&<div>
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`paddings ${css.wrapper}`}>
          <a className="anchor" id="work"></a>

          <div className={`innerWidth flexCenter ${css.container}`}>
            {/* heading */}
            <span className="primaryText yPaddings">Education</span>
            <div className={`flexCenter ${css.exp_btns}`}>
              <button onClick={handleEducationClick} className={activeTab==='Education'? `${css.active}`:''} >Education</button>
              <button onClick={handleExperienceClick} className={activeTab==='Experience'? `${css.active}`:''}>Experience</button>
            </div>
            <div className={`flexCenter ${css.experiences}`}>
              {eduExp.map((exp, i) => {
                return (
                  <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                    <div className={css.post}>
                      <h1>{exp.place}</h1>
                      <p>{exp.tenure}</p>
                    </div>
                    <div className={css.role}>
                      <h1>{exp.role}</h1>
                      <p>{exp.detail}</p>
                    </div>
                  </motion.div>
                );
              })}


              <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                <div><div className={css.circle} style={{ background: "#286F6C" }}></div></div>
                <div><div className={css.circle} style={{ background: "#F2704E" }}></div></div>
                <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div>
              </motion.div>

            </div>
          </div>
        </motion.section></div>}
    </div>
  );
};

export default Work;