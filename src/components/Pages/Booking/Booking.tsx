import React from 'react';
import Presentation from '../../Presentation/Presentation';
import SectionModule from '../../Section/Section';

const Booking: React.FC = () => {
  const [hasBookingRef, sethasBookingRef] = React.useState(false);
  return (
    <Presentation>
      <div className="content">
        <div className="title">
          <button
            className="button is-primary"
            onClick={() => sethasBookingRef(!hasBookingRef)}
          >
            {hasBookingRef
              ? 'Jag har ingen referens/ vill boka tid'
              : 'Jag har boknings referens.'}
          </button>{' '}
        </div>
        <iframe
          style={{ minHeight: '775px', minWidth: '688px' }}
          src={`https://roinelindberg.compilator.com/public/cms?Id=1&CompanyId=5ab30405-395f-47bf-9b5f-6db4f7286a8f&branchId=1${
            hasBookingRef ? '&changeBooking=true' : ''
          }`}
        />
      </div>
    </Presentation>
  );
};
export default Booking;
