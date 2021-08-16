import React from 'react';
import './Staffpage.module.scss';
import StaffDescription from '../StaffDescription/StaffDescription';

import image1 from '../../pictures/thumbnail_IMG_8859.png';
import image2 from '../../pictures/thumbnail_IMG_8860.png';
import image3 from '../../pictures/thumbnail_IMG_8861.png';
import image4 from '../../pictures/thumbnail_IMG_8863.png';

import SectionModule from '../Section/Section';

const StaffPage: React.FC = () => {
  return (
    <div
      className="container"
      style={{ minHeight: '75vh', marginTop: '5px', marginBottom: '5px' }}
    >
      <SectionModule>
        <SectionModule titel="Här kan du läsa mer om oss som jobbar på Roines och våra områden"></SectionModule>
        <StaffDescription picture={image3}>
          <h3>Nicklas Lindberg</h3>
          <strong>Ägare/Vd</strong>
        </StaffDescription>
        <StaffDescription picture={image2}>
          <h3>Lars Hultman</h3>

          <strong>Försäljning/Marknad/Kontor</strong>
        </StaffDescription>
        <StaffDescription picture={image4}>
          <h3>Kent Leppänen</h3>

          <strong>Verkstad</strong>
        </StaffDescription>
        <StaffDescription picture={image1}>
          <h3>Björn Hultman</h3>

          <strong>Kundvård/Underhåll/System och Nätverk</strong>
        </StaffDescription>
      </SectionModule>
    </div>
  );
};

export default StaffPage;
