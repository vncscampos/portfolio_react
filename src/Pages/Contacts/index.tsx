import React from 'react';

// Importe as imagens
import githubImage from '../../assets/github.svg';
import linkedinImage from '../../assets/linkedin.svg';

const Contacts: React.FC = () => {
  return (
    <div>
      <a
        href="https://github.com/vncscampos"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img className="icon" src={githubImage} alt="github" />
        <p>Github</p>
      </a>

      <a
        href="https://www.linkedin.com/in/vncscampos/"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img className="icon" src={linkedinImage} alt="linkedin" />
        <p>Linkedin</p>
      </a>
    </div>
  );
};

export default Contacts;
