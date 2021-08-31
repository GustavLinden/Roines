import React from 'react';
import './Staffpage.module.scss';
import StaffDescription from '../StaffDescription/StaffDescription';

import image1 from '../../pictures/thumbnail_IMG_8859.png';
import image2 from '../../pictures/thumbnail_IMG_8860.png';
import image3 from '../../pictures/thumbnail_IMG_8861.png';
import image4 from '../../pictures/thumbnail_IMG_8863.png';

import Presentation from '../Presentation/Presentation';
import CardWrapper from '../CardWrapper/CardWrapper';
import Card from '../SmallCard/Card';
import CardForPhoneOrEmail from '../CardForPhoneorEmail/CardPhoneEmail';

const StaffPage: React.FC = () => {
  return (
    <Presentation>
      <div className="container">
        <CardWrapper>
          <CardForPhoneOrEmail img={image3}>
            <h3>Nicklas Lindberg - Ägare/VD</h3>
          </CardForPhoneOrEmail>
          <CardForPhoneOrEmail
            img={image4}
            email="info@roines.se"
            phone="08888888"
          >
            <section>
              <h3>Lars Hultman</h3>
              <strong>Försäljning/Marknad/Kontor</strong>
              <div>TESTTEXT</div>
            </section>
          </CardForPhoneOrEmail>
          <CardForPhoneOrEmail
            img={image2}
            email="info@roines.se"
            phone="08888888"
          >
            <h3>Kent Leppänen</h3>

            <strong>Verkstad</strong>
            <div>TESTTEXT</div>
          </CardForPhoneOrEmail>
          <CardForPhoneOrEmail img={image1}>
            <h3>Björn Hultman</h3>

            <strong>Kundvård/Underhåll/System och Nätverk</strong>
          </CardForPhoneOrEmail>
        </CardWrapper>
      </div>
    </Presentation>
  );
};

export default StaffPage;

{
  /* <div className="container">
        <Section>
          <StaffDescription picture={image3} email="info@roines.se">
            <h3>Nicklas Lindberg - Ägare/VD</h3>
          </StaffDescription>
          <StaffDescription picture={image4}>
            <section>
              <h3>Lars Hultman</h3>
              <strong>Försäljning/Marknad/Kontor</strong>
            </section>
          </StaffDescription>
          <StaffDescription picture={image2}>
            <h3>Kent Leppänen</h3>

            <strong>Verkstad</strong>
          </StaffDescription>
          <StaffDescription picture={image1}>
            <h3>Björn Hultman</h3>

            <strong>Kundvård/Underhåll/System och Nätverk</strong>
          </StaffDescription>
        </Section>
      </div> */
}
