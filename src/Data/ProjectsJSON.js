import atlassianImage from "../Images/atlassian.png";
import ccnyImage from "../Images/city_college.png";
import flixsterImage from "../Images/flixster.png";
import googleImage from "../Images/google.png";
import gpaCalculatorImage from "../Images/gpa_calculator.png";
import inclusifyImage from "../Images/inclusify.png";
import instagramImage from "../Images/instagram.png";
import lassoImage from "../Images/lasso.png";
import myshipsailsImage from "../Images/myshipsails.png";
import rankImage from "../Images/rank.png";
import twitterImage from "../Images/twitter.png";
import prowrestleknowImage from "../Images/wrestleknow.png";
import portfolioImage from "../Images/portfolio.png";
import cpeLab from "../Images/cpe_lab.png";
import eeLab1 from "../Images/ee_lab_1.png";
import eeLab2 from "../Images/ee_lab_2.png";
import digital_integrated_circuits from "../Images/digital_integrated_circuit.png";
import os from "../Images/operating_systems.png";
import comp_org from "../Images/computer_organization.png";
import machineLearning from "../Images/machine_learning.png";
import numericalAnalysis from "../Images/numericalAnalysis.png";
import youtube from "../Images/youtube.png";
import tiktok from "../Images/tiktok.png";
import united from "../Images/united.png";
import arduino from "../Images/arduino.png";
import algorithmsDS from "../Images/algorithm.png";
import comp_vision from "../Images/comp_vision.png";
import embeddedSystems from "../Images/embedded.png";
import complier from "../Images/complier.png";
import dataVisual from "../Images/data_visualization.png";
import discord from "../Images/discord_bot.png";
import games from "../Images/games.png";
import mta from "../Images/MTA.png";
import wrestleMania from "../Images/WrestleMania.png";
import marvel from "../Images/marvel.png";
import dc_comics from "../Images/dc_comics.png";
import leetCode from "../Images/leetcode.png";
import math from "../Images/math.png";
import weather from "../Images/weather.png";

const projectsJSON = [
  {
    index: 0,
    name: "Inclusify",
    link: [
      { name: "Inclusify", href: "https://inclusify-b4ca3.web.app/" },
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
      {
        name: "Zahn LinkedIn Winners",
        href: "https://www.linkedin.com/posts/the-zahn-center_2024-venture-competition-winners-activity-7196268111476477952-ymZe?utm_source=share&utm_medium=member_desktop",
      },
    ],
    date: "August 2023 - In Progress",
    type: "School",
    image: inclusifyImage,
    description: [
      "Inclusify is a web application focused on empowering autistic individuals and other disabled job seekers. Using technologies like REACT for the front-end, and FireBase and AmazonS3 for back-end, and Figma for design, our platform will empower users to connect, share experiences, access various resources, and build their non traditional video resumes with accessible features, fostering a sense of belonging and inclusivity within the autism community and beyond.",
      "Group Project for CSC 59866 & CSC 59867",
      `WON Zahn Venture Competition in the Social Impact Track, in where we accquired $15,000 in funding`,
      "Placed in the TOP 5 of the CREATE Competition",
      "Users will be able to record and create video resumes, interact and contact other users, and view other users' video resumes and profiles",
    ],
    toolsList: ["JavaScript", "React", "Firebase", "AmazonS3", "Youtube"],
  },
  {
    index: 1,
    name: "ProWrestleKnow",
    toolsList: [
      "JavaScript",
      "React",
      "Parse Back4App",
      "Firebase",
      "Youtube",
      "Python",
    ],
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/WrestleKnow" },
    ],
    date: "2023 -  2024",
    type: "Personal",
    image: prowrestleknowImage,
    description: [
      "WrestleKnow is a pro wrestling encyclopedia and social media web app.",
      "Users can search through a variety of pro wrestling related categories, sign up and login, and publicly and privately converse with other users.",
      "Originally created with Back4App as a backend, is currently being migrated to use Firebase as the backend",
    ],
    grayBackground: true,
  },
  {
    index: 2,
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
    index: 3,
    name: "Lasso",
    toolsList: ["JavaScript", "React", "Back4App"],
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
    grayBackground: true,
  },
  {
    index: 4,
    name: "Atlassian Software Engineer Intern",
    toolsList: ["JavaScript", "TypeScript", "Python", "Loom", "Slack"],
    link: [{ name: "Atlassian", href: "https://www.atlassian.com/" }],
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
    index: 5,
    name: "Google STEP Intern",
    toolsList: ["C++", "Rust"],
    link: [
      {
        name: "Fuchsia Google Open Source ",
        href: "https://cs.opensource.google/fuchsia",
      },
      {
        name: "Google STEP Info",
        href: "https://buildyourfuture.withgoogle.com/programs/step",
      },
    ],
    date: "May 2021 - August 2021",
    type: "Internship",
    image: googleImage,
    description: [
      "12-week internship program on the open-source Fuchsia Operating System",
      "Developed a debugging tool that would aid developers with Fuchsia Driver Development",
      "Completed entire development process, including writing design docs, implementation, and going through design review",
    ],
  },
  {
    index: 6,
    name: "Rank",
    toolsList: ["JavaScript", "React", "Firebase"],
    link: [{ name: "GitHub", href: "https://github.com/bryanmartinez1/rank" }],
    date: "May 2023 - December 2023",
    type: "Personal",
    image: rankImage,
    description: [
      "Personal project",
      "User can calculate their GPA, course grade, and QPA",
    ],
    grayBackground: true,
  },
  {
    index: 7,
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
    index: 8,
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
    grayBackground: true,
  },
  {
    index: 9,
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
    index: 10,
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
    index: 11,
    name: "Computer Science",
    toolsList: [
      "C++",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "Assembly",
      "Mips",
      "VHDL",
      "Firebase",
      "Back4App",
    ],
    link: [{ name: "CCNY Website", href: "https://www.ccny.cuny.edu/" }],
    date: "July 2019 - May 2024",
    type: "School",
    image: ccnyImage,
    description: [
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
      "CSC 301 - Scientific Programming",
      "CSC 447 - Introduction to Machine Learning",
      "CSC 59866 - Senior Project 1",
      "CSC 59867 - Senior Project 2 (In Progress)",
      "CodePath - Android Development",
    ],
  },
  {
    index: 12,
    name: "Atlassian Software Engineer Full Time",
    toolsList: ["TBD"],
    link: [{ name: "Atlassian", href: "https://www.atlassian.com/" }],
    date: "Starting July 2024",
    type: "Work",
    image: atlassianImage,
    description: ["Starting July 2024"],
  },
  {
    index: 13,
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
    grayBackground: true,
  },
  {
    index: 14,
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
    grayBackground: true,
  },
  {
    index: 15,
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
    index: 16,
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
    index: 17,
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
    grayBackground: true,
  },
  {
    index: 18,
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
    index: 19,
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
    grayBackground: true,
  },
  {
    index: 20,
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
    index: 21,
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
    index: 22,
    name: "Youtube Channel",
    toolsList: ["Youtube"],
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
    index: 23,
    name: "Manchester United 2023/2024 Season",
    toolsList: ["Python", "Google Sheets", "CSV"],
    link: [
      {
        name: "Github",
        href: "https://www.github.com/",
      },
      {
        name: "Datasets",
        href: "https://docs.google.com/spreadsheets/d/1ic7V3gM9wvnCZV3e3RUmMx6ZJN0O2i7NQmCmwOhm_2k/edit?usp=sharing",
      },
      {
        name: "Report",
        href: "https://docs.google.com/document/d/1hMLarKX89Ii64CXy-BjYA4DSjPzLtBI-RBGuylqu5MY/edit?usp=sharing",
      },
    ],
    date: "April 2024",
    type: "Personal",
    image: united,
    description: [
      "An analytical and statistical analysis of Manchester United in the 2023/2024 season",
      "Constructed two datasets, one detailing the sqauds and another detailing stats from all the matches played by United",
    ],
  },
  {
    index: 24,
    name: "Ardino",
    toolsList: ["C++"],
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
    index: 25,
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
    grayBackground: true,
  },
  {
    index: 26,
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
    grayBackground: true,
  },
  {
    index: 27,
    name: "Embedded Systems",
    toolsList: [""],
    link: [
      {
        name: "Project 1",
        href: "https://www.youtube.com/",
      },
      {
        name: "Reddit Ideas",
        href: "https://www.reddit.com/r/embedded/comments/l4mhgo/what_are_some_embedded_hobby_projects_that_look/",
      },
      {
        name: "Youtube Ideas",
        href: "https://www.youtube.com/watch?v=nEYcwBijI2E",
      },
    ],
    date: "",
    type: "Personal",
    image: embeddedSystems,
    description: [
      "Simple power electronics",
      "home automation???",
      "digital clock",
      "weather station",
    ],
    grayBackground: true,
  },
  {
    index: 28,
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
    index: 29,
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
    index: 30,
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
    index: 31,
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
    grayBackground: true,
  },
  {
    index: 32,
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
    grayBackground: true,
  },
  {
    index: 33,
    name: "Electrical Engineering",
    toolsList: ["C++", "Assembly", "MatLab", "Electric", "LTSpice"],
    link: [{ name: "CCNY Website", href: "https://www.ccny.cuny.edu/" }],
    date: "July 2019 - May 2024",
    type: "School",
    image: ccnyImage,
    description: [
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
    index: 34,
    name: "WrestleMania",
    toolsList: ["Sheets", "Python"],
    link: [
      {
        name: "Dataset",
        href: "https://docs.google.com/spreadsheets/d/1agZ2uWGUcWqzN20fYFJfrf34p7OmgneAgG8jp_QrmVs/edit?usp=sharing",
      },
      {
        name: "Report",
        href: "https://docs.google.com/document/d/1rMFuvxRnkt7sM-7mUmoe1YDCcUj6xU3DA3prBW2XsW4/edit?usp=sharing",
      },
      {
        name: "Github",
        href: "https://www.github.com/",
      },
    ],
    date: "In Progress",
    type: "Personal",
    image: wrestleMania,
    description: [
      "In this project we aim to do a variety of objectives, including a statistical analysis, interactive dashboard and timeline, and",
      "Created a WrestleMania Matches Dataset:",
      <ul>
        <li>
          month, day, year, wrestlers, winner, match_type, prize, wm_number,
          main_event, stipulations, minutes, seconds, venue
        </li>
      </ul>,
    ],
    grayBackground: true,
  },
  {
    index: 35,
    name: "Marvel",
    toolsList: ["Marvel API"],
    link: [
      {
        name: "Marvel",
        href: "https://www.marvel.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: marvel,
    description: ["Marvel"],
  },
  {
    index: 36,
    name: "DC Comics",
    toolsList: ["IDK"],
    link: [
      {
        name: "DC Comics",
        href: "https://www.dc.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: dc_comics,
    description: ["DC Comics"],
  },
  {
    index: 37,
    name: "LeetCode",
    toolsList: ["LeetCode", "Python", "C++", "Youtube"],
    link: [
      {
        name: "LeetCode",
        href: "https://www.leetcode.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: leetCode,
    description: ["LeetCode"],
  },
  {
    index: 38,
    name: "Math",
    toolsList: [],
    link: [
      {
        name: "LeetCode",
        href: "https://www.leetcode.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: math,
    description: ["Math"],
  },
  {
    index: 39,
    name: "Weather",
    toolsList: [],
    link: [
      {
        name: "LeetCode",
        href: "https://www.leetcode.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: weather,
    description: ["weather"],
  },
  {
    index: 40,
    name: "TikTok",
    toolsList: ["TikTok"],
    link: [
      {
        name: "TikTok",
        href: "https://www.tiktok.com/",
      },
    ],
    date: "",
    type: "Personal",
    image: tiktok,
    description: ["tiktok"],
    grayBackground: true,
  },
];

export default projectsJSON;
