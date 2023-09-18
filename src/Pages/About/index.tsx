import React from "react";

// Importe as imagens
import profileImage from "../../assets/image.png";
import pdfImage from "../../assets/pdf.png";
import textEditorImage from "../../assets/text-editor.png";

const About: React.FC = () => {
  const openModal = (modalId: string) => {
    console.log(modalId);
  };

  return (
    <div>
      <button
        onClick={() => openModal("aboutModal")}
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
        onClick={() => openModal("profileModal")}
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
          justifyContent: "center"
        }}
      >
        <img
          width={80}
          height={80}
          className="icon"
          src={pdfImage}
          alt="text-editor"
        />
        <p>curriculum_<br/>vitae.pdf</p>
      </a>
    </div>
  );
};

export default About;
