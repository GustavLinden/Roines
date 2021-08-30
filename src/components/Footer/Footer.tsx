import React from 'react';
import './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer has-background-grey-darker has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="is-size-4 has-text-center has-text-white">Adress</h1>
            <span className="is-size-6 has-text-center has-text-white">
              Roine Lindberg Gummi AB
            </span>
            <br />
            <span className="is-size-6 has-text-center has-text-white">
              Kungstensgatan 12
            </span>{' '}
            <br />
            <span className="is-size-6 has-text-center has-text-white">
              113 57 Stockholm
            </span>
            <br />
          </div>
          <div className="column">
            <h1 className="is-size-4 has-text-white">Kontakt</h1>
            <span className="is-size-6 has-text-center has-text-white">
              <a href="tel:08-673 56 95">08-673 56 95</a>
            </span>
            <br />
            <span className="is-size-6 has-text-center has-text-white">
              <a href="tel:0704-32 31 50">0704-32 31 50</a>
            </span>{' '}
            <br />
            <span className="is-size-6 has-text-center has-text-white">
              <a href="mailto:info@roines.se">info@roines.se</a>
            </span>{' '}
            <br />
            <span className="is-size-6 has-text-center has-text-white">
              <span className="has-text-center tile-is-ancestor">
                <br />
              </span>
            </span>
          </div>
          <div className="column">
            <h1 className="is-size-4  has-text-white">Öppettider</h1>
            <span className="is-size-6 has-text-center has-text-white">
              Måndag - Torsdag : 7.00 - 16.30 <br />
              Fredag: 7-15
            </span>
            <br />
            <span className="is-size-6 has-text-center has-text-white"></span>{' '}
            <br />
            <span className="is-size-6 has-text-center has-text-white"></span>
          </div>
        </div>
        <div className="columns">
          <div className="column ">INSERT COPYRIGHTS</div>
          <div className="column is-4 has-text-centered">
            <a
              className="mr-4"
              style={{ fontSize: '32px' }}
              href="https://sv-se.facebook.com/Roine-Lindberg-Gummi-AB-196509367083545/"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              style={{ marginLeft: '4px', fontSize: '32px' }}
              href="https://www.instagram.com/roinesgummi/"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
