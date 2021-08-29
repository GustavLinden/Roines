import React from 'react';
import SiteTemplate from '../SiteTemplate';

const Pricing: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Prislista däckservice</h1>

        <table>
          <thead>
            <tr>
              <th>Service personbil</th>
              <th>Pris/st</th>
              <th>Pris/4st</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hjulskifte</td>
              <td>113.00</td>
              <td>450.00</td>
            </tr>
            <tr>
              <td>Hjulbalans inkl skifte och hjultvätt</td>
              <td>263.00</td>
              <td>1052.00</td>
            </tr>
            <tr>
              <td>Punkteringslagning inkl skifte och hjultvätt</td>
              <td>550.00</td>
              <td></td>
            </tr>
            <tr>
              <td>Demontering, montering, balansering och skifte</td>
              <td>400.00</td>
              <td>1600.00</td>
            </tr>{' '}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Service SUV/LL</th>
              <th>Pris/st</th>
              <th>Pris/4st</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hjulskifte</td>
              <td>144.00</td>
              <td>575.00</td>
            </tr>
            <tr>
              <td>Hjulbalans inkl skifte och hjultvätt</td>
              <td>344.00</td>
              <td>1376.00</td>
            </tr>
            <tr>
              <td>Punkteringslagning inkl skifte och hjultvätt</td>
              <td>675.00</td>
              <td></td>
            </tr>
            <tr>
              <td>Demontering, montering, balansering och skifte</td>
              <td>494.00</td>
              <td>1975.00</td>
            </tr>{' '}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Hjulinställning personbil / SUV</th>
              <th>Pris/bil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4-hjulsmätning samt justering</td>
              <td>från 1200 kr</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Däckhotell</th>
              <th>Pris/säsong</th>
            </tr>
            <tr>
              <td>Personbil Small</td>
              <td>1 470kr</td>
            </tr>
            <tr>
              <td>Personalbil Medium</td>
              <td>1 635kr</td>
            </tr>
            <tr>
              <td>SUV / Large</td>
              <td>1 885kr</td>
            </tr>
            <tr>
              <td>SUV / X-Large</td>
              <td>2 125kr</td>
            </tr>
          </thead>
        </table>

        <p style={{ width: '100%', textAlign: 'center', fontSize: 'smaller' }}>
          * Inkluderar 1st säsongsförvaring, hjulskifte, tvätt av hjulen samt
          kontroll av skick.
        </p>
      </article>
    </SiteTemplate>
  );
};
export default Pricing;
