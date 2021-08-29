import React from 'react';
import SiteTemplate from '../SiteTemplate';
import micheling from '../../../pictures/michelin-quality-dealer.png';
const MichelinQualityDealer: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Michelin Quality Dealer</h1>
        <figure>
          <img
            src={micheling}
            alt="Michelin Quality Dealer 2021"
            title="Michelin Quality Dealer 2021"
          />
        </figure>

        <p>
          <strong>Michelins kvalitetscertifiering</strong>
        </p>

        <p>
          På uppdrag av Michelin kvalitetscertifierar SGS (Société Génerale
          Securite) svenska däckverkstäder. Utmärkelsen{' '}
          <q>Michelin Quality Dealer</q> ges till de däckspecialister som
          uppfyller höga krav på kompetens, kundvård och arbetsmiljö.
        </p>

        <p>
          Syftet med Michelins kvalitetscertifiering är att förbättra
          konsumenternas helhetsupplevelse av verkstadsbesöket och personalens
          arbetsmiljö. Det innebär att konsumenten ska mötas av professionell
          och kompetent personal med rätt utrustning för att utföra
          däckrelaterade tjänster. Det ska också vara tydliga priser på
          produkter och tjänster -vilket också innebär att kunden tydligt ska
          veta vad som ingår i priset.
        </p>

        <p>
          För personalen på certifierade verkstäder innebär certifieringen att
          arbetssätt och processer för intern personalvård formaliseras, likaså
          att deras arbete gentemot kund följer tydliga riktlinjer för att
          garantera kvalitet och säkerhet. Personalen ska också fortlöpande
          genomgå utbildning i däckteknik, kundbemötande och andra lämpliga
          ämnen för att de ska upprätthålla den höga professionella nivån.
        </p>

        <p>
          Michelins certifiering kan jämföras med en ISO-certifiering för
          däckspecialister, där Michelin har fastställt kriterierna. Med en
          officiell certifiering utförd av tredje part bidrar verkstäderna och
          Michelin till att höja hela branschens status och se till att
          kvaliteten på våra produkter når konsumenterna. En felaktigt monterat
          eller balanserat däck ger inte fordonet rätt prestanda och säkerhet.
        </p>

        <p>
          SGS hanterar certifieringen och gör årliga inspektioner för att
          säkerställa att verkstäderna fortsätter att uppfylla samma krav.
        </p>
        <p>
          <strong>
            Roine Lindberg Gummi AB är en Michelin kvalitetscertifierad
            däckverkstad i Stockholm
          </strong>
        </p>
      </article>
    </SiteTemplate>
  );
};

export default MichelinQualityDealer;
