import React from 'react';

import { ICard } from '../../models/ICard';
import styles from '../SmallCard/card.module.scss';

const CardForPhoneOrEmail: React.FC<ICard> = ({
  img,
  title,
  phone,
  email,
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
            <div className="has-text-centered">
              <strong>
                {' '}
                {email ? <a href={`mailto:${email}`}>{email}</a> : ''}
              </strong>
              <br />
            </div>
            <br />
            <div className="has-text-centered">
              <strong>
                {phone ? <a href={`tel:${phone}`}>{phone}</a> : ''}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForPhoneOrEmail;
