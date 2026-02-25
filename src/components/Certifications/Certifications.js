import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import mcp from "../../Assets/Projects/mcp.png";
const certifications = [
  {
    id: 1,
    title: "Front-End Web Development with React(with HONORS)",
    issuer: "The Hong Kong University of Science and Technology [Coursera]",
    date: "may 2023",
    credentialId: "BS9QKJZB3CRU",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/BS9QKJZB3CRU",
    description:
      "Advanced React patterns, hooks, performance optimization, and state management.",
  },
  {
    id: 2,
    title: "Project: Introduction to Front-end Development with ReactJS ",
    issuer: "Coursera",
    date: "March 2023",
    credentialId: "8UA2FMGHKEFQ",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/8UA2FMGHKEFQ",
    description:
      "Built a responsive React application using functional components, hooks, and React Router for navigation.",
  },
  {
    id: 3,
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    issuer: "University of Michigan [Coursera]",
    date: "Oct 2022",
    credentialId: "HBT9PF99LDNS",
    category: "Frontend",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2P1DD7vW-dRlK-8dP5braAEzt-8_3XMdyMw&s",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/HBT9PF99LDNS?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    description:
      " HTML5, CSS3, JavaScript basics, responsive design, and accessibility best practices.",
  },
  {
    id: 4,
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan [Coursera]",
    date: "Sep 2022",
    credentialId: "9LZN2MHLHDHL",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/480px-CSS3_logo.svg.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/9LZN2MHLHDHL",
    description:
      " CSS Flexbox, Grid, media queries, and advanced responsive design techniques for modern web development.",
  },
  {
    id: 5,
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan [Coursera]",
    date: "Dec 2020",
    credentialId: "H3HAZ5Q9LY25",
    category: "Frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/H3HAZ5Q9LY25",
    description:
      " JavaScript fundamentals, DOM manipulation, event handling, and creating interactive web pages.",
  },
  {
    id: 5,
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    date: "Feb 2026",
    credentialId: "crdpr86p73ma",
    category: "AI",
    logo: mcp,
    verifyUrl: "https://verify.skilljar.com/c/crdpr86p73ma",
    description: "Model Context Protocol (MCP) fundamentals, including architecture, use cases, and implementation strategies for AI applications.Making an MCP client and MCP server.",
  },
  // {
  //   id: 6,
  //   title: "TypeScript Essential Training",
  //   issuer: "LinkedIn Learning",
  //   date: "Jun 2024",
  //   credentialId: "LI-TS-2024-7890",
  //   category: "Programming",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  //   verifyUrl: "#",
  //   description:
  //     "Type systems, interfaces, generics, decorators, and TypeScript best practices.",
  // },
];

const categories = ["All", ...new Set(certifications.map((c) => c.category))];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  return (
    <>
      <Container fluid className="certificate-section">
        <Particle />

        {/* Page Header */}
        <Container className="cert-header">
          <div className="cert-badge">
            <span className="cert-badge-dot" />
            <span>Verified Credentials</span>
          </div>
          <h1 className="project-heading">
            My <span className="cert-gradient-text">Certifications</span>
          </h1>
          <p className="cert-subtitle">
            Professional certifications and courses that shape my journey as a
            developer.
          </p>

          {/* Stats */}
          <div className="cert-stats">
            <div className="cert-stat">
              <span className="cert-stat-num">{certifications.length}</span>
              <span className="cert-stat-label">Earned</span>
            </div>
            <div className="cert-stat-divider" />
            <div className="cert-stat">
              <span className="cert-stat-num">{categories.length - 1}</span>
              <span className="cert-stat-label">Categories</span>
            </div>
            <div className="cert-stat-divider" />
            <div className="cert-stat">
              <span className="cert-stat-num">2020–23</span>
              <span className="cert-stat-label">Timeline</span>
            </div>
          </div>
        </Container>

        {/* Filter Pills */}
        <Container className="cert-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cert-filter-pill ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <span className="cert-filter-count">
                  {cat === "All"
                    ? certifications.length
                    : certifications.filter((c) => c.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </Container>

        {/* Cards Grid */}
        <Container>
          <Row className="cert-grid">
            {filtered.map((cert, index) => (
              <Col
                key={cert.id}
                md={6}
                lg={4}
                className="cert-col"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div
                  className="cert-card"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Hover glow effect */}
                  <div className="cert-card-glow" />

                  {/* Category badge */}
                  <span className="cert-card-category">{cert.category}</span>

                  {/* Top: Logo + Issuer */}
                  <div className="cert-card-top">
                    <div className="cert-card-logo">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="cert-logo-fallback">${cert.issuer[0]}</span>`;
                        }}
                      />
                    </div>
                    <div className="cert-card-issuer-wrap">
                      <div className="cert-card-issuer">{cert.issuer}</div>
                      <div className="cert-card-date">{cert.date}</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="cert-card-divider" />

                  {/* Body */}
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-desc">{cert.description}</p>

                  {/* Footer */}
                  <div className="cert-card-footer">
                    <span className="cert-card-id">
                      <span className="cert-card-id-label">ID:</span>{" "}
                      {cert.credentialId}
                    </span>
                    <span className="cert-card-view">View ↗</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="cert-empty">
              <span className="cert-empty-icon">🔍</span>
              <p>No certifications found in this category.</p>
            </div>
          )}
        </Container>
      </Container>

      {/* Detail Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-logo">
                <img
                  src={selectedCert.logo}
                  alt={selectedCert.issuer}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <div className="cert-modal-issuer">{selectedCert.issuer}</div>
                <div className="cert-modal-date">{selectedCert.date}</div>
              </div>
            </div>

            <h2 className="cert-modal-title">{selectedCert.title}</h2>
            <p className="cert-modal-desc">{selectedCert.description}</p>

            <div className="cert-modal-details">
              <div className="cert-modal-row">
                <span className="cert-modal-label">Category</span>
                <span className="cert-modal-value">{selectedCert.category}</span>
              </div>
              <div className="cert-modal-row">
                <span className="cert-modal-label">Credential ID</span>
                <span className="cert-modal-value cert-modal-mono">
                  {selectedCert.credentialId}
                </span>
              </div>
              <div className="cert-modal-row">
                <span className="cert-modal-label">Issued</span>
                <span className="cert-modal-value">{selectedCert.date}</span>
              </div>
            </div>

            <a
              href={selectedCert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-modal-verify"
            >
              Verify Credential ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;