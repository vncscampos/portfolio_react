import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";


import imgSobre from "./assets/about.svg";
import imgVoltar from "./assets/back.svg";
import imgClientes from "./assets/client.svg";
import imgContatos from "./assets/contact.svg";
import imgPrincipal from "./assets/home.svg";
import imgProjeto from "./assets/project.svg";

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  const selectedPath = {
    backgroundColor: "#333044",
    color: "#8269ad",
  };

  useEffect(() => {
    setCurrentPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <>
      <div className="background">
        <div className="thunar-window">
          <header className="header">
            <div className="header-window">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "1rem",
                }}
              >
                <div
                  className="circle"
                  style={{ backgroundColor: "#ff5555" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#f0db4f" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#4caf50" }}
                ></div>
              </div>
              <p style={{ textAlign: "center" }}>vinicius - Portfólio</p>
            </div>
            <div className="header-path">
              <div style={{ marginTop: ".5rem" }}>
                <img
                  style={{ transform: "scaleX(-1)" }}
                  src={imgVoltar}
                  alt="voltar"
                />
                <img src={imgVoltar} alt="avançar" />
              </div>
              <div className="directory-path">
                <p>/home/vinicius/{currentPath}</p>
              </div>
            </div>
          </header>
          <div className="file-manager">
            <section className="sidebar">
              <ul className="custom-list">
                <li style={currentPath === "" ? selectedPath : {}}>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    to="/"
                  >
                    <img className="icon" src={imgPrincipal} alt="principal" />
                    <p>Main</p>
                  </Link>
                </li>
                <li style={currentPath === "about" ? selectedPath : {}}>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    to="about"
                  >
                    <img className="icon" src={imgSobre} alt="sobre" />
                    <p>About</p>
                  </Link>
                </li>
                <li style={currentPath === "projects" ? selectedPath : {}}>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    to="projects"
                  >
                    <img className="icon" src={imgProjeto} alt="projeto" />
                    <p>Projects</p>
                  </Link>
                </li>
                <li style={currentPath === "clients" ? selectedPath : {}}>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    to="clients"
                  >
                    <img className="icon" src={imgClientes} alt="clientes" />
                    <p>Clients</p>
                  </Link>
                </li>
                <li style={currentPath === "contacts" ? selectedPath : {}}>
                  <Link
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    to="contacts"
                  >
                    <img className="icon" src={imgContatos} alt="contacts" />
                    <p>Contacts</p>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="main-content">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
