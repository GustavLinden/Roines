import React from 'react';
import CardWrapper from '../../CardWrapper/CardWrapper';
import SectionModule from '../../Section/Section';
import Card from '../../SmallCard/Card';
import CCplus from '../../../pictures/SummerTires/Familycar/crossclimateplus.png';
import Cp1 from '../../../pictures/SummerTires/Familycar/cinturato-p1.png';
import MP4 from '../../../pictures/SummerTires/Familycar/primacy4.png';
import CP7 from '../../../pictures/SummerTires/Familycar/cinturato-p7.png';
import Scropion from '../../../pictures/SummerTires/SuvorCrossover/scorpion-verde.png';
import PS4 from '../../../pictures/SummerTires/SportsCar/ps4.png';
import Pzero from '../../../pictures/SummerTires/SportsCar/pzero.png';
import PS4s from '../../../pictures/SummerTires/SportsCar/ps4s.png';
import Corsa from '../../../pictures/SummerTires/SportsCar/pzero-corsa.png';
import MCP2 from '../../../pictures/SummerTires/TrackDays/michelin-pilot-sport-cup-2.png';
import YOKO from '../../../pictures/SummerTires/TrackDays/yokohama_advan_a052.png';
import nicklas from '../../../pictures/thumbnail_IMG_8861.png';
import CardForPhoneOrEmail from '../../CardForPhoneorEmail/CardPhoneEmail';

const SummerTiers: React.FC = () => {
  return (
    <div>
      <SectionModule>
        <div className="has-text-centered">
          <h1>Sommardäck</h1>
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
        <h1 className="title has-text-centered">För Familjebilen:</h1>
        <CardWrapper>
          <Card
            img={CCplus}
            title="Michelin CrossClimate +"
            extLink="https://www.michelin.se/dack/michelin-crossclimateplus#sizes"
            extLinkName="Michelin"
          >
            <ul>
              <li>
                Sommardäcket som är anpassat för växlande{' '}
                <strong>nordiska</strong> förhållanden.
              </li>
              <li>
                Gummiblandningen är flexibel under stora variationer av
                temperatur för grepp i vått och torrt.
              </li>
              <li>
                Med MICHELIN CrossClimate+ får du Michelins erkänt långa
                livslängd.
              </li>
            </ul>
          </Card>
          <Card
            img={Cp1}
            title="Pirelli Cinturato P1 Verde"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/cinturato-p1-verde"
            extLinkName="mer information"
          >
            <ul>
              <li>Ökad säkerhet på både våta och torra vägar.</li>
              <li>Utmärkt komfort och ljudnivå i kupé.</li>
              <li>Lägre bränsleförbrukning och CO2-utsläpp.</li>
            </ul>
          </Card>
          <Card
            img={MP4}
            title="Michelin Primacy 4"
            extLink="https://www.roines.se/michelin-primacy-4"
            extLinkName="mer information"
          >
            <ul>
              <li>I genomsnitt 1800 mil längre körsträcka.</li>
              <li>Det nya däckmönstret ger +22% bättre avledning av vatten.</li>
              <li>
                Maximal prestanda från första till sista milen – utan avkall på
                livslängd.
              </li>
            </ul>
          </Card>
          <Card
            img={CP7}
            title="Pirelli Cinturato P7"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/cinturato-p7"
            extLinkName="mer information"
          >
            <ul>
              <li>
                Original monterad på exempelvis Audi, BMW, Mercedes, Volvo samt
                Volkswagen.
              </li>
              <li>
                Utmärkt vattenavledning för hög säkerhet vid risk för
                vattenplaning.
              </li>
              <li>Optimerad mönsterdesign med specifik pitch-sekvens.</li>
            </ul>
          </Card>
        </CardWrapper>
        <br />

        <h1>För SUV och crossover:</h1>
        <br />
        <CardWrapper>
          <Card
            img={Scropion}
            title="Pirelli Scorpion Verde"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/scorpion-verde"
            extLinkName="mer information"
          >
            <ul>
              <li>Pirellis produkt för SUV och Crossover-bilar.</li>
              <li>Bra stabilitet även för stora SUV.</li>
              <li>
                Det låga rullmotståndet och reducerade vikten ger minskad
                bränsleförbrukning och utsläpp av CO2.
              </li>
            </ul>
          </Card>
        </CardWrapper>
        <br />

        <h1>För sportbilen:</h1>
        <br />
        <CardWrapper>
          <Card
            img={PS4}
            title="
Michelin Pilot Sport 4"
            extLink="https://www.michelin.se/dack/michelin-pilot-sport-4#sizes"
            extLinkName="mer information"
          >
            <ul>
              <li>Nr 1 av sportdäcken vid bromsning på torrt och vått.</li>
              <li>
                MICHELIN Pilot Sport 4 är C-märkt gällande bränsleeffektivitet.
              </li>
              <li>Bättre livslängd än MICHELIN Pilot Sport 3.</li>
            </ul>
          </Card>
          <Card
            img={Pzero}
            title="Pirelli PZero"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/pzero"
            extLinkName="mer information"
          >
            <ul>
              <li>
                Asymetriskt däckmönster ger en förbättrad kontroll, handling och
                bromsförmåga.
              </li>
              <li>
                Däckets strukturella uppbyggnad ger förbättrad styrrespons.
              </li>
              <li>
                “S-formade” mönsterspår i slitbanan ger en lägre ljudnivå och
                ökad körkomfort.
              </li>
            </ul>
          </Card>
          <Card
            img={PS4s}
            title="Michelin Pilot Sport 4S"
            extLink="https://www.michelin.se/dack/michelin-pilot-sport-4-s#sizes"
            extLinkName="mer information"
          >
            <ul>
              <li>Maximal prestanda.</li>
              <li>
                Det bästa från MICHELIN Pilot Super Sport med förbättringar från
                MICHELIN CUP 2.
              </li>
              <li>
                Alla dimensioner har <strong>djup fälgskyddskant</strong>.
              </li>
              <li>Förbättrad livslängd.</li>
            </ul>
          </Card>
          <Card
            img={Corsa}
            title="Pirelli PZero Corsa"
            extLink="https://www.pirelli.com/tyres/sv-se/car/find-your-tyres/products-sheet/p-zero-corsa"
            extLinkName="mer information"
          >
            <ul>
              <li>
                Utvecklat i samarbete med tillverkare av högprestandabilar.
              </li>
              <li>
                "Dual-compound tread" teknologin ger perfekt fördelning mellan
                högfartsegenskaper och grepp.
              </li>
              <li>
                Extremt värmetålig racing-gummiblandning även vid maximal
                påfrestning.
              </li>
            </ul>
          </Card>
        </CardWrapper>
        <br />

        <h1>För trackdays:</h1>
        <br />
        <CardWrapper>
          <Card
            img={MCP2}
            title="Michelin Pilot Sport Cup 2"
            extLink="https://www.michelin.se/dack/michelin-pilot-sport-cup-2#sizes"
            extLinkName="mer information"
          >
            <ul>
              <li>Track longevity technology 2.0</li>
              <li>Bi-Compound Technology</li>
              <li>Djupare mönster jämfört med tidigare Cup-generationer.</li>
            </ul>
          </Card>
          <Card
            img={YOKO}
            title="Yokohama Advan A052"
            link="/tires/yokohamatires"
            linkName="Yokohama Däck"
          >
            <ul>
              <li>Mycket bra våtgrepp för ett bandäck.</li>
              <li>Fungerar även för vardagskörning.</li>
              <li>Finns även i många mindre dimensioner.</li>
            </ul>
          </Card>
        </CardWrapper>
      </SectionModule>
    </div>
  );
};

export default SummerTiers;
