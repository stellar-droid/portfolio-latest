import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import ESDSWebsite from "../../Assets/Projects/ESDSWebsite.png";
import LCM from "../../Assets/Projects/LCM.png";
import eNlight360 from "../../Assets/Projects/eNlight360.png";
import MOSPI from "../../Assets/Projects/MOSPI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESDSWebsite}
              isBlog={false}
              title="ESDS Website"
              description="I had the opportunity to contribute to the development of the official website for ESDS Software Solutions Ltd. (accessible at www.esds.co.in), a leading provider of Cloud Hosting, Data Center, and Managed IT Services. In this project, I played a key role in enhancing the user experience through modern web technologies. Using React for the frontend, I helped create a seamless and responsive user interface that ensures optimal performance across devices and screen sizes. Additionally, I integrated GSAP (GreenSock Animation Platform) to deliver smooth, interactive animations that engage visitors and make navigating the site visually appealing."
              ghLink=""
              demoLink="https://www.esds.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LCM}
              isBlog={false}
              title="Low Code Magic"
              description="I contributed to the Low Code Magic project at ESDS Software Solutions Limited, a platform aimed at streamlining application development. My involvement spanned both the public-facing website (www.lowcodemagic.co.in) and the core product. Initially serving as a dedicated researcher, I later played a key role in the development of the Multitenancy module and was responsible for its UI development. My contributions also included the development and maintenance of reusable components for the platform. Furthermore, leveraging the open-source nature of Form.io, I customized existing components and developed new, bespoke components to extend its capabilities within the project."
              ghLink=""
              demoLink="https://lowcodemagic.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eNlight360}
              isBlog={false}
              title="eNlight360"
              description="I contributed to the eNlight360 project at ESDS Software Solutions Limited, a comprehensive cloud monitoring platform. My work encompassed both enhancements to the public-facing website (www.insight360.cloud) and significant development within the core product. Key responsibilities included developing a React-based UI component for the critical URL Monitoring module and researching and implementing a dynamic drag-and-drop dashboard to enable robust user customization. I also focused on building reusable UI components to streamline development and improve code efficiency across the platform. Furthermore, I played a role in the development of the Identity and Access Management (IAM) module, ensuring secure access control for users."
              ghLink=""
              demoLink="https://insight360.cloud/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOSPI}
              isBlog={false}
              title="MOSPI"
              description="I am currently contributing as a React Developer to an ongoing, large-scale rewamp project within the Ministry of Statistics and Programme Implementation (MOSPI), Government of India. My primary focus is on developing robust and user-friendly web interfaces for critical sections of the national statistical system. In this role, I am responsible for developing and enhancing various React components for key website sections, including but not limited to About sections, FAQs, Publications, and Report Documents. A significant part of my contribution involves integrating RESTful APIs with these developed components to ensure seamless data flow and dynamic content delivery. This initiative aims to [mention the high-level goal, e.g., modernize national data infrastructure / improve the efficiency and accessibility of critical statistical information / enhance data collection and reporting capabilities] for public and internal use. Note on Confidentiality: Due to the ongoing and sensitive nature of this government project, I am unable to provide a live demo link, screenshots, or detailed internal documentation. I would be happy to discuss my contributions and the technical challenges involved in more detail during an interview, adhering to all confidentiality guidelines."
              ghLink=""
              demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
