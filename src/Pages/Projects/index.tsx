import React from 'react';

// Importe a imagem
import fileImage from '../../assets/file.png';

const Projects: React.FC = () => {
  return (
    <div>
      <a
        href="https://github.com/arthurzatta/Adocao"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img width={80} height={80} className="icon" src={fileImage} alt="file" />
        <p>Adocão</p>
      </a>

      <a
        href="https://github.com/vncscampos/Ecoleta"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img width={80} height={80} className="icon" src={fileImage} alt="file" />
        <p>Ecoleta</p>
      </a>

      <a
        href="https://github.com/vncscampos/BeTheHero"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img width={80} height={80} className="icon" src={fileImage} alt="file" />
        <p>BeTheHero</p>
      </a>
    </div>
  );
};

export default Projects;
