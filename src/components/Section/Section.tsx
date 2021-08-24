import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ISectionModel } from '../../models/ISectionModel';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './Section.module.scss';

const SectionModule: React.FC<ISectionModel> = ({
  titel,
  subTitle,
  img,
  children,
  link,
  linkname,
}) => {
  return (
    <section className={`content ${styles.containerPadding}`}>
      <section className={`hero ${styles.backgroundcolorwhiteSmoke}`}>
        <div className="hero-body">
          <div className="container">
            <div style={{ fontSize: '32px' }}>{titel ? titel : ''}</div>
          </div>
          <div style={{ padding: '5px' }}>
            <p style={{ fontStyle: 'italic' }}> {subTitle ? subTitle : ''}</p>
          </div>
          {img ? (
            <figure className="image is-16by9">
              {img ? <img src={img} /> : ''}
            </figure>
          ) : (
            ''
          )}
          <div className="content">{children ? children : ''}</div>
          <div className=" is-pulled-right mr-6 pr-6">
            {' '}
            {link ? (
              <HeaderLink page={link}>
                <strong>
                  Till {linkname} <FontAwesomeIcon icon={faArrowRight} />
                </strong>
              </HeaderLink>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionModule;
