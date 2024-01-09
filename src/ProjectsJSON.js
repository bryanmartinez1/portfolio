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

const projectsJSON = [
  {
    index: "0",
    name: "Inclusify",
    tools: "Javascript, React, AmazonS3, Firebase",
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
    info: (
      <>
        <ul>
          <li>Group Project for CSC 59866 & CSC 59867</li>
          <li>Apart of Zahn Competition and CREATE Competition</li>
        </ul>
      </>
    ),
    type: "School",
    image: inclusifyImage,
  },
  {
    index: "1",
    name: "WrestleKnow",
    tools: "Javascript, React, Parse Back4App",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/WrestleKnow" },
    ],
    date: "2023 -  2024",
    info: <></>,
    type: "Personal",
    image: wrestleknowImage,
  },
  {
    index: "2",
    name: "Parsetagram",
    tools: "Java, Parse Back4App",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Instagram" },
    ],
    date: "2022",
    info: (
      <ul>
        <li>Android App using Java</li>
        <li>A mock Instgram app using Parse Back4App as the backend</li>
        <li>Users can take pictures to upload to feed</li>
      </ul>
    ),
    type: "School",
    image: instagramImage,
  },
  {
    index: "3",
    name: "Lasso",
    tools: "Javascript, React, Back4App",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Lasso" },
      {
        name: "Design Report",
        href: "https://docs.google.com/document/d/1QoEHCaegleIGnLiOIReiHruNtKXfug50JazSP9S7SW0/edit?usp=sharing",
      },
    ],
    date: "2022",
    info: <></>,
    type: "School",
    image: lassoImage,
  },
  {
    index: "4",
    name: "Atlassian Software Engineer Intern",
    tools: ["Javascript, Typescript, Python"],
    link: [],
    date: "May 2023 - August 2023",
    info: (
      <ul>
        <li>
          Adapted a legacy feature to new visualizations and further adapted for
          more visualization types. Provided additional features and changes to
          visualization types and dashboard.
        </li>
        <li>
          Completed development process, including attended stand ups, design
          reviews, wrote spikes, conversed with designers to provide better user
          experience
        </li>
      </ul>
    ),
    type: "Internship",
    image: atlassianImage,
  },
  {
    index: "5",
    name: "Google STEP Intern",
    tools: "C++, Rust",
    link: [
      {
        name: "Fuchsia Google Open Source ",
        href: "https://cs.opensource.google/fuchsia",
      },
    ],
    date: "May 2021 - August 2021",
    info: (
      <ul>
        <li>
          12-week internship program on the open-source Fuchsia Operating System
        </li>
        <li>
          Developed a debugging tool that would aid developers with Fuchsia
          Driver Development
        </li>
        <li>
          Completed entire development process, including writing design docs,
          implementation, and going through design reviews
        </li>
      </ul>
    ),
    type: "Internship",
    image: googleImage,
  },
  {
    index: "6",
    name: "Rank",
    tools: "Javascript, React",
    link: [{ name: "GitHub", href: "https://github.com/bryanmartinez1/rank" }],
    date: "May 2023 - December 2023",
    info: <></>,
    type: "Personal",
    image: rankImage,
  },
  {
    index: "7",
    name: "My Ship Sails",
    tools: "C++, Python",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2019",
    info: <></>,
    type: "School",
    image: myshipsailsImage,
  },
  {
    index: "8",
    name: "GPA Calculator",
    tools: "Java, Back4App",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/myshipsails" },
    ],
    date: "2022",
    info: <></>,
    type: "School",
    image: gpaCalculatorImage,
  },
  {
    index: "9",
    name: "SimpleTweet",
    tools: "Java, Twitter REST API",
    link: [
      {
        name: "GitHub",
        href: "https://github.com/CodePathFinalProjectAcademics/GPACalculator",
      },
    ],
    date: "2022",
    info: (
      <ul>
        <li>Android App using Java</li>
        <li>Using Twiiter REST API</li>
        <li>
          Built a Twitter client that supports viewing a twitter timeline and
          composing a new tweet
        </li>
      </ul>
    ),
    type: "School",
    image: twitterImage,
  },
  {
    index: "10",
    name: "Flixster",
    tools: "Java, Movie Database API",
    link: [
      { name: "GitHub", href: "https://github.com/bryanmartinez1/Flixster" },
    ],
    date: "2022",
    info: (
      <ul>
        <li>Android App programmed in Java</li>
        <li>Users browse movies available in The Movie Database API</li>
      </ul>
    ),
    type: "School",
    image: flixsterImage,
  },
  {
    index: "11",
    name: "CCNY Major Related Courses",
    tools:
      "C++, C, Java, Python, JavaScript, Assembly, MatLab, Electric, LTSpice",
    link: [],
    date: "2022",
    info: (
      <>
        <h3>Computer Science</h3>
        <ul>
          <li>
            CSC 103 - <i>Introduction to Computer Programming</i>
          </li>
          <li>
            CSC 104 - <i>Discrete Structures 1 </i>
          </li>
          <li>
            CSC 212 - <i>Data Structures 1</i>
          </li>
          <li>
            CSC 221 - <i>Software Design Lab</i>
          </li>
          <li>
            CSC 220 - <i>Algorithms</i>
          </li>
          <li>
            CSC 210 - <i>Assembly Programming</i>
          </li>
          <li>
            CSC 332 - <i>Operating Systems</i>
          </li>
          <li>
            CSC 322 - <i>Software Engineering</i>
          </li>
          <li>
            CSC 342 - <i>Computer Organization</i>
          </li>
          <li>
            CSC 343 - <i>Computer Organization Lab</i>
          </li>
          <li>
            CSC 301 - <i>Scientific Programming (In Progress)</i>
          </li>
          <li>
            CSC 447 - <i>Introduction to Machine Learning (In Progress)</i>
          </li>
          <li>
            CSC 59866 - <i>Senior Project 1</i>
          </li>
          <li>
            CSC 59867 - <i>Senior Project 2 (In Progress)</i>
          </li>
          <li>
            CodePath - <i>Android Development</i>
          </li>
        </ul>
        <h3>Electrical Engineering</h3>
        <ul>
          <li>
            ENGR 101 - <i>Engineering Design</i>
          </li>
          <li>
            ENGR 103 - <i>Computer Aided Analysis Engineers</i>
          </li>
          <li>
            ENGR 204 - <i>Electrical Circuits</i>
          </li>
          <li>
            ENGR 276 - <i>Engineering Economics</i>
          </li>
          <li>
            EE 205 - <i>Linear Systems Analysis 1</i>
          </li>
          <li>
            EE 306 - <i>Linear Systems Analysis 2</i>
          </li>
          <li>
            EE 221 - <i>EE Lab 1</i>
          </li>
          <li>
            EE 322 - <i>EE Lab 2</i>
          </li>
          <li>
            EE 425 - <i>Computer Engineering Lab</i>
          </li>
          <li>
            EE 210 - <i>Switching Systems</i>
          </li>
          <li>
            EE 311 - <i>Probability and Statistics</i>
          </li>
          <li>
            EE 241 - <i>Electronics 1</i>
          </li>
          <li>
            EE 312 - <i>Communications Theory</i>
          </li>
          <li>
            EE 457 - <i>Digital Integrated Circuits</i>
          </li>
          <li>
            EE 330 - <i>Electromagnetics (In Progress)</i>
          </li>
        </ul>
      </>
    ),
    type: "School",
    image: ccnyImage,
  },
  {
    index: "12",
    name: "Atlassian Software Engineer New Grad",
    tools: "TBD",
    link: [],
    date: "Starting July 2024",
    info: (
      <ul>
        <li>TBD</li>
      </ul>
    ),
    type: "Work",
    image: atlassianImage,
  },
  {
    index: "13",
    name: "Personal Portfolio",
    tools: "JavaScript, React",
    link: [],
    date: "January 2024",
    info: (
      <ul>
        <li>TBD</li>
      </ul>
    ),
    type: "Personal",
    image: portfolioImage,
  },
  {
    index: "14",
    name: "Youtube Channel",
    tools: "TBD",
    link: [],
    date: "TBD",
    info: (
      <ul>
        <li>TBD</li>
      </ul>
    ),
    type: "Personal",
    image: youtubeImage,
  },
  {
    index: "15",
    name: "Electrical Engineering Lab 1",
    tools: "Mutlisim, LabView",
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
    info: (
      <ul>
        <li>
          CCNY Course Description: "Experiments and design problems on material
          drawn from the electrical engineering curriculum. (ENGR 20400, EE
          2100, EE 24100, EE34200). Test and measurement instruments, Virtual
          instruments and computer instrumentation, Electric and electronic
          circuits. Transient and frequency response, Logic circuits, Discrete
          circuits, Operational amplifiers."
        </li>
      </ul>
    ),
    type: "School",
    image: ee221Image,
  },
  {
    index: "16",
    name: "Electrical Engineering Lab 2",
    tools: "Fall 2022",
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
    info: (
      <ul>
        <li>
          CCNY Course Description: "Experiments and design problems on material
          drawn from the electrical engineering curriculum. (ENGR 20400, EE
          2100, EE 24100, EE34200). Test and measurement instruments, Virtual
          instruments and computer instrumentation, Electric and electronic
          circuits. Transient and frequency response, Logic circuits, Discrete
          circuits, Operational amplifiers."
        </li>
      </ul>
    ),
    type: "School",
    image: ee322Image,
  },
  {
    index: "17",
    name: "Computer Engineering Lab",
    tools: "TBD",
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
    info: (
      <ul>
        <li>
          CCNY Course Description: "Introduction to the operation and
          applications of microcomputers and design experiments in computer
          interface engineering utilizing a microprocessor based computer.
          Design projects include computer input-output device selection,
          program interrupt, on-line control, direct memory access, and circular
          input-output buffer."
        </li>
      </ul>
    ),
    type: "School",
    image: ee425Image,
  },
];

export default projectsJSON;
