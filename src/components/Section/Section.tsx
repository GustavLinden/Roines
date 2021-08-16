import React from 'react';
import { ISectionModel } from '../../models/ISectionModel';

const SectionModule: React.FC<ISectionModel> = ({
  titel,
  subTitle,
  img,
  children,
}) => {
  return (
    <section className="hero box mx-4">
      <div className="hero-body">
        <div className="notification ">
          <div className="title ">
            <div style={{ fontSize: '32px' }}>{titel ? titel : ''}</div>
          </div>
          <div className="content" style={{ padding: '5px' }}>
            <p style={{ fontStyle: 'italic' }}> - {subTitle ? subTitle : ''}</p>
          </div>
          {img ? (
            <figure className="image is-128x128">
              {img ? (
                <img style={{ width: '128px', height: '128px' }} src={img} />
              ) : (
                ''
              )}
            </figure>
          ) : (
            ''
          )}
        </div>

        <div style={{ fontSize: '16px' }}>{children ? children : ''}</div>
      </div>
    </section>
  );
};

export default SectionModule;
