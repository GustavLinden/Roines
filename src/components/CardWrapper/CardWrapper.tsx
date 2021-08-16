import React from 'react';
import Card from '../SmallCard/Card';

const CardWrapper: React.FC = ({ children }) => {
  return (
    <section className="section">
      <div className="block">
        <div className="columns">{children}</div>
      </div>
    </section>
  );
};
export default CardWrapper;
