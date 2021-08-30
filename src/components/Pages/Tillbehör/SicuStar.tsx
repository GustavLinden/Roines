import React from 'react';
import { Link } from 'react-router-dom';
import SiteTemplate from '../SiteTemplate';

const SicuStar: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Sicustar Hjullås</h1>
        <h3>Sicustar Silver</h3>
        <p>
          Den säkraste låssatsen av samtliga våra produkter, tack vare
          motståndskraften över 400nm mot vridningsvåld, hylsan kan inte skäras
          upp och bulthuvudet motstår alla brottförsök. Sicustar är certifierad
          av de viktigaste biltillverkarna och av THATCHAM Institutet.
        </p>
        <ul>
          <li>400 kombinationer</li>
          <li>Zink lager</li>
          <li>Korrosion beständig: 720/h, Norm ISO 9227:2006</li>
          <li>Torque Tension max. testad: 400 Nm</li>
          <li>Roterande hylsa och THATCHAM examined</li>
        </ul>

        <p></p>
        <p>
          <Link
            title="Sicustars hemsida"
            to="http://www.sicuplus.com/se/produkte/sicustar/"
          >
            Mera information
          </Link>
        </p>
      </article>
    </SiteTemplate>
  );
};
export default SicuStar;
