import React from 'react';
import SiteTemplate from '../SiteTemplate';
import etikett from '../../../pictures/etikett.jpg';
import fuel from '../../../pictures/fuel-part.jpg';
import braking from '../../../pictures/braking-part.jpg';
import noice from '../../../pictures/noise-part.jpg';

const TiresMarking: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Däckmärkning</h1>
        <figure>
          {' '}
          <img
            title="Energimärkning av däck"
            src={etikett}
            alt="Energimärkning av däck"
          />
        </figure>
        Från den 1 november 2012 ska däck energimärkas enligt EU-direktiv nr.
        1222/2009.
        <br />
        Den obligatoriska märkningen omfattar däck till personbilar och lätta
        lastbilar (undantaget dubbdäck).
        <br />
        Energimärkningen visar konsumenten information om energieffektivitet,
        våtgrepp och buller utanför bilen.
        <br />
        De symboler som används för märkningen kanske du redan känner igen
        eftersom de även används för hushållsapparater och sedan en tid tillbaka
        även för nya bilar.
        <h2>Så uttyder du däckmärkningen</h2>
        <h3>Bränsleförbrukning</h3>
        <p>
          Till vänster på däckmärkningen hittar vi en
          energieffektivitetsgradering som visar däckets inverkan på
          bränsleförbrukningen och CO<sub>2</sub>-utsläppen. Däcken svarar för
          ca 20 % av bilens bränsleförbrukning, främst beroende på sitt
          rullmotstånd. En sänkning av rullmotståndet kan därför förbättra
          energieffektiviteten för vägtransporterna avsevärt och på så sätt
          sänka CO<sub>2</sub>-utsläppen. Det är faktiskt så att det är däckets
          rullmotstånd, mätt i en maskin, som bestämmer dess
          energieffektivitetsklassificering.
        </p>
        <h4>Vad är skillnaden mellan däck i klass A resp. G?</h4>
        <figure>
          {' '}
          <img
            src={fuel}
            alt="Bränsle effektivitet"
            title="Bränsle effektivitet"
          />
        </figure>
        Skillnaden i rullmotstånd är avsevärd och avspeglar den tekniska
        utvecklingen sedd över flera generationer av däck.
        <br />
        <br />
        Skillnaden i bränsleförbrukning för en bil med däck av klass A jämfört
        med klass G är ca 0,5 liter per 100 km. Det innebär ca 80 liter bränsle
        sparas per år vid en körsträcka om 15.000 km/år.
        <br />
        <br />
        Besparingen blir då mer än 1200 kronor per år för en bensindriven bil
        vid ett bensinpris på ca 15 kr/liter. Det här är inte bara en betydande
        besparing för konsumenten, utan innebär också stora fördelar för miljön
        genom att CO<sub>2</sub>-utsläppen sänks med 12 g/km.
        <br />
        <h3>Inbromsning på vått underlag</h3>
        <figure>
          {' '}
          <img
            src={braking}
            alt="Bromsgrepp vid våt vägbana."
            title="Bromsgrepp vid våt vägbana."
          />
        </figure>
        Till höger på däckmärkningen hittar vi en skala som visar däckets
        prestanda vid inbromsning på vått underlag. Mätningarna utförs på ett
        fordon i enlighet med betingelserna i EU-direktivet (hastighet,
        underlagets karaktär, vattendjup, temperatur…).
        <br />
        <br />
        Klassificeringen görs genom att prestandan för det testade däcket
        jämförs med ett referensdäck.
        <br />
        <br />
        Vad är skillnaden mellan däck i klass A resp. F? (för denna prestanda,
        som har med säkerheten att göra, kommer klass G inte att användas)
        <br />
        <br />
        Skillnaden i bromssträcka på vått underlag mellan en bil med klass A
        resp. klass F-däck är över 10 meter vilket då motsvarar drygt 2st
        billängder.
        <h3>Ljud utvändigt</h3>
        <figure>
          <img src={noice} alt="Bullernivå" title="Bullernivå" />
        </figure>
        Trafikbuller är en stor källa till irritation. På den nedre delen av
        däckmärkningen ser vi vilken ljudnivå däcket ger ifrån sig utanför bilen
        (alltså inte det däckbuller som föraren hör i kupén) mätt i decibel.
        <h2>Miniminivåer</h2>
        <p>
          Denna europeiska bestämmelse syftar till övergripande förbättringar på
          marknaden när det gäller ovanstående 3 faktorer. Som en ytterligare
          åtgärd för att förbättra däckprestandan kommer det fr.o.m. den 1/11
          2012 inte längre vara möjligt för tillverkarna att homologera nya däck
          av klass G betr. rullmotstånd eller klass F betr. inbromsning på vått
          underlag, och fr.o.m. den 1/11 2014 får däck av denna typ inte längre
          säljas. (På motsvarande sätt kommer ljudnivågränserna att skärpas, men
          de undre gränserna kommer inte att gälla alla däck förrän i november
          2016).
        </p>
        <p>Källa Michelin</p>
      </article>
    </SiteTemplate>
  );
};
export default TiresMarking;
