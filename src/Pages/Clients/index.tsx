import React from 'react';

// Importe a imagem
import instagramImage from '../../assets/instagram.svg';

const Clients: React.FC = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/zuck/"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img className="icon" src={instagramImage} alt="instagram" />
        <p>Mark Zuckerberg</p>
      </a>

      <a
        href="https://www.instagram.com/jackiechan/"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img className="icon" src={instagramImage} alt="instagram" />
        <p>Jackie Chan</p>
      </a>

      <a
        href="https://www.instagram.com/ronaldinho/"
        target="_blank"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img className="icon" src={instagramImage} alt="instagram" />
        <p>Ronaldinho Gaúcho</p>
      </a>
    </div>
  );
};

export default Clients;
