import React from 'react';
import './Staffpage.module.scss';
import StaffDescription from '../StaffDescription/StaffDescription';

import image1 from '../../pictures/thumbnail_IMG_8859.png';
import image2 from '../../pictures/thumbnail_IMG_8860.png';
import image3 from '../../pictures/thumbnail_IMG_8861.png';
import image4 from '../../pictures/thumbnail_IMG_8863.png';

import Section from '../Section/Section';
import Presentation from '../Presentation/Presentation';

const StaffPage: React.FC = () => {
  return (
    <Presentation>
      <div className="container">
        <Section>
          <StaffDescription picture={image3}>
            <h3>Nicklas Lindberg - Ägare/VD</h3>
          </StaffDescription>
          <StaffDescription picture={image2}>
            <span>
              <h3>Lars Hultman</h3> <strong>Försäljning/Marknad/Kontor</strong>
            </span>
          </StaffDescription>
          <StaffDescription picture={image4}>
            <h3>Kent Leppänen</h3>

            <strong>Verkstad</strong>
          </StaffDescription>
          <StaffDescription picture={image1}>
            <h3>Björn Hultman</h3>

            <strong>Kundvård/Underhåll/System och Nätverk</strong>
          </StaffDescription>
        </Section>
      </div>
    </Presentation>
  );
};

export default StaffPage;
