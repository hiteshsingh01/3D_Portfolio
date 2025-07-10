import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
  {
    title: "RHCSA (Red Hat Certified System Administrator)",
    description: "Certified by Red Hat for system administration skills.",
  },
  {
    title: "Computer Graphics (NPTEL)",
    description: "Completed NPTEL course in Computer Graphics.",
  },
  {
    title: "MongoDB in Python (MongoDB)",
    description: "Certification for MongoDB with Python integration.",
  },
  {
    title: "UI/UX (Internshala)",
    description: "UI/UX design certification from Internshala.",
  },
];

const achievements = [
  {
    title: "Winner LAN Gaming Tournament",
    description: "Won the LAN Gaming Tournament at Exergie Event organized by Arya College of Engineering and IT.",
  },
  {
    title: "Project Presentation at E-Cell ACEIT",
    description: "Presented a project at the E-Cell ACEIT event.",
  },
];

const Card3DEffect = ({ title, description, index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full shadow-2xl shadow-[#915EFF]/30 hover:scale-105 transition-transform duration-300'
    style={{
      perspective: '1000px',
      transformStyle: 'preserve-3d',
      boxShadow: '0 10px 40px 0 #915EFF55',
    }}
    whileHover={{ rotateY: 10, rotateX: 10, scale: 1.07 }}
    whileTap={{ rotateY: -10, rotateX: -10, scale: 0.97 }}
  >
    <h4 className='text-white font-bold text-[22px]'>{title}</h4>
    <p className='mt-2 text-secondary text-[16px]'>{description}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Certifications</p>
          <h3 className={styles.sectionHeadText}>Certifications</h3>
        </motion.div>
        <div className='mt-10 flex flex-wrap gap-7'>
          {certifications.map((item, idx) => (
            <Card3DEffect key={item.title} index={idx} {...item} />
          ))}
        </div>
        <motion.div variants={textVariant()} className='mt-16'>
          <p className={styles.sectionSubText}>Achievements</p>
          <h3 className={styles.sectionHeadText}>Achievements</h3>
        </motion.div>
        <div className='mt-10 flex flex-wrap gap-7'>
          {achievements.map((item, idx) => (
            <Card3DEffect key={item.title} index={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
