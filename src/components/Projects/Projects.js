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
import IIBF from "../../Assets/Projects/iibf.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="grtxt">Works </strong>
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
              description="I contributed as a React Developer to a large-scale revamp project within the Ministry of Statistics and Programme Implementation (MOSPI), Government of India. My primary focus was on developing robust and user-friendly web interfaces for critical sections of the national statistical system. In this role, I was responsible for developing and enhancing various React components for key website sections, including but not limited to About sections, FAQs, Publications, and Report Documents. A significant part of my contribution involved integrating RESTful APIs with these developed components to ensure seamless data flow and dynamic content delivery. This initiative aimed to modernize national data infrastructure and improve the efficiency and accessibility of critical statistical information for public and internal use."
              ghLink=""
              demoLink="https://www.mospi.gov.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IIBF}
              isBlog={false}
              title="IIBF 2.0"
              description="I am currently contributing as a React Developer to the IIBF 2.0 project, specifically working on the Transaction Portal (TP) Module for the past 8 months. My journey began with a challenging task of developing a custom Image Cropper component, which was designed to be seamlessly integrated across all image upload functionalities within the Transaction Portal. Following this, I worked extensively on the Candidate Portal, implementing the image cropper integration and developing features spanning from user registration to various membership types including Non-Member, Fellow Member, Ordinary Member, and DBF Member. I also contributed significantly to the Exam Module, building functionalities for Scribe management, Vendor integration, Exam Application processes, and Result management. My role encompasses both UI development and core functionality implementation, ensuring a robust and user-friendly experience across all sub-modules. Note: Due to project confidentiality and its ongoing nature, a demo link is not available. I would be happy to discuss my contributions and technical challenges in detail during an interview."
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
