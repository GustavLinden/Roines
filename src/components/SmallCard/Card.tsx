import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../models/ICard';
import HeaderLink from '../HeaderLink/HeaderLink';
import './Cardcss.css';

const Card: React.FC<ICard> = ({
  img,
  title,
  link,
  linkName,
  content,
  extLink,
  extLinkName,
  children,
}) => {
  return (
    <div className="card  cardbox">
      <div className="card-content">
        <div className="card-image">
          <figure className="image is-3by4">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>

        <div className="card-content">
          <p className="container has-text-centered">
            <strong>{title}</strong>
          </p>

          <div className="content">
            {content ? content : children}
            <br />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '20px' }}>
          {link ? (
            <Link to={link}>
              <strong>
                Till {linkName} <FontAwesomeIcon icon={faArrowRight} />
              </strong>
            </Link>
          ) : (
            ''
          )}
          <br />
          {extLink ? (
            <a href={extLink}>
              <strong>
                Till {extLinkName} <FontAwesomeIcon icon={faArrowRight} />
              </strong>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
