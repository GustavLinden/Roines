import React from 'react';
import SiteTemplate from '../SiteTemplate';

const TierRepair: React.FC = () => {
  //Denna del ser för taskig ut och är svår att läsa
  return (
    <SiteTemplate>
      <article>
        <h1>Däckreparation</h1>
        <p>Vi gör en däckreparation på ditt däck på följade sätt:</p>
        <div>
          <ul>
            <li>Hjulet monteras av från bilen.</li>
            <li>Hjulet görs rent.</li>
            <li>En okulär besiktning görs på utsidan av däcket.</li>
            <li>Luft läckaget lokaliseras och markeras.</li>
            <li>Däcket demonteras från fälgen.</li>
            <li>
              En okulär besiktning görs av insidan av däcket. Vanligt med skador
              som inte syns från utsidan.
            </li>
            <li>
              Eventuellt föremål tas bort, hålet brotschas för rätt passform mot
              vår paraplyplugg.
            </li>
            <li>Insidan av däcket slipas där pluggen ska limmas.</li>
            <li>
              Pluggen limmas fast och därefter stryks en ny innerline sealer
              över hela pluggen samt ytor som är slipade.
            </li>
            <li>Däcket monteras tillbaka på fälgen igen.</li>
            <li>Kontroll av att däcket nu inte läcker luft.</li>
            <li>Hjulet balanseras och monteras dit på bilen igen.</li>
            <li>Lufttrycket kontrolleras på samtliga fyra hjul.</li>
            <li>Eventuell återställning av TPMS system utföres.</li>
            <li>Bilen är klar för leverans. Tidsåtgång 30-45min.</li>
          </ul>
        </div>
        <p>
          Observera att en däckreparation ska <strong>alltid</strong> göras från{' '}
          <strong>insidan</strong> av däcket.
        </p>
      </article>
    </SiteTemplate>
  );
};
export default TierRepair;
