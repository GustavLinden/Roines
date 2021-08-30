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

const WinterTiers: React.FC = () => {
  return (
    <div>
      <SectionModule>
        <div className="has-text-centered">
          <h1>Vinterdäck</h1>
          <br />
          <h3>
            <strong>Vi på Roine Lindberg Gummi rekommenderar:</strong>
          </h3>
        </div>
        <h1 className="title has-text-centered">Dubbade däck:</h1>
        <CardWrapper>
          <Card
            img={MXIN4}
            title="Michelin X-Ice North 4"
            extLinkName="dimensioner"
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
            extLinkName="mer info"
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
            extLinkName="
          Pirelli Ice Zero Fr"
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
          <Card img={CVC7} title="ContiVikingContact 7" />
        </CardWrapper>
        <br />
        <h1 className="title has-text-centered">Mellaneuropeisk friktion:</h1>
        <CardWrapper>
          <Card img={MA6} title="Michelin Alpin 6" />
          <Card img={MPA4} title="Michelin Pilot Alpin 4" />
          <Card img={MPA5} title="Michelin Pilot Alpin 5" />
        </CardWrapper>
      </SectionModule>
    </div>
  );
};

export default WinterTiers;
