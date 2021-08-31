import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../models/ICard';
import styles from './card.module.scss';

const Card: React.FC<ICard> = ({
  img,
  title,
  link,
  linkName,

  phone,
  email,
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
            <div
              style={{ position: 'absolute', bottom: '55px', right: '110px' }}
            >
              <strong>
                {' '}
                {email ? <a href={`mailto:${email}`}>{email}</a> : ''}
              </strong>
              <br />
            </div>
            <div
              style={{ position: 'absolute', bottom: '35px', right: '120px' }}
            >
              <strong>
                {phone ? <a href={`tel:${phone}`}>{phone}</a> : ''}
              </strong>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '15px', right: '105px' }}>
          <span>
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
          </span>
          <span>
            {extLink ? (
              <a href={`${extLink}`} target="_blank">
                <strong>Till {extLinkName}</strong>
              </a>
            ) : (
              ''
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
