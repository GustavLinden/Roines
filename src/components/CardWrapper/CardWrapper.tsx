import React from 'react';
import styles from './CardWrapper.module.scss';
const CardWrapper: React.FC = ({ children }) => {
  return (
    <section className={`section `}>
      <div className={`container ${styles.containerFlexFix}`}>{children}</div>
    </section>
  );
};
export default CardWrapper;
