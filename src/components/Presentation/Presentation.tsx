import React from 'react';

const Presentation: React.FC = ({ children }) => {
  return (
    <section className="hero has-background-information">
      <div className="hero-body">
        <div className="container">
          <div className="title">{children ? children : ''}</div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
