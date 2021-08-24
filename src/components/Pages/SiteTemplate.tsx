import React from 'react';
import Presentation from '../Presentation/Presentation';

const SiteTemplate: React.FC = ({ children }) => {
  return (
    <Presentation>
      <div
        className={`box`}
        style={{ minHeight: '75vh', marginBottom: '10px' }}
      >
        <div className="columns is-vcentered">
          <div className="column is-one-quarter"></div>
          <div className="column is-half">{children}</div>
          <div className="column is-one-quarter"></div>
        </div>
      </div>
    </Presentation>
  );
};
export default SiteTemplate;
