import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ICard } from '../../models/ICard';
import HeaderLink from '../HeaderLink/HeaderLink';
import './Cardcss.css';

const Card: React.FC<ICard> = ({
  img,
  title,
  link,
  linkName,
  content,
  children,
}) => {
  return (
    <div className="card  cardbox">
      <div className="card-content">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>

        <div className="card-content">
          <p className="container">{title}</p>

          <div className="content">
            {content ? content : children}
            <br />
            <div>
              {link ? (
                <HeaderLink page={link}>
                  <strong>
                    Till {linkName} <FontAwesomeIcon icon={faArrowRight} />
                  </strong>
                </HeaderLink>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card" style={{ height: 'maxContent' }}>
      <a href={'//www.aftonbladet.se'}>
        <div className="box is-outlined cardbox">
          <div className="card_img">
            {' '}
            <figure className="image is-48x48">
              <img src={img} />
              <div className="card_content">
                {' '}
                <h2>{title ? title : ''}</h2>
                {content ? content : ''}
              </div>
            </figure>
          </div>
        </div>
      </a>
    </div> */
}
