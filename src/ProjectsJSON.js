import atlassianImage from "./Images/atlassian.png";
import ccnyImage from "./Images/city_college.png";
import flixsterImage from "./Images/flixster.png";
import googleImage from "./Images/google.png";
import gpaCalculatorImage from "./Images/gpa_calculator.png";
import inclusifyImage from "./Images/inclusify.png";
import instagramImage from "./Images/instagram.png";
import lassoImage from "./Images/lasso.png";
import myshipsailsImage from "./Images/myshipsails.png";
import rankImage from "./Images/rank.png";
import twitterImage from "./Images/twitter.png";
import wrestleknowImage from "./Images/wrestleknow.png";
import portfolioImage from "./Images/portfolio.png";
import youtubeImage from "./Images/youtube.png";
import ee221Image from "./Images/ee221.png";
import ee322Image from "./Images/ee322.png";
import ee425Image from "./Images/ee425.png";
import ee457Image from "./Images/ee457.png";

const projectsJSON = [
  {
    index: "0",
    name: "Inclusify",
    link: [
      { name: "GitHub", href: "https://github.com/Team7Inclusify/inclusify" },
      {
        name: "Create Proposal",
        href: "https://docs.google.com/document/d/1JsUXUaGzDjwCitmaVHg-lIlFpIx1TPFVlyDkOW_TQpQ/edit?usp=sharing",
      },
      {
        name: "E Enhanced Proposal",
        href: "https://docs.google.com/document/d/1nnhVTyV56xkD2O8smajQbh6MKuDPWyjy_tDkxZUoBzg/edit?usp=sharing",
      },
    ],
    date: "August 2023 - May 2024",
    type: "School",
    image: inclusifyImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
    toolsList: ["Javascript", "React", "Firebase", "AmazonS3"],
  },
  {
    index: "1",
    name: "WrestleKnow",
    toolsList: ["Javascript", "React", "Parse Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/WrestleKnow" },
    ],
    date: "2023 -  2024",
    type: "Personal",
    image: wrestleknowImage,
    other: ["Personal project"],
  },
  {
    index: "2",
    name: "Parsetagram",
    toolsList: ["Java", "Parse Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Instagram" },
    ],
    date: "2022",
    type: "School",
    image: instagramImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "3",
    name: "Lasso",
    toolsList: ["Javascript", "React", "Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Lasso" },
      {
        name: "Design Report",
        href: "https://docs.google.com/document/d/1QoEHCaegleIGnLiOIReiHruNtKXfug50JazSP9S7SW0/edit?usp=sharing",
      },
    ],
    date: "2022",
    type: "School",
    image: lassoImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "4",
    name: "Atlassian Software Engineer Intern",
    toolsList: ["Javascript", "Typescript", "Python"],
    link: [],
    date: "May 2023 - August 2023",
    type: "Internship",
    image: atlassianImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "5",
    name: "Google STEP Intern",
    toolsList: ["C++", "Rust"],
    link: [
      {
        name: "Fuchsia Google Open Source ",
        href: "https://cs.opensource.google/fuchsia",
      },
    ],
    date: "May 2021 - August 2021",
    type: "Internship",
    image: googleImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "6",
    name: "Rank",
    toolsList: ["Javascript", "React"],
    link: [{ name: "GitHub", href: "https://github.com/bryanmartinez1/rank" }],
    date: "May 2023 - December 2023",
    type: "Personal",
    image: rankImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "7",
    name: "My Ship Sails",
    toolsList: ["C++", "Python"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2019",
    type: "School",
    image: myshipsailsImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "8",
    name: "GPA Calculator",
    toolsList: ["Java", "Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2022",
    type: "School",
    image: gpaCalculatorImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "9",
    name: "SimpleTweet",
    toolsList: ["Java", "Twitter REST API"],
    link: [
      {
        name: "GitHub",
        href: "https://github.com/CodePathFinalProjectAcademics/GPACalculator",
      },
    ],
    date: "2022",
    type: "School",
    image: twitterImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "10",
    name: "Flixster",
    toolsList: ["Java", "Movie Database API"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Flixster" },
    ],
    date: "2022",
    type: "School",
    image: flixsterImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "11",
    name: "CCNY Major Related Courses",
    toolsList: [
      "C++",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "Assembly",
      "MatLab",
      "Electric",
      "LTSpice",
    ],
    link: [{ name: "CCNY Website", href: "https://www.ccny.cuny.edu/" }],
    date: "July 2019 - May 2024",
    type: "School",
    image: ccnyImage,
    other: [
      <h3>Computer Science</h3>,
      "CSC 103 - Introduction to Computer Programming",
      "CSC 104 - Discrete Structures 1",
      "CSC 212 - Data Structures 1",
      "CSC 221 - Software Design Lab",
      "CSC 220 - Algorithms",
      "CSC 210 - Assembly Programming",
      "CSC 332 - Operating Systems",
      "CSC 322 - Software Engineering",
      "CSC 342 - Computer Organization",
      "CSC 343 - Computer Organization Lab",
      "CSC 301 - Scientific Programming (In Progress)",
      "CSC 447 - Introduction to Machine Learning (In Progress)",
      "CSC 59866 - Senior Project 1",
      "CSC 59867 - Senior Project 2 (In Progress)",
      "CodePath - Android Development",
      <h3>Electrical Engineering</h3>,
      "ENGR 101 - Engineering Design",
      "ENGR 103 - Computer Aided Analysis Engineers",
      "ENGR 204 - Electrical Circuits",
      "ENGR 276 - Engineering Economics",
      "EE 205 - Linear Systems Analysis 1",
      "EE 306 - Linear Systems Analysis 2",
      "EE 221 - EE Lab 1",
      "EE 322 - EE Lab 2",
      "EE 425 - Computer Engineering Lab",
      "EE 210 - Switching Systems",
      "EE 311 - Probability and Statistics",
      "EE 241 - Electronics 1",
      "EE 312 - Communications Theory",
      "EE 457 - Digital Integrated Circuits",
      "EE 330 - Electromagnetics (In Progress)",
    ],
  },
  {
    index: "12",
    name: "Atlassian Software Engineer New Grad",
    toolsList: ["TBD"],
    link: [],
    date: "Starting July 2024",
    type: "Work",
    image: atlassianImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "13",
    name: "Personal Portfolio",
    toolsList: ["JavaScript", "React"],
    link: [],
    date: "January 2024",
    type: "Personal",
    image: portfolioImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "14",
    name: "Youtube Channel",
    toolsList: ["TBD"],
    link: [],
    date: "TBD",
    type: "Personal",
    image: youtubeImage,
    other: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    index: "15",
    name: "Electrical Engineering Lab 1",
    toolsList: ["Mutlisim', 'LabView"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      {
        name: "Experiment 2",
        href: "https://docs.google.com/document/d/1_DoLhvex3XdnAdOXemKw0wlhgEwS9c4U/edit?usp=sharing&ouid=101332726879722240762&rtpof=true&sd=true",
      },
      { name: "Experiment 3", href: "https://www.google.com/" },
      { name: "Experiment 4", href: "https://www.google.com/" },
      { name: "Experiment 5", href: "https://www.google.com/" },
      { name: "Experiment 6", href: "https://www.google.com/" },
      { name: "Experiment 7", href: "https://www.google.com/" },
    ],
    date: "Spring 2022",
    type: "School",
    image: ee221Image,
    other: [
      "CCNY Course Description: Experiments and design problems on material drawn from the electrical engineering curriculum. (ENGR 20400, EE 2100, EE 24100, EE34200). Test and measurement instruments, Virtual instruments and computer instrumentation, Electric and electronic circuits. Transient and frequency response, Logic circuits, Discrete circuits, Operational amplifiers",
    ],
  },
  {
    index: "16",
    name: "Electrical Engineering Lab 2",
    toolsList: ["TBD"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Experiment 1", href: "https://www.google.com/" },
      { name: "Experiment 2", href: "https://www.google.com/" },
      { name: "Experiment 3", href: "https://www.google.com/" },
      { name: "Experiment 4", href: "https://www.google.com/" },
      { name: "Experiment 5", href: "https://www.google.com/" },
      { name: "Experiment 6", href: "https://www.google.com/" },
      { name: "Experiment 7", href: "https://www.google.com/" },
    ],
    date: "TBD",
    type: "School",
    image: ee322Image,
    other: [""],
  },
  {
    index: "17",
    name: "Computer Engineering Lab",
    toolsList: ["TBD"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Experiment 1", href: "https://www.google.com/" },
      { name: "Experiment 2", href: "https://www.google.com/" },
      { name: "Experiment 3", href: "https://www.google.com/" },
      { name: "Experiment 4", href: "https://www.google.com/" },
      { name: "Experiment 5", href: "https://www.google.com/" },
      { name: "Experiment 6", href: "https://www.google.com/" },
    ],
    date: "Fall 2023",
    type: "School",
    image: ee425Image,
    other: [
      "Design of logic circuits; TTL, MOS, ECL. Design of flip-flops and memories at the transistor level. Design of analog-to-digital and digital-to-analog converters, sample and hold circuits, and timing circuits. Interconnecting logic gates using transmission lines.",
    ],
  },
  {
    index: "18",
    name: "Digital Integrated Circuits",
    toolsList: ["LTSpice", "Electric"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Project 1", href: "https://www.google.com/" },
      { name: "Project 2", href: "https://www.google.com/" },
      { name: "Project 3", href: "https://www.google.com/" },
    ],
    date: "Fall 2023",
    type: "School",
    image: ee457Image,
    other: [
      "Design of logic circuits; TTL, MOS, ECL. Design of flip-flops and memories at the transistor level. Design of analog-to-digital and digital-to-analog converters, sample and hold circuits, and timing circuits. Interconnecting logic gates using transmission lines.",
    ],
  },
];

export default projectsJSON;
