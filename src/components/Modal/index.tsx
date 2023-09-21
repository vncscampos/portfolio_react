import Modal from "react-bootstrap/Modal";
import "./style.css";

const PopUp = ({ handleClose, show, children }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "1rem",
            }}
          >
            <button onClick={handleClose}>
              <div
                className="circle"
                style={{ backgroundColor: "#ff5555", cursor: "pointer" }}
              ></div>
            </button>
            <div
              className="circle"
              style={{ backgroundColor: "#f0db4f" }}
            ></div>
            <div
              className="circle"
              style={{ backgroundColor: "#4caf50" }}
            ></div>
          </div>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default PopUp;
