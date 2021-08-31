import React from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import SectionModule from '../Section/Section';
import BigCard from '../BigCard/BigCard';
import './MainPage.module.scss';
import Card from '../SmallCard/Card';
import Map from '../../Map/Map';
import SectionLargePicture from '../SectionLargePicture/SectionLargePicture';
import CardForLinks from '../CardForLinks/CardForLinks';

const MainPage: React.FC = () => {
  return (
    <div className="container has-text-centered">
      <SectionModule
        title=" Välkommen till Roines Gummiverkstad, med över 50 år i branschen"
        subTitle={
          'Vår tradition och historia är en viktig del av vår identitet och kontinuitet. Vår unikitet är också att vi kunnat hjälpa till med däck i kvarteret sedan 1947...'
        }
        linkname={'Om oss'}
        link={'history'}
      ></SectionModule>
      <SectionModule
        title="Vi är rekommenderade av Porsche"
        subTitle="Självklart har vi också bred kunskap kring andra bilmärken"
      >
        <div></div>
        <CardWrapper>
          <CardForLinks
            img={
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }
            extLink="https://www.aftonbladet.se"
            extLinkName="Paradice city"
          >
            <strong>Rätt däck till din Porsche?</strong> <br />
            Vi hjälper dig!
          </CardForLinks>
          <CardForLinks
            img={
              'https://images.unsplash.com/flagged/photo-1579782647395-2e6fb36a64f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80'
            }
          >
            <strong>Service frågor om Teslan?</strong>
            <br />
            Vi hjälper dig!
          </CardForLinks>
          <CardForLinks
            img={
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }
          >
            <strong>Nya sommardäck?</strong>
            <br />
            <p></p>
          </CardForLinks>
          <CardForLinks
            img={
              'https://images.unsplash.com/photo-1610370720330-fdf511ccafe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHdpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          >
            <strong>Tid för nya vinterdäck?</strong>
          </CardForLinks>
        </CardWrapper>
      </SectionModule>
      <SectionModule
        title={'Framtidens transporter'}
        subTitle={
          'Vi vet värdet av att känna sig säker med att din moderna bil får en modern och omtänksam service.'
        }
      ></SectionModule>

      <CardWrapper>
        <BigCard
          title="Nya fälgar till din bil?"
          linkName="Fälgar"
          link={'rimstester'}
          img={
            'https://images.unsplash.com/photo-1596923219900-5c453efdb3f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          }
        >
          <div>
            <div>
              - Vill du lyfta din bils utseende? Prata med oss om nya fälgar och
              ge din bil lite kärlek{' '}
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
        </BigCard>
        <BigCard
          title="Dags att köpa nya däck?"
          linkName="Köpa däck"
          link={'StaffList'}
          img={
            'https://images.unsplash.com/photo-1608715031105-8793e33837cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80'
          }
        >
          <div>
            <div>
              - Se till att hålla dina däck hela och fräsha. Trasiga däck är en
              stor anledning till trafikolyckor{' '}
            </div>
          </div>
        </BigCard>{' '}
        <BigCard
          title="Frågor om din el-bil i vinter?"
          linkName="el-bilar"
          link={'StaffList'}
          img={
            'https://images.unsplash.com/photo-1566816716536-6ab88cbda34e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80'
          }
        >
          <div>
            <div>
              - Se till att vara ute i god tid med ditt däckbyte, man vet aldrig
              när kylan slår till!{' '}
            </div>
          </div>
        </BigCard>
      </CardWrapper>
      <SectionLargePicture
        title={'Trångt att lagra däcken hemma?'}
        subTitle={
          'Vi ser till att fina däck tas väl om hand och är fräsha tills nästa säsong'
        }
        img={
          'https://images.unsplash.com/photo-1477823986828-5aff156284aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'
        }
        link={'services/tireshotell'}
        linkname={'Däckhotell'}
      >
        <h4>Vi tar hand om dina däck när säsongerna växlar</h4>
        <br />
        <div>Snabb och personlig service, så du kan fokusera på annat.</div>
        <div>
          Läs mer om våra priser och varför vi är ett bra val för däckhotell
        </div>
      </SectionLargePicture>
      <div>Här hittar du oss</div>
      <figure
        style={{
          overflow: ' hidden',
          paddingTop: '5%',
          position: 'relative',
        }}
      >
        <Map />
      </figure>
    </div>
  );
};

export default MainPage;
