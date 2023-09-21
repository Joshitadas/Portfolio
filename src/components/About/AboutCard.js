import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Joshita Das </span>
            from <span className="purple">India.</span>
            <br />I'm currently a 3rd year computer science engineering student.I am a Machine Learning Enthusiast who loves to work on research projects. I am also a Google Women Engineer's Scholar where I learn and update myself about all the upcoming technologies.
            I was also an Ambassador for Honeywell at the US. Space and Rocket Centre where I learnt key skills of leadership and teamwork.
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
							<ImPointRight /> Binge-Watching
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading Books
						</li>
						<li className="about-activity">
							<ImPointRight /> Drawing
						</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Organised Confustion"{" "}
          </p>
          <footer className="blockquote-footer">Likin Park</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
