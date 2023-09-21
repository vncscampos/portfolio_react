import React, { useState } from "react";

// Importe as imagens
import profileImage from "../../assets/image.png";
import pdfImage from "../../assets/pdf.png";
import myImage from "../../assets/profile.jpeg";
import textEditorImage from "../../assets/text-editor.png";
import PopUp from "../../components/Modal";

const About: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalImage, setShowModalImage] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            width={80}
            height={80}
            className="icon"
            src={textEditorImage}
            alt="text-editor"
          />
          <p>about.txt</p>
        </button>

        <button
          onClick={() => setShowModalImage(true)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            width={80}
            height={80}
            className="icon"
            src={profileImage}
            alt="text-editor"
          />
          <p>profile.jpeg</p>
        </button>

        <a
          href="public/Vinicius_Curriculo.pdf"
          target="_blank"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            width={80}
            height={80}
            className="icon"
            src={pdfImage}
            alt="text-editor"
          />
          <p>
            curriculum_
            <br />
            vitae.pdf
          </p>
        </a>
      </div>  
      <PopUp show={showModal} handleClose={() => setShowModal(false)}>
        <h3 className="modal-title">
          <strong>About</strong>
        </h3>
        <p className="modal-text">
          I am a software developer with a passion for information security.
          <br />
          Currently, I am pursuing my studies in Computer Engineering at
          CEFET-MG.
          <br />
          My learning journey includes exploring technologies such as React,
          Spring, and AWS.
        </p>

        <h3 className="modal-title">
          <strong>Hard Skills</strong>
        </h3>
        <p className="modal-text">
          <strong>Languages:</strong> Java, Javascript, Typescript, Python
          <br />
          <strong>Frameworks:</strong> Node, Spring, Angular, React, React
          Native
        </p>

        <h3 className="modal-title">
          <strong>Soft Skills</strong>
        </h3>
        <ul className="modal-text">
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>
            Curiosity <span className="blinking-cursor"></span>
          </li>
        </ul>
      </PopUp>
      <PopUp show={showModalImage} handleClose={() => setShowModalImage(false)}>
        <img height="400px" src={myImage} alt="foto"/>
      </PopUp>
    </>
  );
};

export default About;
