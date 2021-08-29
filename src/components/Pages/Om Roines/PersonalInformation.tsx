import React from 'react';
import SiteTemplate from '../SiteTemplate';

const PersonalInformation: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Personuppgiftspolicy</h1>
        <p>
          Roine Lindberg Gummi AB värnar om din personliga integritet och
          strävar alltid att hålla en hög nivå av dataskydd. Vi säljer aldrig
          dina personuppgifter vidare till ett annat företag. I denna policy får
          du information om vilka personuppgifter vi samlar in och varför vi gör
          det, dina rättigheter och hur du kan göra dem gällande. Du är alltid
          välkommen att kontakta oss vid eventuella frågor.
        </p>
        <p>
          Vid bokning samt kontaktformulär registrerar vi namn, e-post,
          telefonnummer samt registreringsnummer. För de kunder som vi förvarar
          hjul sparar vi även addressuppgifter. Dessa uppgifter samlas in för
          att vi ska kunna fullgöra våra åtaganden.
        </p>
        <p>
          Du har enligt dataskyddsförordningen{' '}
          <a
            href="https://www.datainspektionen.se/lagar--regler/dataskyddsforordningen/"
            title="Dataskyddsförordningen (GDPR, The General Data Protection Regulation)"
            target="_blank"
          >
            (GDPR)
          </a>{' '}
          rätt att begära utdrag ur vårt register om dina uppgifter, samt få
          dessa rättade om de är felaktiga, ofullständiga eller missvisande. Du
          har även rätt att få dina uppgifter raderade.
        </p>
        <p>
          Uppgifter om kunder som har varit inaktiva i mer är 36 månader gallras
          kontinuerligt.
        </p>
        <p>
          Personuppgiftsansvarig är
          <br />
          Roine Lindberg Gummi AB
          <br />
          Orginisationsnummer 556498-1156
          <br />
          Kungstensgatan 12
          <br />
          113 57 Stockholm.
        </p>

        <h2>Cookies</h2>
        <p>
          En cookie (webbkaka) är en liten textfil som sparas i din webbläsare
          när du besöker en webbplats. Cookies används på de flesta webbplatser
          för att säkerställa funktioner och underlätta för besökaren. Det finns
          två sorter: den ena sparar en fil under en längre tid på din dator och
          den andra (session cookie) används temporärt och försvinner när du
          stänger din webbläsare.
        </p>
        <p>
          Roine Lindberg Gummi AB använder endast tillfälliga webbkakor (session
          cookies). Informationen raderas när du stänger webbläsaren.{' '}
        </p>
        <p>
          Vill du stänga av användningen av cookies gör du det i din webbläsare.
        </p>
      </article>
    </SiteTemplate>
  );
};

export default PersonalInformation;
