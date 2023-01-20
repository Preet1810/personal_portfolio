import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { SiSpeedtest } from 'react-icons/si';
import { MdWorkspacesOutline } from "react-icons/md";
import {
  instagram,
  linkedin,
  twitter,
  github
} from "../assets"

export const socialMedia=[
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

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
  "As a MERN developer with 2 years of freelancing experience, I have a strong understanding of the technologies used in web development including MongoDB, Express.js, React, and Node.js. ",
  "I am able to design and develop full-stack web applications, and I am well-versed in both front-end and back-end development. I also have experience with responsive design, website optimization, and other techniques to create high-performance websites.",
  "I can help you bring your web development projects to life and deliver high-quality and efficient solutions that meets your business needs."
];

export const workExp=[
  {
    place: "Comptronic Solutions",
    tenure: "Aug 2019 - Dec 2019 ",
    role: "Customer Care Executive",
    detail:
      "I was responsible for handling customer inquiries and complaints, providing information about products and services, resolving customer issues, and ensuring customer satisfaction. ",
  },
  {
    place: "Mobishastra Technologies LLC",
    tenure: "June 2021 - Jan 2022",
    role: "Operations Executive",
    detail:
      "As an operations executive responsible for managing a small team in Ladnun, Rajasthan. Duties include: training new team members, white box testing, addressing bugs and enhancements,Identifying and addressing operational issues, implementing policies and procedures to improve productivity and performance. Overall goal is to ensure team efficiency and customer satisfaction. ",
  },
  {
    place: "Self Employed Freelancer",
    tenure: "Jan 2022 - Present",
    role: "Freelancer MERN developer",
    detail:
      "As a MERN developer with 2 years of freelancing experience, I have a strong understanding of the technologies used in web development including MongoDB, Express.js, React, and Node.js.",
  },
];

export const eduExp=[
  {
    place: "Secondary Schooling",
    tenure: "Aug 2014 - Sep 2016",
    role: "Mamta Modern Sr. Sec. School",
    detail:
      "Mamta Modern Sr. Sec School as one of the premier educational institution, aspireto develop young minds to be prepared for the challenges of a dynamic world, to make them compassionate individuals, and to motivate them to effect meaningful changes.",
  },
  {
    place: "Networking Administrator Diploma",
    tenure: "Aug 2014 - Sep 2016",
    role: "Jetking Vikaspuri Learning Centre",
    detail:
      "Jetking has been at the forefront of technological innovation in terms of education since 1947. To help students and prospective engineers capitalize on this technological boom,",
  },
  {
    place: "Bachelors's in Computer Application",
    tenure: "Aug 2014 - Sep 2016",
    role: "Indira Gandhi National Open University",
    detail:
      "Indira Gandhi National Open University (IGNOU), the world’s largest Open University, was established by an Act of Parliament in 1985",
  },
];

export const comments=[
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
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
  {
    loc: "./hoobank.png",
    alt: '3',
    href: "https://devhoobank.netlify.app/"
  },
  {
    loc: "./gericht.png",
    alt: '3',
    href: "https://restaurantgericht1.netlify.app/"
  },
  {
    loc: "./gpt3.png",
    alt: '3',
    href: "https://gpt3blog.netlify.app/"
  },
  {
    loc: "/snapbuy.png",
    alt: '1',
    href: "https://snapbuy.cyclic.app/"
  },
  {
    loc: "./yelpcamp.png",
    alt: '2',
    href: "http://yelpcamppp.cyclic.app/"
  },

]
