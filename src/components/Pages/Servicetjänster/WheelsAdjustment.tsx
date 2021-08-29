import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from '../../HeaderLink/HeaderLink';
import SiteTemplate from '../SiteTemplate';

const WheelAdjustment: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Hjulinställning</h1>
        <h2>Allmänt om hjulinställning:</h2>
        <p>
          Tidigare pratade man ofta om framvagnsinställning då de flesta bilar
          endast kunde justeras på framaxeln. Idag mäter vi alltid alla 4 hjulen
          vilket gör att vi säger 4-hjulsmätning eller hjulinställning istället
          för framvagnsinställning. Att även bakvagnen står rätt är minst lika
          viktigt som framvagnen och ska man med säkerhet kunna justera in
          ratten så att den står korrekt, så är en rak bakvagn en förutsättning
          för detta. Alla bilar har dock inte möjligheten att justera i
          bakvagnen. Det skiljer sig mellan olika bilar vilka justerings
          möjligheter som finns.
        </p>
        <p>
          Hur ofta man behöver göra en hjulinställning skiljer sig mycket på bil
          modell, hur du kör bilen och hur många mil bilen har gått. Vad som
          tyvärr är alltför vanligt är att helt nya bilar har fel
          hjulinställning.
        </p>
        <p>
          Hjulinställningen bör alltid göras på sommardäcken om det är så att
          man har olika dimension på sommar och vinterdäcken. Ett sneslitage
          syns mer på sommardäcken än på vinterdäcken då de är betydligt mjukare
          och då mer förlåtande.
        </p>
        <p>
          Att göra en hjulinställning är en bra investering då livslängden på
          däcken ökar samt att bränsleförbrukning kan minska något.
        </p>
        <h2>Vad är fördelen med att göra en hjulinställning?</h2>
        <ul className="has-text-left">
          <li>Mindre däckslitage.</li>
          <li>Sliter mindre på bilens leder och bussningar.</li>
          <li>Bilen blir mindre spårkänslig och mer kursstabil.</li>
          <li>Kör komforten ökar, bilen känns trevligare på vägen.</li>
          <li>
            Bilen kan rulla lättare vilket resulterar i mindre
            bränsleförbrukning.
          </li>
          <li>
            Du spar pengar när du ökar livsländen på dina däck då däckslitaget
            minskar samt att bränsleförbrukningen kan minska.
          </li>
        </ul>
        <h2>När behöver man göra en hjulinställning.</h2>
        <ul>
          <li>Däcken slits onormalt mycket på någon av kanterna.</li>
          <li>Ratten sitter snett när man kör rakt fram.</li>
          <li>Bil drar alltid åt ett och samma håll.</li>
          <li>Bilen känns mycket spårkänslig.</li>
          <li>Vill ha bättre sidogrepp vid bankörning.</li>
        </ul>
        <h2>Varför ska du välja Roine Lindberg Gummi AB:</h2>
        <ul>
          <li>Vi har över 10års erfarenhet av hjulinställning.</li>
          <li>Professionell mätutrusning som mäter alla 4 hjulen.</li>
          <li>Vi gör alltid fälgskevskompensation.</li>
          <li>Du får ett protokoll som vi gärna förklarar för dig.</li>
          <li>
            Vi har utbildad och analytisk personal som visar stort intresse för
            din bil.
          </li>
        </ul>
        <h2>Erbjudande</h2>
        <p>
          Vi kontrollerar gärna er nya bil och om bilens värden är korrekta
          debiterar vi ingen kostnad för detta. Om bilen dock behöver justeras
          debiterar vi efter normal{' '}
          <span>
            <Link to="/services/prices">prislista</Link>
          </span>{' '}
          .
        </p>
      </article>
    </SiteTemplate>
  );
};
export default WheelAdjustment;
