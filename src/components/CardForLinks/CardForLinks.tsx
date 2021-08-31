import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../models/ICard';
import styles from '../SmallCard/card.module.scss';

const CardForLinks: React.FC<ICard> = ({
  img,
  title,
  link,
  linkName,
  extLink,
  extLinkName,
  children,
}) => {
  return (
    <div className={`card  ${styles.cardbox}`}>
      <div className="card-content">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p className="container has-text-centered">
            <strong>{title}</strong>
          </p>
          <div className="content">
            {children}
            <br />
            <br />
          </div>
        </div>
        <div className="has-text-centered">
          {' '}
          {link ? (
            <Link to={link}>
              <strong>
                Till {linkName} <FontAwesomeIcon icon={faArrowRight} />
              </strong>
            </Link>
          ) : (
            ''
          )}
          {extLink ? (
            <a href={`${extLink}`} target="_blank">
              <strong>Till {extLinkName}</strong>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default CardForLinks;
