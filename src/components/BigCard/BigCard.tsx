import React from 'react';
import Presentation from '../Presentation/Presentation';
import { ICard } from '../../models/ICard';
import HeaderLink from '../HeaderLink/HeaderLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BigCard: React.FC<ICard> = ({
  title,
  link,
  content,
  img,
  children,
  linkName,
}) => {
  return (
    <div className="column">
      <div className="card cardbox">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={
                img ? img : 'https://bulma.io/images/placeholders/1280x960.png'
              }
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              {/* <Presentation /> */}
              <p className="subtitle is-6"></p>
            </div>
          </div>

          <div className="content">
            <div className="title">{title}</div>
          </div>
          <div>
            <div style={{ fontStyle: 'italic' }}>
              {content ? content : ''}
              {children ? children : ''}
            </div>
            <br />
            {link ? (
              <HeaderLink page={link}>
                <strong>
                  Till {linkName} <FontAwesomeIcon icon={faArrowRight} />
                </strong>
              </HeaderLink>
            ) : (
              ''
            )}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
