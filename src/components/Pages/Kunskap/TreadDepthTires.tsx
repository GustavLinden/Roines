import React from 'react';
import SiteTemplate from '../SiteTemplate';

const TreadDepthTiers: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Mönsterdjup</h1>
        <h2>Mönsterdjup vid sommarväglag</h2>
        <p>
          Däck ska ha ett mönsterdjup&nbsp;på minst 1,6 mm i däckets
          huvudmönster. Tänk på att mönsterdjupet bör vara{' '}
          <strong>minst 3 mm</strong> för att ge bra friktion vid fuktig
          vägbana.
        </p>

        <h2>Mönsterdjup&nbsp;vid vinterväglag</h2>
        <p>
          Vid vinterväglag under perioden 1 december – 31 mars ska mönsterdjupet
          vara minst 3 mm på däck till personbil klass I (*), lätt lastbil, lätt
          buss och personbil klass II&nbsp;med en totalvikt av högst 3,5 ton
          samt släpvagn som dras av dessa fordon.
        </p>
        <p>
          För lastbil, buss och personbil klass II&nbsp;med totalvikt över 3,5
          ton ska mönsterdjupet vid vinterväglag&nbsp;vara minst 5 millimeter på
          fordonets samtliga däck&nbsp;under&nbsp;perioden 1 december till och
          med 31 mars. Kravet gäller inte för&nbsp;tillkopplade släpfordon.
        </p>
        <p>
          *) till personbil klass&nbsp;I hör samtliga fordon klassificerade som
          personbil och som inte tillhör personbil klass II (husbil).
        </p>

        <h2>Inga krav på att däck ska vara nya&nbsp;</h2>
        <p>
          Det finns inget ålderskrav&nbsp;för däck. Vid de undersökningar som
          har gjorts har man inte kunnat se någon&nbsp;tydlig försämring av
          gamla vinterdäcks friktionsegenskaper. Men det är viktigt att
          mönsterdjup och dubbutstick är bra och att däcken lagras svalt, torrt
          och mörkt.
        </p>

        <h2>Bästa däcken bak</h2>
        <p>
          De däck som har det största mönsterdjupet eller bedöms ha det bästa
          väggreppet bör vara monterade bak på fordonet för att minska risken
          för sladd vid bromsning och i svängar. Däcken med största
          dubbutsticket bör monteras bak. Detta gäller både fram- och
          bakhjulsdrivna bilar.
        </p>

        <h2>Kolla lufttrycket ofta!</h2>
        <p>
          Fel lufttryck kan påverka köregenskaper, bränsleförbrukning och
          däckens livslängd. Rätt lufttryck för däcken till din bil kan du hitta
          i bilens instruktionsbok.
        </p>
        <p>Källa Transportstyrelsen.</p>
      </article>
    </SiteTemplate>
  );
};
export default TreadDepthTiers;
