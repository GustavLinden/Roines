import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ISectionModel } from '../../models/ISectionModel';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './SectionLargeImage.module.scss';
const SectionLargePicture: React.FC<ISectionModel> = ({
  title,
  subTitle,
  img,
  children,
  link,
  linkname,
}) => {
  return (
    <section className={`container ${styles.containerPaddings}`}>
      <section className={`hero ${styles.backgroundcolorwhiteSmoke}`}>
        <div className="hero-body">
          <div className="container">
            <div>
              <strong className="title">{title ? title : ''}</strong>
            </div>

            <div className={`${styles.subTitlePadding}`}>
              <p className={`${styles.subTitleTextStyle}`}>
                - {subTitle ? subTitle : ''}
              </p>
            </div>
            <br />
          </div>
          <div className={`columns`}>
            <div className={`column is-half content`}>
              <div>{children ? children : ''}</div>
              <br />
              <div className={`${styles.columnInternalMargin}`}>
                {' '}
                {link ? (
                  <Link to={link}>
                    <strong>
                      Till {linkname} <FontAwesomeIcon icon={faArrowRight} />
                    </strong>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className={`column is-half is-hidden-mobile`}>
              {' '}
              {img ? <figure>{img ? <img src={img} /> : ''}</figure> : ''}{' '}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionLargePicture;
// className={`${styles.columnInternalMargin}`}
