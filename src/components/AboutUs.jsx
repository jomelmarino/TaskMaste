import React from "react";
import "../Style/AboutUs.css";
import image1 from "../images/avila.jpg";
import image2 from "../images/About.png";
import image3 from "../images/regie.jpg";
import image4 from "../images/mimay.jpg";
import image5 from "../images/lee.jpg";
import image6 from "../images/mel.png";
import image7 from "../images/About.png";
import image8 from "../images/About.png";
import image9 from "../images/About.png";
import image10 from "../images/About.png";


const members = [
  { id: 1, name: "Avila Kenneth Ivan M", role: "Frontend Developer", skills: "React, JavaScript, CSS", image: image1 },
  { id: 2, name: "Bravo Rene Boy S", role: "FrontEnd Developer", skills: "Node.js, Express, MongoDB", image: image2},
  { id: 3, name: "Regilisa Lovely C", role: "Documentation", skills: "Figma, Sketch, Adobe XD", image:  image3 },
  { id: 4, name: "Mimay John Rave N", role: "BackEnd Developer", skills: "MongDb, php, Node.js", image:  image4 },
  { id: 5, name: "Arcilla John Lee B", role: "BackEnd Developer", skills: "Pro Dancer", image:  image5 },
  { id: 6, name: "Mariño jomel M", role: "FrontEnd Developer", skills: "Best Chef", image:  image6 },
  { id: 7, name: "Tibay John Anthony", role: "Documentation", skills: "Flutter, Swift, Kotlin", image:  image7 },
  { id: 8, name: "Sevial Nelvic S", role: "Documentation", skills: "Photoshop, Illustrator, InDesign", image:  image8 },
  { id: 9, name: "Hormillosa Mhaxine A", role: "Documentation", skills: "MERN Stack, TypeScript, GraphQL", image:  image9},
  { id: 10, name: "Noronio charles kenjie", role: "Documentation", skills: "Machine Learning, OpenAI, R", image: image10 },
];


const AboutUs = () => {
  return (
      <div className="about-us">
        <h2>About Us</h2>
        <p>
        Welcome to Task Master, your ultimate solution for organizing, prioritizing, and achieving your goals. 
        Our mission is to simplify task management and help individuals and teams stay productive in an ever-busy world.
        We are a passionate team of developers, designers, and productivity interested committed to transforming how people manage their time and tasks. With a deep understanding of the challenges of modern work,
         we’ve designed a platform that puts simplicity, efficiency, and collaboration at the forefront.
        </p>

        <div className="members">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-info">
                <div className="image-wrapper">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="hover-overlay">
                    <p>{member.role}</p>
                    <p>{member.skills}</p>
                  </div>
                </div>
                <h3>{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default AboutUs;
