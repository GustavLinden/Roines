import React from 'react';
import SiteTemplate from '../SiteTemplate';

const ReplaceTires: React.FC = () => {
  return (
    <SiteTemplate>
      <article>
        <h1>Att ersätta däck</h1>
        <h2>Typgodkända däck</h2>
        <p>
          När du köper nya däck ska du se till att de är typgodkända: antingen
          E-märkta eller e-märkta. Däcken ska vara typgodkända enligt
          ECE-reglemente 30, EG-direktiv 92/23/EEG eller ECE-reglemente 108
          (regummerade däck). Andra regler gäller för däck till fordon som är av
          1980 års modell eller äldre.
        </p>

        <h2>Belastningsförmåga</h2>
        <p>
          Däcken ska ha en belastningsförmåga som motsvaras av bilens största
          tillåtna axelbelastning.
        </p>
        <p>
          På E- eller e-märkta däck anges en belastningskod (Load Capacity
          Index) på däckets sida. Till exempel innebär belastningskod 86 att
          däcket klarar en belastning på 530 kg.&nbsp;
        </p>

        <h2>Hastighetskapacitet</h2>
        <p>
          <strong>Sommardäck</strong> till följande bilar ska ha en
          hastighetskapacitet som överensstämmer med eller är högre än bilens
          högsta konstruktiva hastighet:&nbsp;
        </p>
        <ul>
          <li>EG-typgodkända personbilar</li>
          <li>
            nationellt godkända personbilar som har tagits i bruk den 1 januari
            1996 eller senare.
          </li>
        </ul>
        <p>
          På övriga personbilar behöver sommardäcken inte vara dimensionerade
          för högre hastighet än 180 km/tim.
        </p>
        <p>
          <strong>Vinterdäck</strong> till EG-typgodkända personbilar får vara
          dimensionerade för en högsta hastighet av minst 160 km/tim.
        </p>
        <p>
          Nationellt godkända personbilar som tagits i bruk före den 1 januari
          2002 behöver dock inte ha vinterdäck som är dimensionerade för högre
          hastighet än 130 km/tim.
        </p>
        <p>
          På <strong>E- eller e-märkta däck</strong> anges hastighetskapaciteten
          med en beteckning på däckets sida. Här följer exempel på några vanliga
          hastighetsbeteckningar:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Q</th>
              <td>=</td>
              <th>160</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>R</th>
              <td>=</td>
              <th>170</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>S</th>
              <td>=</td>
              <th>180</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>T</th>
              <td>=</td>
              <th>190</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>H</th>
              <td>=</td>
              <th>210</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>V</th>
              <td>=</td>
              <th>240</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>W</th>
              <td>=</td>
              <th>270</th>
              <td>km/h</td>
            </tr>
            <tr>
              <th>Y</th>
              <td>=</td>
              <th>300</th>
              <td>km/h</td>
            </tr>
          </tbody>
        </table>

        <p>
          Däckets hastighetsbeteckning i registreringsbeviset är inte samma sak
          som bilens högsta konstruktiva hastighet. Uppgift om bilens högsta
          hastighet kan finnas i registreringsbeviset. Om det inte finns där,
          kan du vända dig till&nbsp;en märkesrepresentant för besked.
        </p>

        <h2>Typ av däck</h2>
        <p>
          Alla däck på&nbsp;ett fordon ska vara av samma typ (diagonaldäck,
          radialdäck, sommardäck eller vinterdäck).
        </p>

        <h2>Registrerade dimensioner</h2>
        <p>
          Uppgifter om registrerade däck- och fälgdimensioner finns&nbsp;på Del
          1 av registreringsbeviset.
        </p>

        <h2>Alternativa dimensioner</h2>
        <p>
          En personbil kan ha flera alternativa däck- och fälgdimensioner som
          ingår i bilens godkännande. Dessa kan finnas angivna i
          registreringsbeviset, under rubriken Övriga uppgifter (tekniska data,
          dispenser med mera). Om uppgiften saknas, kan en märkesrepresentant
          informera om vilka däck- och fälgstorlekar som ingår i bilens
          godkännande.
        </p>

        <p>
          Om alternativa dimensioner saknas, har du som fordonsägare möjlighet
          att under eget ansvar byta däck och fälgar till en annan dimension
          utan att bilen behöver registreringsbesiktas. Detta utbyte får ske
          under förutsättning att däcken
        </p>
        <ul>
          <li>är typgodkända,</li>
          <li>uppfyller kraven på belastningsförmåga,</li>
          <li>uppfyller kraven på hastighetskapacitet,</li>
          <li>är av samma typ.</li>
        </ul>
        <p>Dessutom ska däck och fälg</p>
        <ul>
          <li>ha fritt utrymme vid fjädringsrörelser,</li>
          <li>
            ha fri rörlighet i hjulhuset vid fulla manöverrörelser med hänsyn
            till bilens ursprungliga hjulupphängning och styrning,
          </li>
          <li>
            ha en rullningsomkrets som inte leder till felvisning av
            hastighetsmätaren,
          </li>
          <li>täckas av bilens ursprungliga stänkskydd (stänkskärm). </li>
        </ul>
        <p>
          En alternativ dimension får inte inverka påtagligt negativt på bilens
          ursprungliga egenskaper.
        </p>
        <p>Källa Transportstyrelsen.</p>
      </article>
    </SiteTemplate>
  );
};
export default ReplaceTires;
