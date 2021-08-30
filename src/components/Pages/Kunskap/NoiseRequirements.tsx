import React from 'react';
import SiteTemplate from '../SiteTemplate';

const NoiseRequirements: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Bullerkrav</h1>

        <h2>Skärpta bullerkrav från 1 oktober 2009</h2>
        <p>
          Nya däck som tagits i bruk på bil och släpvagn den 1 oktober 2009
          eller senare ska uppfylla skärpta bullerkrav och vara typgodkända
          enligt EG-direktiv 92/23/EEG eller ECE-reglemente 117. Det innebär att
          däcken ska vara S-märkta (sound) tillsammans med E-märkningen.
          Avsikten med kravet är att begränsa det buller som uppkommer vid
          kontakten mellan däck och vägbana.
        </p>
        <h4>Undantagna från bullerkraven är:</h4>
        <ul>
          <li>Regummerade däck</li>
          <li>Vinterdäck med dubbar</li>
          <li>Däck avsedda för hastigheter under 80 km/tim</li>
          <li>
            Däck med fälgdiameter som är 10" och mindre samt 25" och större
          </li>
          <li>Reservdäck för tillfälligt bruk.</li>
        </ul>
        <h3>Krav</h3>
        <p>
          De bullernivåer med gränsvärden i dB(A) som gäller för däck i olika
          klasser och kategorier, infördes genom ändringsdirektiv 2001/43/EG som
          trädde i kraft den 4 augusti 2001. Motsvarande bullerkrav finns i
          ECE-reglemente 117 som trädde i kraft den 6 april 2005.
          Övergångsbestämmelser har gällt fram till den 1 oktober 2009 då
          flertalet nya däck ska uppfylla de skärpta kraven.
        </p>

        <p>Källa Transportstyrelsen.</p>
      </article>
    </SiteTemplate>
  );
};
export default NoiseRequirements;
