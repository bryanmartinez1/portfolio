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
import cpeLab from "./Images/cpe_lab.png";
import eeLab1 from "./Images/ee_lab_1.png";
import eeLab2 from "./Images/ee_lab_2.png";
import digital_integrated_circuits from "./Images/digital_integrated_circuit.png";
import os from "./Images/operating_systems.png";
import comp_org from "./Images/computer_organization.png";
import Accordion from "./Components/Accordion";
import machineLearning from "./Images/machine_learning.png";
import numericalAnalysis from "./Images/numericalAnalysis.png";
import youtube from "./Images/youtube.png";
import tiktok from "./Images/tiktok.png";
import united from "./Images/united.png";
import arduino from "./Images/arduino.png";
import rust from "./Images/rust.png";
import algorithmsDS from "./Images/algorithm.png";
import comp_vision from "./Images/comp_vision.png";
import aew from "./Images/AEW.png";
import embeddedSystems from "./Images/embedded.png";
import complier from "./Images/complier.png";
import dataVisual from "./Images/data_visualization.png";
import discord from "./Images/discord_bot.png";
import games from "./Images/games.png";
import kaggle from "./Images/kaggle.png";
import mta from "./Images/MTA.png";
import scraper from "./Images/scraper.png";
import wwe from "./Images/wwe.png";

const projectsJSON = [
  {
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
      {
        name: "Zahn Venture Incubator Competition Information",
        href: "https://www.ccny.cuny.edu/zahn/venture-incubator-and-competition",
      },
      {
        name: "Create Competetion Information",
        href: "https://www.nysid.org/create/guidelines/",
      },
    ],
    date: "August 2023 - In Progress",
    type: "School",
    image: inclusifyImage,
    description: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Venture Competition",
      "Apart of the Create Competition",
      "Inclusify is a web application focused on empowering autistic individuals and other disabled job seekers. Using technologies like REACT for the front-end, and FireBase and AmazonS3 for back-end, and Figma for design, our platform will empower users to connect, share experiences, access various resources, and build their non traditional video resumes with accessible features, fostering a sense of belonging and inclusivity within the autism community and beyond.",
      "Users will be able to record and create video resumes, interact and contact other users, and view other users' video resumes and profiles",
    ],
    toolsList: ["Javascript", "React", "Firebase", "AmazonS3"],
  },
  {
    name: "WrestleKnow",
    toolsList: ["Javascript", "React", "Parse Back4App", "Firebase"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/WrestleKnow" },
    ],
    date: "2023 -  2024",
    type: "Personal",
    image: wrestleknowImage,
    description: [
      "WrestleKnow is a pro wrestling encyclopedia and social media web app.",
      "Users can search through a variety of pro wrestling related categories, sign up and login, and publicly and privately converse with other users.",
      "Originally created with Back4App as a backend, is currently being migrated to use Firebase as the backend",
    ],
  },
  {
    name: "Parsetagram",
    toolsList: ["Java", "Parse Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Instagram" },
    ],
    date: "2022",
    type: "School",
    image: instagramImage,
    description: [
      "Individual Project created during my time at the CodePath Android App course in where this app replicates many features that instgram has, using Back4App as the backend",
    ],
  },
  {
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
    description: [
      "Group Project for CSC 322",
      "Lasso is an e-commerce web app where users can sell or bid for items",
      "Team consisted of 5 memebers, in where we used the agile method to aid us in communicationg and assinging tasks to create the project",
    ],
  },
  {
    name: "Atlassian Software Engineer Intern",
    toolsList: ["Javascript", "Typescript", "Python"],
    link: [],
    date: "May 2023 - August 2023",
    type: "Internship",
    image: atlassianImage,
    description: [
      "12 week internship experince with Atlassian",
      "Adapted a legacy feature to new visualizations and further adapted for more visualization types. Provided additional features and changes to visualization types and dashboard.",
      "Completed development process, including attended stand ups, design reviews, wrote spikes, conversed with designers to provide better user experience",
    ],
  },
  {
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
    description: [
      "Group Project for CSC 59866 & CSC 59867",
      "Apart of Zahn Competition and CREATE Competition",
    ],
  },
  {
    name: "Rank",
    toolsList: ["Javascript", "React"],
    link: [{ name: "GitHub", href: "https://github.com/bryanmartinez1/rank" }],
    date: "May 2023 - December 2023",
    type: "Personal",
    image: rankImage,
    description: [
      "Perosdnal project",
      "User can calculate their GPA, course grade, and QPA",
    ],
  },
  {
    name: "My Ship Sails",
    toolsList: ["C++", "Python"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2019",
    type: "School",
    image: myshipsailsImage,
    description: [
      "Individaul school project fo CSC 103 (Intro to C++)",
      "Card game where users goes up against 3 CPUs in a card game",
      "The way top win the game is by ensuring that all the cards in your hand have the same suits",
      "The CPUs aim to win before the user or the other CPUS",
    ],
  },
  {
    name: "GPA Calculator",
    toolsList: ["Java", "Back4App"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2022",
    type: "School",
    image: gpaCalculatorImage,
    description: [
      "Group Project for CodePath Android App Course",
      "Team concisted of 3 memeber in total",
      "Andoid App in where user can calculate their grade for a course or thier GPA",
      "Using Back4App as a backend, users can access their account from any device with this android app and thier login info",
    ],
  },
  {
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
    description: [
      "Individual Project for CodePath Android App Course",
      "Using Twitter API, an android app, where users can access thier twitter account and tweet from it",
    ],
  },
  {
    name: "Flixster",
    toolsList: ["Java", "Movie Database API"],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Flixster" },
    ],
    date: "2022",
    type: "School",
    image: flixsterImage,
    description: [
      "Individual Project for CodePath Android App Course",
      "Using Movie Database API, users can use this android app to see more information on movies found on the database",
    ],
  },
  {
    name: "CCNY Major Related Courses",
    toolsList: [
      "C++",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "Assembly",
      "Mips",
      "VHDL",
      "MatLab",
      "Electric",
      "LTSpice",
      "Firebase",
      "Back4App",
    ],
    link: [{ name: "CCNY Website", href: "https://www.ccny.cuny.edu/" }],
    date: "July 2019 - May 2024",
    type: "School",
    image: ccnyImage,
    description: [
      <Accordion
        innerheading={true}
        title="Computer Science"
        isOpen={true}
        content={
          <ul>
            <li>CSC 103 - Introduction to Computer Programming</li>
            <li>CSC 104 - Discrete Structures 1</li>
            <li>CSC 212 - Data Structures 1</li>
            <li>CSC 221 - Software Design Lab</li>
            <li>CSC 220 - Algorithms</li>
            <li>CSC 210 - Assembly Programming</li>
            <li>CSC 332 - Operating Systems</li>
            <li>CSC 322 - Software Engineering</li>
            <li>CSC 342 - Computer Organization</li>
            <li>CSC 343 - Computer Organization Lab</li>
            <li>CSC 301 - Scientific Programming</li>
            <li>CSC 447 - Introduction to Machine Learning</li>
            <li>CSC 59866 - Senior Project 1</li>
            <li>CSC 59867 - Senior Project 2 (In Progress)</li>
            <li>CodePath - Android Development</li>
            <br />
          </ul>
        }
      />,
      <Accordion
        innerheading={true}
        title="Electrical Engineering"
        isOpen={true}
        content={
          <ul>
            <li>ENGR 101 - Engineering Design</li>
            <li>ENGR 103 - Computer Aided Analysis Engineers</li>
            <li>ENGR 204 - Electrical Circuits</li>
            <li>ENGR 276 - Engineering Economics</li>
            <li>EE 205 - Linear Systems Analysis 1</li>
            <li>EE 306 - Linear Systems Analysis 2</li>
            <li>EE 221 - EE Lab 1</li>
            <li>EE 322 - EE Lab 2</li>
            <li>EE 425 - Computer Engineering Lab</li>
            <li>EE 210 - Switching Systems</li>
            <li>EE 311 - Probability and Statistics</li>
            <li>EE 241 - Electronics 1</li>
            <li>EE 312 - Communications Theory</li>
            <li>EE 457 - Digital Integrated Circuits</li>
            <li>EE 330 - Electromagnetics (In Progress)</li>
            <br />
          </ul>
        }
      />,
    ],
  },
  {
    name: "Atlassian Software Engineer New Grad",
    toolsList: ["TBD"],
    link: [],
    date: "Starting July 2024",
    type: "Work",
    image: atlassianImage,
    description: ["Starting July 2024"],
  },
  {
    name: "Personal Portfolio",
    toolsList: ["JavaScript", "React", "Firebase"],
    link: [
      { name: "Link 1", href: "https://bryanmartinezportfolio.web.app/" },
      {
        name: "Link 2",
        href: "https://bryanmartinezportfolio.firebaseapp.com/",
      },
    ],
    date: "January 2024",
    type: "Personal",
    image: portfolioImage,
    description: ["Personal Portfolio using Firebase to host the site"],
  },
  {
    name: "Electrical Engineering Lab 1",
    toolsList: ["MutliSim", "LabView", "MatLab"],
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
    image: eeLab1,
    description: [
      "CCNY Course Description: Experiments and design problems on material drawn from the electrical engineering curriculum. Test and measurement instruments, Virtual instruments and computer instrumentation, Electric and electronic circuits. Transient and frequency response, Logic circuits, Discrete circuits, Operational amplifiers",
    ],
  },
  {
    name: "Electrical Engineering Lab 2",
    toolsList: ["MutliSim", "LabView", "MatLab"],
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
    image: eeLab2,
    description: [
      "CCNY Course Description: Experiments and design problems on material drawn from the electrical engineering curriculum. Test and measurement instruments, Virtual instruments and computer instrumentation, Electric and electronic circuits. Transient and frequency response, Logic circuits, Discrete circuits, Operational amplifiers",
    ],
  },
  {
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

    description: [
      "Introduction to the operation and applications of microcomputers and design experiments in computer interface engineering utilizing a microprocessor based computer. Design projects include computer input-output device selection, program interrupt, on-line control, direct memory access, and circular input-output buffer",
    ],
    type: "School",
    image: cpeLab,
  },
  {
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
    image: digital_integrated_circuits,
    description: [
      "Design of logic circuits; TTL, MOS, ECL. Design of flip-flops and memories at the transistor level. Design of analog-to-digital and digital-to-analog converters, sample and hold circuits, and timing circuits. Interconnecting logic gates using transmission lines.",
    ],
  },
  {
    name: "Operating Systems",
    toolsList: ["C"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Lab 1", href: "https://www.google.com/" },
    ],
    date: "Spring 2022",
    type: "School",
    image: os,
    description: [
      "Overview of computer organization. Interrupts. Operating systems objectives and functions. Hardware protection mechanisms, dual mode operation. System calls. The evolution of operating systems. Process representation and control. Uniprocessor scheduling. Process synchronization: critical section problem, synchronization mechanisms, algorithms, language constructs, classical synchronization problems: issues of safety, liveness, and fairness. Deadlocks. Memory management and virtual memory. File management. I/O management and disk scheduling.",
    ],
  },
  {
    name: "Computer Organization",
    toolsList: ["Mips", "VHDL", "C++"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Project 1", href: "https://www.google.com/" },
      { name: "Project 2", href: "https://www.google.com/" },
      { name: "Project 3", href: "https://www.google.com/" },
    ],
    date: "Spring 2023",
    type: "School",
    image: comp_org,
    description: [
      "This course provides computer science and computer engineering students with an in depth look at computer architecture and the hardware/software interface. The major topics are: computer abstractions and technology; the role of performance and measuring performance; SPEC. computer arithmetic; machine language: a comparative analysis of instruction sets of current processors using debuggers, simulators and by the partial reverse engineering of executables. The processor: data path and control; RISC versus CISC; design, implementation (using VHDL), and verification (in simulation) of a simplified RISC processor using CAD tools. Enhancing performance with pipelining. Memory hierarchy, cache, virtual memory, performance issues. interfacing processors and peripherals; PCI chipset. Overview of multiprocessors, grid computing",
    ],
  },
  {
    name: "Intro to Machine Learning",
    toolsList: ["Python"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Final Project", href: "https://www.google.com/" },
    ],
    date: "Fall 2023",
    type: "School",
    image: machineLearning,
    description: [
      "This course provides computer science and computer engineering students with an in depth look at computer architecture and the hardware/software interface. The major topics are: computer abstractions and technology; the role of performance and measuring performance; SPEC. computer arithmetic; machine language: a comparative analysis of instruction sets of current processors using debuggers, simulators and by the partial reverse engineering of executables. The processor: data path and control; RISC versus CISC; design, implementation (using VHDL), and verification (in simulation) of a simplified RISC processor using CAD tools. Enhancing performance with pipelining. Memory hierarchy, cache, virtual memory, performance issues. interfacing processors and peripherals; PCI chipset. Overview of multiprocessors, grid computing",
    ],
  },
  {
    name: "Numerical Analysis",
    toolsList: ["Python"],
    link: [
      {
        name: "CCNY Website",
        href: "https://www.ccny.cuny.edu/",
      },
      { name: "Final Project", href: "https://www.google.com/" },
    ],
    date: "Fall 2023",
    type: "School",
    image: numericalAnalysis,
    description: [
      "This course provides computer science and computer engineering students with an in depth look at computer architecture and the hardware/software interface. The major topics are: computer abstractions and technology; the role of performance and measuring performance; SPEC. computer arithmetic; machine language: a comparative analysis of instruction sets of current processors using debuggers, simulators and by the partial reverse engineering of executables. The processor: data path and control; RISC versus CISC; design, implementation (using VHDL), and verification (in simulation) of a simplified RISC processor using CAD tools. Enhancing performance with pipelining. Memory hierarchy, cache, virtual memory, performance issues. interfacing processors and peripherals; PCI chipset. Overview of multiprocessors, grid computing",
    ],
  },
  {
    name: "Youtube Channel",
    toolsList: [],
    link: [
      {
        name: "Channel 1",
        href: "https://www.youtube.com/",
      },
      {
        name: "Channel 2",
        href: "https://www.youtube.com/",
      },
      {
        name: "Channel 3",
        href: "https://www.youtube.com/",
      },
    ],
    date: "July 2024",
    type: "Personal",
    image: youtube,
    description: ["Youtube Channel"],
  },
  {
    name: "Tik Tok",
    toolsList: [],
    link: [
      {
        name: "Channel 1",
        href: "https://www.youtube.com/",
      },
      {
        name: "Channel 2",
        href: "https://www.youtube.com/",
      },
      {
        name: "Channel 3",
        href: "https://www.youtube.com/",
      },
    ],
    date: "July 2024",
    type: "Personal",
    image: tiktok,
    description: ["Tik Tok"],
  },
  {
    name: "United",
    toolsList: [],
    link: [
      {
        name: "Channel 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "July 2024",
    type: "Personal",
    image: united,
    description: ["United"],
  },
  {
    name: "Ardino",
    toolsList: [],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: arduino,
    description: ["United"],
  },
  {
    name: "Rust",
    toolsList: ["rust"],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: rust,
    description: ["United"],
  },
  {
    name: "Algorithms and Data Structures",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: algorithmsDS,
    description: ["Algorithms and Data Structures"],
  },
  {
    name: "Computer Vision",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: comp_vision,
    description: ["Computer Vision"],
  },
  {
    name: "Embedded Systems",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: embeddedSystems,
    description: ["Computer Vision"],
  },
  {
    name: "Complier",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: complier,
    description: ["Computer Vision"],
  },
  {
    name: "Data Visualizations",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: dataVisual,
    description: ["Computer Vision"],
  },
  {
    name: "Discord Bot",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: discord,
    description: ["Computer Vision"],
  },
  {
    name: "Games",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: games,
    description: ["Computer Vision"],
  },
  {
    name: "AEW",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: aew,
    description: ["Computer Vision"],
  },
  {
    name: "WWE",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: wwe,
    description: ["Computer Vision"],
  },
  {
    name: "Kaggle",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: kaggle,
    description: ["Computer Vision"],
  },
  {
    name: "MTA",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: mta,
    description: ["Computer Vision"],
  },
  {
    name: "Web Scraper",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: scraper,
    description: ["Computer Vision"],
  },
];

export default projectsJSON;
