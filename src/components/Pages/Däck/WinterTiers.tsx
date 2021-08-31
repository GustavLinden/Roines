import React from 'react';
import CardWrapper from '../../CardWrapper/CardWrapper';
import SectionModule from '../../Section/Section';
import Card from '../../SmallCard/Card';
import MXIN4 from '../../../pictures/WinterTires/Dubbat/michelin-x-ice-north-4.png';
import PIZ2 from '../../../pictures/WinterTires/Dubbat/ice-zero2.png';
import PIZF from '../../../pictures/WinterTires/NordicFriction/ice-zero-fr.png';
import CVC7 from '../../../pictures/WinterTires/NordicFriction/continental-viking-contact-7.png';
import MA6 from '../../../pictures/WinterTires/MiddleEuropeanFriction/michelin-alpin-6.png';
import MPA4 from '../../../pictures/WinterTires/MiddleEuropeanFriction/pa4.png';
import MPA5 from '../../../pictures/WinterTires/MiddleEuropeanFriction/michelin-pilot-alpin-5.png';
import StaffDescription from '../../StaffDescription/StaffDescription';
import nicklas from '../../../pictures/thumbnail_IMG_8861.png';
import CardForPhoneOrEmail from '../../CardForPhoneorEmail/CardPhoneEmail';

const WinterTiers: React.FC = () => {
  return (
    <div>
      <SectionModule>
        <div className="has-text-centered">
          <h1>Vinterdäck</h1>
          <br />
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <CardForPhoneOrEmail
                title="Nicklas Lindberg"
                img={nicklas}
                email="info@roines.se"
                phone="08888888"
              >
                <strong>
                  Jag heter Nicklas och mig kan du kontakta om du har
                  funderingar kring vilka däck som passar bäst för just din bil.
                </strong>
              </CardForPhoneOrEmail>
            </div>
            <div className="column"></div>
          </div>
        </div>
        <h1 className="title has-text-centered">Dubbade däck:</h1>
        <CardWrapper>
          <Card
            img={MXIN4}
            title="Michelin X-Ice North 4"
            extLinkName="mer information"
            extLink="https://www.michelin.se/auto/tyres/michelin-x-ice-north-4#sizes"
          >
            <ul>
              <li>
                Exceptionell acceleration och bromsning på is tack vare 250
                dubbar.
              </li>
              <li>
                Dubb inspirerad av WRC rally ger grepp och prestanda över tid.
              </li>
              <li>
                Nytt däckmönster som optimerar greppet under alla
                vinterförhållanden.
              </li>
            </ul>
          </Card>
          <Card
            img={PIZ2}
            title="Pirelli Ice Zero2"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/ice-zero-2"
            extLinkName="mer information"
          >
            <ul>
              <li>Balans och stabilitet vid acceleration och inbromsning</li>
              <li>
                Styvare däckblock på ytterkant och vid dubb för bättre grepp och
                respons
              </li>
            </ul>
          </Card>
        </CardWrapper>
        <br />
        <h1 className="title has-text-centered">Nordisk friktion:</h1>
        <CardWrapper>
          <Card
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/ice-zero-fr"
            extLinkName="mer information"
            img={PIZF}
            title="
Pirelli Ice Zero Fr"
          >
            <ul>
              <li>
                3D sajpteknologi ger stabila mönsterklackar även vid högre
                hastigheter
              </li>
              <li>
                Specifika sajpningar som snabbt avlägsnar vattenfilmen för
                maximalt grepp på isiga vägar
              </li>
              <li>Ökat grepp på alla underlag och optimerad dragkraft</li>
            </ul>
          </Card>
          <Card
            img={CVC7}
            title="ContiVikingContact 7"
            extLink="https://www.continental-däck.se/personbil/daeck/vikingcontact-7"
            extLinkName="mer information"
          >
            <ul>
              <li>
                Unik gummiblandning med perfekt grepp på snöiga, isiga och våta
                vintervägar
              </li>
              <li>
                Ny mönsterdesign ger säkrare skydd mot slask och vattenplaning
              </li>
              <li>
                Stabilitet och säkra köregenskaper på alla typer av vintervägar
              </li>
            </ul>
          </Card>
        </CardWrapper>
        <br />
        <h1 className="title has-text-centered">Mellaneuropeisk friktion:</h1>
        <CardWrapper>
          <Card
            img={MA6}
            title="Michelin Alpin 6"
            extLink="https://www.michelin.se/dack/michelin-alpin-6"
            extLinkName="mer information"
          >
            <ul>
              <li>Optimerat för våta till snöiga vägbanor.</li>
              <li>Mer stabilitet och balans.</li>
              <li>Lägre bullernivå.</li>
            </ul>
          </Card>
          <Card
            img={MPA4}
            title="Michelin Pilot Alpin 4"
            extLink="http://www.michelin.se/dack/michelin-pilot-alpin-pa4"
            extLinkName="mer information"
          >
            <ul>
              <li>Vinterdäck för bilar med hög prestanda.</li>
              <li>Maximal stabilitet, balans och styrprecision.</li>
              <li>Godkänt av Porsche, Mercedes och BMW.</li>
            </ul>
          </Card>
          <Card
            img={MPA5}
            title="Michelin Pilot Alpin 5"
            extLink="https://www.michelin.se/dack/michelin-pilot-alpin-5"
            extLinkName="mer information"
          >
            <ul>
              <li>
                Senaste generationen gummiblandning ger ett bättre våt-, torr-
                och snögrepp
              </li>
              <li>
                En ny blandning under slitbanan minskar bränsleförbrukningen
              </li>
              <li>Premium Touch-design utmed hela däcksidan</li>
            </ul>
          </Card>
        </CardWrapper>
      </SectionModule>
    </div>
  );
};

export default WinterTiers;
