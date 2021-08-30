import React from 'react';
import CardWrapper from '../../CardWrapper/CardWrapper';
import SectionModule from '../../Section/Section';
import Card from '../../SmallCard/Card';
import CCplus from '../../../pictures/SummerTires/Familycar/crossclimateplus.png';
import Cp1 from '../../../pictures/SummerTires/Familycar/cinturato-p1.png';
import MP4 from '../../../pictures/SummerTires/Familycar/primacy4.png';
import CP7 from '../../../pictures/SummerTires/Familycar/cinturato-p7.png';
import Scropion from '../../../pictures/SummerTires/SuvorCrossover/scorpion-verde.png';
import PS4 from '../../../pictures/SummerTires/SportsCar/ps4.png';
import Pzero from '../../../pictures/SummerTires/SportsCar/pzero.png';
import PS4s from '../../../pictures/SummerTires/SportsCar/ps4s.png';
import Corsa from '../../../pictures/SummerTires/SportsCar/pzero-corsa.png';
import MCP2 from '../../../pictures/SummerTires/TrackDays/michelin-pilot-sport-cup-2.png';
import YOKO from '../../../pictures/SummerTires/TrackDays/yokohama_advan_a052.png';

const SummerTiers: React.FC = () => {
  return (
    <div>
      <SectionModule></SectionModule>
      <CardWrapper>
        <Card img={CCplus} title="Michelin CrossClimate +" />
        <Card img={Cp1} title="Pirelli Cinturato P1 Verde" />
        <Card img={MP4} title="Michelin Primacy 4" />
        <Card img={CP7} title="Pirelli Cinturato P7" />
      </CardWrapper>
      <CardWrapper>
        <Card img={Scropion} title="Pirelli Scorpion Verde" />
      </CardWrapper>
      <CardWrapper>
        <Card
          img={PS4}
          title="
Michelin Pilot Sport 4"
        />
        <Card img={Pzero} title="Pirelli PZero" />
        <Card img={PS4s} title="Michelin Pilot Sport 4S" />
        <Card img={Corsa} title="Pirelli PZero Corsa" />
      </CardWrapper>
      <CardWrapper>
        <Card img={MCP2} title="Michelin Pilot Sport Cup 2" />
        <Card img={YOKO} title="Yokohama Advan A052" />
      </CardWrapper>
    </div>
  );
};

export default SummerTiers;
