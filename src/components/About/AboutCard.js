import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh Wani </span>
            from <span className="purple"> Indore,Madhya Pradesh.</span>
            <br />
            I am currently employed as a React.Js Developer at ESDS Software Solutions Limited [Nashik].
            <br />
           I have completed MCA in the year 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing table tennins and football.
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Impact-Driven Builder | Creating What Matters!"{" "}
          </p>
          <footer className="blockquote-footer">Lokesh Wani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
