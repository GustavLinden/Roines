import React from 'react';
import SiteTemplate from '../SiteTemplate';
import styles from './TiersHotell.module.scss';

const TiersHotell: React.FC = () => {
  return (
    <SiteTemplate>
      <article style={{ textAlign: 'left' }}>
        <div className="content">
          <h1>Däckhotell</h1>
          <p>Vi erbjuder däckhotell i Stockholm innerstad.</p>
          <p>I tjänsten däckhotell ingår:</p>
          <ul className={styles.listDecor}>
            <li>Förvaring en säsong </li>
            <li>Ett skifte av hjul.</li>
            <li>Tvätt av hjulen</li>
            <li>Okulär besiktning av däckens skick</li>
            <li>Kallelse via sms</li>
            <li>Ombokning via internet</li>
          </ul>

          <br />

          <div>
            <h2>Varför ska du välja oss?</h2>
            <strong>Pålitliga:</strong>
            <p>Över 50 års erfarenhet och gedigen kunskap om däck-hantering</p>
            <br />
            <strong>Hög service grad:</strong>
            Vi förvarar hjulen i egna lokaler vilket gör att vi kan hålla en
            högre service grad.
            <br />
            <br />
            <strong>Korta ledtider:</strong>
            Vi har färre däckhotellgäster per lyftbrygga än genomsnittet vilket
            gör att vi kan hjälpa er snabbare.
            <br />
            <br />
          </div>
          <h3>Pris för däckhotell:</h3>
        </div>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </article>
    </SiteTemplate>
  );
};

export default TiersHotell;
