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
    <article className="media">
      <figure className="media-left">
        <p className="image is-128x128">
          <img
            src={
              picture
                ? picture
                : 'https://bulma.io/images/placeholders/128x128.png'
            }
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            {children ? children : ''}
            <br />
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item"></a>
            <a className="level-item"></a>
            <a className="level-item"></a>
          </div>
        </nav>
      </div>
    </article>
  );
};
export default StaffDescription;
