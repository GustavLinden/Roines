import React from 'react';
import SiteTemplate from '../SiteTemplate';

const EnvironmentalPolicy: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Miljöpolicy</h1>
        <p>
          Roine Lindberg Gummi AB ska verka för en bättre Miljö dels genom
          löpande rutiner som är enkla att efterfölja samt en ambition om att vi
          hela tiden kan bli bättre och utveckla det systematiska miljöarbetet.
        </p>
        <p>
          Vad beträffar våra leverantörer så ställer vi krav på att dessa har
          Miljöpolicy alt ingår i någon form av aktivt certifieringsarbete. Vid
          inköp av förbrukningsmaterial såsom ex: Kemikalier kräver vi att dessa
          är godkända av Kemikalieinspektionen samt att de kemikalier som
          innehåller petrolium hamnar i en oljeavskiljare på vägen ut i allmänna
          avloppet.
        </p>
        <p>
          Då vi aktivt rekomenderar våra kunder däck som har lägre rullmotstånd
          än genomsnittet i syfte att minska koldioxidhalten krävs det av våra
          däckleverantörer att de har ett brett sortiment som svarar upp mot
          våra krav.
        </p>
        <p>
          Nicklas Lindberg
          <br />
          Roine Lindberg Gummi AB
        </p>
      </article>
    </SiteTemplate>
  );
};

export default EnvironmentalPolicy;
