import React from 'react';
import { Link } from 'react-router-dom';
import SiteTemplate from '../SiteTemplate';

const AutoSocks: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Autosock</h1>
        <h3>
          {' '}
          AutoSock är det enkla, effektiva och miljövänliga alternativet till
          snökedjor
        </h3>
        <p>
          AutoSock är en "strumpa" som träs över hjulet och ger maximal friktion
          på snö och is. Hemligheten är "High Performance Fiber". Om du har
          funderat på traditionella snökedjor av stål, eller om du till och med
          har monterat sådana, tänk om! Monteringen är genial. Trä på AutoSock
          upptill på hjulet och dra ner så långt det går. Rulla sedan framåt
          eller bakåt så att hjulet snurrar ett halvt varv, och trä sedan på den
          sista biten. AutoSock monteras på knappt två minuter! Prova gärna
          innan resan så klaras det även galant när det är kolsvart ute!
        </p>
        <p>
          Vi lagerför storlekarna:
          <br />
          54, 58, 645, 685, 690, 695, 697, 698, 699
        </p>

        <p>
          Till Autosocks{' '}
          <Link title="Autosocks hemsida" to="http://www.autosock.nu">
            hemsida
          </Link>
        </p>
      </article>
    </SiteTemplate>
  );
};
export default AutoSocks;
