import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          style={{
            position: 'relative',
            textAlign: 'right',
            height: '100%',
            width: '100%',
            minHeight: '300px',
          }}
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=kungstensgatan%2012&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          margin-height="0"
          margin-width="0"
        ></iframe>
        <a href="https://123movies-to.org"></a>
        <br />
        <a
          href="https://www.embedgooglemap.net"
          style={{
            overflow: 'hidden',
            background: 'none!important',
            height: '500px',
            width: '600px',
          }}
        ></a>
      </div>
    </div>
  );
};
export default Map;
