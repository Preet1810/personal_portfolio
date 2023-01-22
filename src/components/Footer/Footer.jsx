import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi'

const Footer=() => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:preetpalsingh1239@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            {/* <span className="secondaryText">Information</span> */}
            {/* <p>145 New York, FL 5467, USA</p> */}
          </div>
          <ul className={css.menu}>
            <li><a href="#experties">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#work">Experience</a></li>
            <li><a href="#people">Testimonials</a></li>
          </ul>
        </div>

      </motion.div>
      <motion.div variants={footerVariants}>

        <hr style={{ border: "1px solid #000" }} />
        <div className={css.footer}>
          <ul>
            <a href="https://www.instagram.com/_preet.1810/" target="_blank"><li><BsInstagram /></li></a>
            <a href="https://github.com/Preet1810" target="_blank"><li><BsGithub /></li></a>
            <a href="https://twitter.com/preetsi06069596" target="_blank"><li><FiTwitter /></li></a>
            <a href="https://in.linkedin.com/in/preetpal-singh-563348216" target="_blank"> <li><BsLinkedin /></li></a>
          </ul>
        </div>
      </motion.div>

    </motion.section>

  );

};

export default Footer;
