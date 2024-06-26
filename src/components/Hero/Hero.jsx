import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import mypic from "../../assets/mypic2.png"
const Hero=() => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="" style={{ fontSize: '30px', fontWeight: '700', lineHeight: '1.5' }} variants={fadeIn("right", "tween", 0.2, 1)}>
            Transforming Concepts into Reality
            <br />
            Expert Full Stack MERN Developer
            <br />
            Preetpal Singh
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            I am proficient in using Nextjs, React, NodeJS,
            <br />
            MongoDB and ExpressJS to build web applications.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src={mypic} alt="" />
        </motion.div>

        <a className={css.email} href="mailto:Preetpalsingh1239@gmail.com">
          Preetpalsingh1239@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="https://res.cloudinary.com/dwh4llt0c/image/upload/v1677653712/portfolio/certificateweb_rypiov.png" alt="" />
            <span>CERTIFIED PROFESIONAL</span>
            <span>WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
