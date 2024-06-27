import React from "react";
import Accordion from "../../Components/Accordion";
import "./Resume.css";

export default function Resume({ nightMode }) {
  return (
    <div className="resumePage">
      <div className="navigation">
        <div
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#contact"
        >
          Contact
        </div>
        <div
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#education"
        >
          Education
        </div>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#technicalSkills"
        >
          Techical Skills
        </a>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#experience"
        >
          Experience
        </a>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#technicalProjects"
        >
          Technical Projects
        </a>
      </div>
      <Accordion
        id="contact"
        title="Contact"
        nightMode={nightMode}
        content={
          <ul>
            <li>Email: bryanmartinez2401@gmail.com</li>
          </ul>
        }
      />
      <Accordion
        id="education"
        title="Education"
        nightMode={nightMode}
        content={
          <ul>
            <li>Currently Enrolled in City College of New York</li>
            <li>Major: Computer Engineering</li>
            <li>Expected Graduation Date: Spring 2024</li>
            <li>Relevant Courses Taken</li>
            <ul>
              <li>
                Algorithms, Data Structures, Operating Systems, Software
                Engineering, Assembly Programming, Computer Organizations,
                Machine Learning, Scientific Programming
              </li>
            </ul>
          </ul>
        }
      />
      <Accordion
        id="technicalSkills"
        title="Techical Skills"
        nightMode={nightMode}
        content={
          <ul>
            <li>
              Programming Language: C++, TypeScript, JavaScript, Java, Python,
              Rust, C
            </li>
          </ul>
        }
      />
      <Accordion
        id="experience"
        nightMode={nightMode}
        title="Experience"
        content={
          <>
            <Accordion
              innerheading={true}
              nightMode={nightMode}
              title="Atlassian, Software Engineer, Starting July 2024"
              content={
                <ul>
                  <li>TBD</li>
                </ul>
              }
            />
            <Accordion
              innerheading={true}
              nightMode={nightMode}
              title="Atlassian, Software Engineer Intern, May 2023 - August 2023"
              content={
                <ul>
                  <li>
                    Adapted a legacy feature to new visualizations and further
                    adapted for more visualization types. Provided additional
                    features and changes to visualization types and dashboard.
                  </li>
                  <li>
                    Completed development process, including attended stand ups,
                    design reviews, wrote spikes, conversed with designers to
                    provide better user experience
                  </li>
                  <li>Programming Languages: TypeScript, JavaScript, Python</li>
                </ul>
              }
            />
            <Accordion
              nightMode={nightMode}
              innerheading={true}
              title="Google, STEP Intern, May 2021 - August 2021"
              content={
                <ul>
                  <li>
                    12-week internship program on the open-source Fuchsia
                    Operating System
                  </li>
                  <li>
                    Developed a debugging tool that would aid developers with
                    Fuchsia Driver Development
                  </li>
                  <li>
                    Completed entire development process, including writing
                    design docs, implementation, and going through design
                    reviews
                  </li>
                  <li>Programming Languages: C++ and Rust</li>
                </ul>
              }
            />
          </>
        }
      />
      <Accordion
        id="technicalProjects"
        nightMode={nightMode}
        title="Techical Projects"
        content={
          <>
            <Accordion
              innerheading={true}
              title="CSC 59866, Senior Project, Inclusify - Cloud-Based Resume Webapp, 2023 - 2024"
              content={
                <ul>
                  <li>Lasso is an ecommerce app like eBay</li>
                  <li>
                    Users can create an account to buy and sell products, guest
                    users and users with accounts can search, filter, and sort
                    through the items available for sale.
                  </li>
                  <li>
                    Group project developed using an adapted version of the
                    agile methodology
                  </li>
                  <li>Frontend: JavaScript; Framework: React</li>
                  <li>Backend: Firebase and AmazonS3</li>
                </ul>
              }
            />
            <Accordion
              nightMode={nightMode}
              innerheading={true}
              title="Personal Project, WrestleKnow, 2023 - 2024"
              content={
                <ul>
                  <li>
                    WrestleKnow is a pro wrestling encyclopedia and social media
                    web app.
                  </li>
                  <li>
                    Users can search through a variety of pro wrestling related
                    categories, sign up and login, and publicly and privately
                    converse with other users.
                  </li>
                  <li>Frontend: JavaScript; Framework: React</li>
                  <li>Backend: Back4App</li>
                </ul>
              }
            />
            <Accordion
              nightMode={nightMode}
              innerheading={true}
              title="CodePath Android Course, Parsetagram, 2022"
              content={
                <ul>
                  <li>Lasso is an ecommerce app like eBay</li>
                  <li>
                    Users can create an account to buy and sell products, guest
                    users and users with accounts can search, filter, and sort
                    through the items available for sale.
                  </li>
                  <li>
                    Group project developed using an adapted version of the
                    agile methodology
                  </li>
                  <li>Frontend: Java</li>
                  <li>Backend: Back4App Parse</li>
                </ul>
              }
            />
            <Accordion
              nightMode={nightMode}
              innerheading={true}
              title="CSC 322, Software Engineering, Lasso - Ecommerce Webapp, 2022"
              content={
                <ul>
                  <li>Lasso is an ecommerce app like eBay</li>
                  <li>
                    Users can create an account to buy and sell products, guest
                    users and users with accounts can search, filter, and sort
                    through the items available for sale.
                  </li>
                  <li>
                    Group project developed using an adapted version of the
                    agile methodology
                  </li>
                  <li>Frontend: JavaScript; Framework: React</li>
                  <li>Backend: Back4App Parse</li>
                </ul>
              }
            />
          </>
        }
      />
    </div>
  );
}
