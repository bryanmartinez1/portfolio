import Accordion from "../Components/Accordion/Accordion.js";

export const resumeJSON = {
  contact: ["E-Mail: bryanmartinez2401@gmail.com"],
  education: [
    <li>
      <b>
        City College of New York, Computer Engineering, Bachelors of Engineering
      </b>
      <ul>
        <li>July 2019 - May 2024</li>
      </ul>
    </li>,
    <li>Computer Science Courses</li>,
    <ul>
      <li>
        Algorithms, Data Structures, Operating Systems, Software Engineering,
        Assembly Programming, Computer Organizations, Machine Learning,
        Scientific Programming
      </li>
    </ul>,
    <li>Electrical Engineering Courses</li>,
    <ul>
      <li>
        Electrical Circuits, Linear System Analysis, Electronics, Communications
        Theory, Digital Integrated Circuits, Electromagnetics
      </li>
    </ul>,
  ],
  technicalSkills: [
    "C++",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "Rust",
    "C",
  ],
  experience: [
    <Accordion
      innerheading={true}
      title="Atlassian, Software Engineer, Starting July 2024"
      content={
        <ul>
          <li>TBD</li>
          <li>
            <b>Programming Languages:</b> TBD
          </li>
        </ul>
      }
    />,
    <Accordion
      innerheading={true}
      title="Atlassian, Software Engineer Intern, May 2023 - August 2023"
      content={
        <ul>
          <li>
            Adapted a legacy feature to new visualizations and further adapted
            for more visualization types. Provided additional features and
            changes to visualization types and dashboard.
          </li>
          <li>
            Completed development process, including attended stand ups, design
            reviews, wrote spikes, conversed with designers to provide better
            user experience
          </li>
          <li>
            <b>Programming Languages:</b> TypeScript, JavaScript, Python
          </li>
        </ul>
      }
    />,
    <Accordion
      innerheading={true}
      title="Google, STEP Intern, May 2021 - August 2021"
      content={
        <ul>
          <li>
            12-week internship program on the open-source Fuchsia Operating
            System
          </li>
          <li>
            Developed a debugging tool that would aid developers with Fuchsia
            Driver Development
          </li>
          <li>
            Completed entire development process, including writing design docs,
            implementation, and going through design reviews
          </li>
          <li>
            <b>Programming Languages:</b> C++ and Rust
          </li>
        </ul>
      }
    />,
  ],
  technicalProjects: [
    <Accordion
      innerheading={true}
      title="Inclusify, August 2023 - June 2024"
      content={
        <ul>
          <li>Lasso is an ecommerce app like eBay</li>
          <li>
            Users can create an account to buy and sell products, guest users
            and users with accounts can search, filter, and sort through the
            items available for sale.
          </li>
          <li>
            Group project developed using an adapted version of the agile
            methodology
          </li>
          <li>
            <b>Technical Tools:</b> JavaScript, React, Firebase, AmazonS3,
          </li>
        </ul>
      }
    />,
    <Accordion
      innerheading={true}
      title="ProWrestleKnow, November 2023 - July 2024"
      content={
        <ul>
          <li>
            ProWrestleKnow is a pro wrestling encyclopedia and social media web
            app.
          </li>
          <li>
            Users can search through a variety of pro wrestling related
            categories, sign up and login, and publicly and privately converse
            with other users.
          </li>
          <li>
            <b>Techical Tools:</b> JavaScript, React, Python, Firebase, Back4App
          </li>
        </ul>
      }
    />,
    <Accordion
      innerheading={true}
      title="Parsetagram, 2022"
      content={
        <ul>
          <li>Lasso is an ecommerce app like eBay</li>
          <li>
            Users can create an account to buy and sell products, guest users
            and users with accounts can search, filter, and sort through the
            items available for sale.
          </li>
          <li>
            Group project developed using an adapted version of the agile
            methodology
          </li>
          <li>
            <b>Technical Tools:</b> Java, Back4App Parse
          </li>
        </ul>
      }
    />,
    <Accordion
      innerheading={true}
      title="Lasso - Ecommerce Webapp, 2022"
      content={
        <ul>
          <li>Lasso is an ecommerce app like eBay</li>
          <li>
            Users can create an account to buy and sell products, guest users
            and users with accounts can search, filter, and sort through the
            items available for sale.
          </li>
          <li>
            Group project developed using an adapted version of the agile
            methodology
          </li>
          <li>
            <b>Technical Tools:</b> JavaScript, React, Back4App Parse
          </li>
        </ul>
      }
    />,
  ],
};
