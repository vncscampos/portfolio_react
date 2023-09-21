import { useState } from "react";
import imgEditor from "../../assets/text-editor.png";
import PopUp from "../../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".1rem",
        }}
      >
        <img
          width="80"
          height="80"
          className="icon"
          src={imgEditor}
          alt="text-editor"
        />
        <p>welcome.txt</p>
      </button>
      <PopUp show={showModal} handleClose={() => setShowModal(false)}>
        <h1 style={{color: "white", marginBottom: "1rem"}}>
          <strong>
            Welcome to my portfolio! <span className="blinking-cursor"></span>
          </strong>
        </h1>
      </PopUp>
    </>
  );
};
export default Home;
