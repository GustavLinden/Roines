import React from 'react';
import SiteTemplate from '../SiteTemplate';

const About: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Om Roine Lindberg Gummi</h1>

        <p>
          Roine Lindberg Gummi AB finns på Kungstensgatan 12 som ligger i
          gränsområdet av Norrmalm, Östermalm och Vasastan. Vår
          däckverkstad&nbsp;kan hjälpa dig med däck och fälg till din bil
          oavsett om det gäller sommardäck eller vinterdäck.
        </p>

        <p>
          Vi säljer de flesta kända däckfabrikat. Våra favoritdäck är Michelin
          och Pirelli som har mycket bra lösningar till de allra flesta kunder.
          Vi har även däckförvaring så kallat däckhotell. Om du har
          fått&nbsp;punktering hjälper vi dig med en däckreparation. Vi gör även
          framvagnsinställning även kallat hjulinställning på din bil. Vi
          hjälper dig även med däckservice på platsen i innerstan.
        </p>

        <p>
          Vi försöker alltid hitta rätt däck till din bil efter dina
          förutsättningar vad gäller biltyp och körsätt hos dig som förare.
        </p>

        <p>
          Vi är en av Michelin kvalitetscertifierad verkstad! (läs mer under
          länken{' '}
          <a href="https://www.roines.se/michelin-quality-dealer">
            Michelin Quality Dealer
          </a>
          )
        </p>
      </article>
    </SiteTemplate>
  );
};
export default About;
