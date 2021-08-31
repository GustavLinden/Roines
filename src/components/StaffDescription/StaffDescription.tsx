import React from 'react';
import { IStaffCompetens } from '../../models/IStaffCompetence';
const StaffDescription: React.FC<IStaffCompetens> = ({
  name,
  email,
  summary,
  picture,
  phone,
  children,
}) => {
  return (
    <div className="box" style={{ margin: '5px' }}>
      <article className="media">
        <figure className="media-left">
          <div className="image is-128x128">
            <img
              src={
                picture
                  ? picture
                  : 'https://bulma.io/images/placeholders/128x128.png'
              }
            />
            <br />
          </div>
        </figure>

        <div className="media-content">
          <h3>{name ? name : ''}</h3>
          <div className="container">
            {children ? children : ''}
            <br />
            <div className="columns">
              <div className="column">
                {' '}
                <strong>
                  {' '}
                  {email ? (
                    <a href={`mailto:${email}`}>{email}</a>
                  ) : (
                    <a href="mailto:info@roines.se">Maila mig!</a>
                  )}
                </strong>
              </div>
              <div className="column">
                <strong>
                  {phone ? (
                    <a href={`tel:${phone}`}>{phone}</a>
                  ) : (
                    <a href={`tel:${phone}`}>{'08-6735695'}</a>
                  )}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default StaffDescription;
