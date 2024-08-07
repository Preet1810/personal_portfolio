import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { SiSpeedtest } from 'react-icons/si';
import edzer from "../assets/edzer.png"
import aqua from "../assets/aqua.png"
import home from "../assets/home.png"



export const projectExperience=[
  {
    name: "Dynamic Websites",
    projects: "I have the technical skills necessary to implement dynamic functionality, such as by using JavaScript and server-side technologies like Node.js.",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Responsive Design",
    projects: "This means that I am able to design websites that adjust to the screen size and resolution of the device being used to view them.",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Fast",
    projects: "Performance is a top priority for me as a developer, and I make sure to prioritize website speed and optimization in my work.",
    icon: SiSpeedtest,
    bg: "#F26440",
  },
];

export const WhatDoIHelp=[
  "As a MERN developer with 2 years of professional experience, I have a strong understanding of the technologies used in web development including NextJs, React, Node.js, Express.js and MongoDB. ",
  "I am able to design and develop full-stack web applications, and I am well-versed in both front-end and back-end development. I also have experience with responsive design, website optimization, and other techniques to create high-performance websites.",
  "I can help you bring your web development projects to life and deliver high-quality and efficient solutions that meets your business needs."
];

export const workExp=[
  {
    place: "Aqua Global Systems",
    tenure: "Feb 2024 - Present",
    role: "Full Stack MERN Developer",
    detail:
      "In my role as a Full Stack Developer at Aqua Global Systems, I am responsible for successfully executing projects within stipulated timelines. My engagement encompasses both backend and frontend development, leveraging a range of technologies to achieve comprehensive solutions.",
  },
  {
    place: "Brihat Infotech",
    tenure: "Jul 2023 - Jan 2024",
    role: "Full Stack MERN Developer",
    detail:
      "In my role as a Full Stack Developer at Brihat Infotech, I was responsible for successfully executing projects within stipulated timelines. My engagement encompasses both backend and frontend development, leveraging a range of technologies to achieve comprehensive solutions.",
  },
  {
    place: "Mobishastra Technologies LLC",
    tenure: "June 2021 - Jan 2022",
    role: "Operations Executive",
    detail:
      "As an operations executive responsible for managing a small team in Ladnun, Rajasthan. Duties include: training new team members, white box testing, addressing bugs and enhancements, Identifying and addressing operational issues, implementing policies and procedures to improve productivity and performance. Overall goal is to ensure team efficiency and customer satisfaction. ",
  },
  {
    place: "Comptronic Solutions",
    tenure: "Aug 2019 - Dec 2019",
    role: "Customer Care Executive",
    detail:
      "I was responsible for handling customer inquiries and complaints, providing information about products and services, resolving customer issues, and ensuring customer satisfaction.",
  },
];


export const eduExp=[
  {
    place: "Bachelors's in Computer Application",
    tenure: "2020 - 2023",
    role: "Indira Gandhi National Open University",
    detail:
      "Completing my BCA from IGNOU, New Delhi, propelled me towards excellence. The comprehensive curriculum, expert faculty, and practical approach provided a strong foundation in computer applications. Real-world projects enhanced my problem-solving abilities, while a diverse student community fostered collaborative learning. ",
  },
  {
    place: "Network Administrator Diploma",
    tenure: "2019 - 2021",
    role: "Jetking Vikaspuri Learning Centre",
    detail:
      "My diploma in network administration through Jetking has been the backbone of my journey into the tech field. It provided me with a strong foundation and comprehensive knowledge of network administration, enabling me to learn and grow in the field.",
  },
  {
    place: "Secondary Schooling",
    tenure: "2019",
    role: "Mamta Modern Sr. Sec. School",
    detail:
      "My experience at Mamta Modern Sr. Sec School was filled with academic and social growth. Opting for humanities in 11th, I scored 87% in 12th boards. The curriculum challenged me to think critically, while forging lasting connections with my peers. This experience has given me the confidence to pursue my future goals.",
  },
];


export const comments=[
  {
    name: "Parvinder Singh",
    post: "Confectionery store Owner",
    comment:
      "I highly recommend Preetpal singh for their exceptional work creating a landing page for my confectionery store. The page is modern, visually appealing, and effectively showcases our products.",
    img: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644534/portfolio/cakepointowner_egq2lf.png",
  },
  {
    name: "Swadha Pahuja",
    post: "CMA Student",
    comment:
      "Working with Preetpal Singh to create my portfolio website was a pleasure. His exceptional talent in web development resulted in a modern and interactive page that stood out from the competition. I highly recommend Preetpal to anyone in need of a skilled and reliable web developer.",
    img: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644540/portfolio/swadha_ecyh2f.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I hired Preetpal Singh to create a blog website, and he did an excellent job. He was professional, reliable, and went above and beyond to ensure the website met my needs. The final product was visually appealing and user-friendly. I highly recommend Preetpal Singh as a skilled web developer.",
    img: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1679480545/portfolio/swadha_ar3zx2.png",
  },
];

export const sliderSettings={
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const imageSources=[
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644540/portfolio/social_b9bua4.png",
  //   alt: 'Memories App',
  //   href: "https://memories-social-mediaa.netlify.app",
  //   tag: "ALL,FULLSTACK",
  //   github: "https://github.com/Preet1810/ModernSocialMediaApp"
  // }, {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677645164/portfolio/Home_pmzunf.png",
  //   alt: 'MERN dashboard',
  //   href: "https://admindashboard66.netlify.app",
  //   tag: "ALL,FULLSTACK",
  //   github: "https://github.com/Preet1810/Admin_Dashboard"
  // },
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1683273001/portfolio/Home_1_moihzl.png",
  //   alt: 'Indian ID OCR Script',
  //   href: "https://id-ocr-script-preet.netlify.app/",
  //   tag: "ALL,FULLSTACK",
  //   github: "https://github.com/Preet1810/PreetpalSingh-ID-OCR-SCRIPT"
  // },
  {
    loc: home,
    alt: 'Home.llc',
    href: "https://www.hoom.llc/home-ai",
    tag: "ALL,FULLSTACK",
  },
  {
    loc: aqua,
    alt: 'Aqua Globals Systems',
    href: "https://www.aquaglobalsystems.com/",
    tag: "ALL,FULLSTACK",
  },
  {
    loc: edzer,
    alt: 'Edzer.org',
    href: "https://Edzer.org",
    tag: "ALL,FULLSTACK",
  },
  {
    loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644535/portfolio/cakepoint_pqki05.png",
    alt: 'cakeshop',
    href: "https://cakepointnet.netlify.app",
    tag: "ALL,FRONTEND",
  },
  {
    loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644540/portfolio/social_b9bua4.png",
    alt: 'Memories App',
    href: "https://memories-social-mediaa.netlify.app",
    tag: "ALL,FULLSTACK",
    github: "https://github.com/Preet1810/ModernSocialMediaApp"
  },

  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644536/portfolio/hoobank_jtiljd.png",
  //   alt: 'hoobank',
  //   href: "https://devhoobank.netlify.app/",
  //   tag: "ALL,FRONTEND",
  //   github: "https://github.com/Preet1810/bank_reactApp"

  // },
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644539/portfolio/gericht_cn1oeu.png",
  //   alt: 'restaurent',
  //   href: "https://restaurantgericht1.netlify.app/",
  //   tag: "ALL,FRONTEND",
  //   github: "https://github.com/Preet1810/restaurant_react"

  // },
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677644539/portfolio/gpt3_j5vdgf.png",
  //   alt: 'blog site',
  //   href: "https://gpt3blog.netlify.app/",
  //   tag: "ALL,FRONTEND",
  //   github: "https://github.com/Preet1810/gpt_3"

  // },
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677645648/portfolio/Untitled_design_14_lpf3vz.png",
  //   alt: 'b2b site',
  //   href: "https://snapbuy.cyclic.app/",
  //   tag: "ALL,FULLSTACK",
  //   github: "https://github.com/Preet1810/snapBuy"

  // },
  // {
  //   loc: "https://res.cloudinary.com/dwh4llt0c/image/upload/v1677645792/portfolio/Untitled_design_15_hcwum8.png",
  //   alt: 'yelpcamp',
  //   href: "http://yelpcamppp.cyclic.app/",
  //   tag: "ALL,FULLSTACK",
  //   github: "https://github.com/Preet1810/yelpCamp"
  // },

]
