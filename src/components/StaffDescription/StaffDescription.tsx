import React from 'react';
import { IStaffCompetens } from '../../models/IStaffCompetence';
const StaffDescription: React.FC<IStaffCompetens> = ({
  name,
  email,
  summary,
  picture,
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
            <strong>
              {' '}
              {email ? (
                <a href={`mailto:${email}`}>{email}</a>
              ) : (
                <a href="mailto:info@roines.se">Maila mig!</a>
              )}
            </strong>
          </div>
        </figure>
        <div className="media-content">
          <div className="container">
            {children ? children : ''}
            <br />
          </div>
        </div>
      </article>
    </div>
  );
};
export default StaffDescription;
