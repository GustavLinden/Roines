import React from 'react';
import Presentation from '../Presentation/Presentation';

const RimTester: React.FC = () => {
  return (
    <Presentation>
      <div className="content">
        <iframe
          style={{ minHeight: '775px', minWidth: '688px' }}
          src="https://portal.alcar-wheels.com/cgi-bin/evoweb.dll/wheels?form=web_shop&content=availabilitybrowser&site=23&lang=1&authid=489b67c9d45c4a4552305c6785c3dd249b52c"
        />
      </div>
    </Presentation>
  );
};

export default RimTester;
