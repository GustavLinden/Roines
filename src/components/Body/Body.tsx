import React from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import SectionModule from '../Section/Section';
import Presentation from '../Presentation/Presentation';
import BigCard from '../BigCard/BigCard';
import { MainSection, Services } from '../../TextComponents/SectionText';
import Card from '../SmallCard/Card';
import image1 from '../../pictures/thumbnail_IMG_8859.png';
import image2 from '../../pictures/thumbnail_IMG_8860.png';
import image3 from '../../pictures/thumbnail_IMG_8861.png';
import image4 from '../../pictures/thumbnail_IMG_8863.png';
import Map from '../../Map/Map';
const Body: React.FC = () => {
  return (
    <div className="container has-text-centered" style={{ minHeight: '75vh' }}>
      <SectionModule titel="Välkommen till Roines">
        <strong className="title"></strong>
      </SectionModule>
      <SectionModule titel={Services.title} subTitle={Services.mainTopic}>
        <ul>
          <li>Här kommer test</li>
          <li>Här kommer test</li>
          <li>Här kommer test</li>
          <li>Här kommer test</li>
        </ul>
      </SectionModule>
      <SectionModule
        titel={MainSection.title}
        subTitle={MainSection.mainTopic}
      />
      <CardWrapper>
        <Card
          img={image1}
          title="Björn"
          content="Frågor om fälgar? Prata med mig"
        />
        <Card
          img={image2}
          title="Lars"
          content="Frågor om fälgar? Prata med mig"
        />
        <Card
          img={image3}
          title="Nicklas"
          content="Frågor om däck? Prata med mig"
        />
        <Card
          img={image4}
          title="Kent"
          content="Frågor om elbilar? Prata med mig"
        />
      </CardWrapper>

      <CardWrapper>
        <BigCard
          title="Dags för däckbyte!"
          linkName="Fälgar"
          link={'RimTester'}
          img={
            'https://images.unsplash.com/photo-1596923219900-5c453efdb3f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          }
        >
          <div>
            <div>
              - Se till att vara ute i god tid med ditt däckbyte, man vet aldrig
              när kylan slår till!{' '}
            </div>
          </div>
        </BigCard>
        <BigCard
          title="Dags för däckbyte!"
          linkName="Däckbyte"
          link={'StaffList'}
          img={
            'https://images.unsplash.com/photo-1608248068155-5795b0ac3c46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          }
        >
          <div>
            <div>
              - Se till att vara ute i god tid med ditt däckbyte, man vet aldrig
              när kylan slår till!{' '}
            </div>
          </div>
        </BigCard>{' '}
        <BigCard
          title="Dags för däckbyte!"
          linkName="Däckbyte"
          link={'StaffList'}
        >
          <div>
            <div>
              - Se till att vara ute i god tid med ditt däckbyte, man vet aldrig
              när kylan slår till!{' '}
            </div>
          </div>
        </BigCard>
      </CardWrapper>
      <div className="title">Här hittar du oss</div>
      <CardWrapper>
        <Map />
      </CardWrapper>
    </div>
  );
};

export default Body;
