import React from 'react';
import { IPresentation } from '../../models/IPresentation';
import styles from './Presentation.module.scss';
const Presentation: React.FC<IPresentation> = ({ title, children }) => {
  return (
    <div className={`container has-text-centered ${styles.presentationHeight}`}>
      <div className="content">
        <h1>{title ? title : ''}</h1>
        {children ? children : ''}
      </div>
    </div>
  );
};

export default Presentation;
