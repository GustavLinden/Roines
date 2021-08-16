import React from 'react';
import { ICard } from '../../models/ICard';
import './Cardcss.css';

const Card: React.FC<ICard> = ({ img, title, link, content }) => {
  return (
    <div className="column">
      <a href={'//www.aftonbladet.se'}>
        <div className="box is-outlined cardbox">
          <div className="card_img">
            {' '}
            <img src={img} alt="user-image" />
            <div className="card_content">
              {' '}
              <h2>{title ? title : ''}</h2>
              {content ? content : ''}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
