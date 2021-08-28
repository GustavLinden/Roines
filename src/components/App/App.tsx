import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from '../MainPage/MainPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import StaffList from '../StaffList/StaffList';
import Historia from '../Pages/Om Roines/History';
import BuisnessIdea from '../Pages/Om Roines/BuisnessIdea';
import RimTester from '../RimsTester/RimsTester';
import Tiers from '../Pages/Däck/Tiers';
import WinterTiers from '../Pages/Däck/WinterTiers';
import SummerTiers from '../Pages/Däck/SummerTiers';
import TiersHotell from '../Pages/Däck/TiersHotell';
import Yokohama from '../Pages/Däck/YokohamaTiers';
import About from '../Pages/Om Roines/About';
import EnvironmentalPolicy from '../Pages/Om Roines/EnvironmentalPolicy';
import History from '../Pages/Om Roines/History';
import PersonalInformation from '../Pages/Om Roines/PersonalInformation';
import Vision from '../Pages/Om Roines/Vision';
import NoiseRequirements from '../Pages/Kunskap/NoiseRequirements';
import Pricing from '../Pages/Servicetjänster/Pricing';
import ReplaceTires from '../Pages/Kunskap/ReplaceTires';
import TierRepair from '../Pages/Servicetjänster/TierRepair';
import TreadDepthTiers from '../Pages/Kunskap/TreadDepthTires';
import TiresMarking from '../Pages/Kunskap/TiresMarking';
import AboutWinterTires from '../Pages/Kunskap/AboutWinterTires';
import AutoSocks from '../Pages/Tillbehör/AutoSocks';
import McGard from '../Pages/Tillbehör/McGard';
import SicuStar from '../Pages/Tillbehör/SicuStar';
import Packages from '../Pages/Servicetjänster/Packages';
import WheelAdjustment from '../Pages/Servicetjänster/WheelsAdjustment';

function App() {
  return (
    <div className="container has-background-white-bis">
      <BrowserRouter>
        <div className={`container ${styles.presentationHeight}`}>
          <Route path="/:page" component={Header} />
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Body} />
          <Route exact path="/home" component={Body} />
          <Route exact path="/history" component={Historia} />
          <Route exact path="/buisnessIdea" component={BuisnessIdea} />
          <Route exact path="/stafflist" component={StaffList} />
          <Route exact path="/tires" component={Tiers} />
          <Route exact path="/tires/wintertires" component={WinterTiers} />
          <Route exact path="/tires/summertires" component={SummerTiers} />
          <Route exact path="/services/tireshotell" component={TiersHotell} />
          <Route exact path="/rims/rimstester" component={RimTester} />
          <Route exact path="/tires/yokohamatires" component={Yokohama} />
          <Route exact path="/about/aboutus" component={About} />
          <Route exact path="/about/buisnessidea" component={BuisnessIdea} />
          <Route exact path="/accessories/sicustar" component={SicuStar} />
          <Route exact path="/accessories/mcgard" component={McGard} />
          <Route exact path="/accessories/autosocks" component={AutoSocks} />
          <Route
            exact
            path="/about/environmentalpolicy"
            component={EnvironmentalPolicy}
          />
          <Route exact path="/about/history" component={History} />
          <Route
            exact
            path="about/personalinformation"
            component={PersonalInformation}
          />
          <Route exact path="about/vision" component={Vision} />
          <Route
            exact
            path="/knowledge/noiserequirements"
            component={NoiseRequirements}
          />
          <Route
            exact
            path="/knowledge/replacetires"
            component={ReplaceTires}
          />
          <Route
            exact
            path="/knowledge/aboutwintertires"
            component={AboutWinterTires}
          />
          <Route
            exact
            path="/knowledge/tiresdepth"
            component={TreadDepthTiers}
          />
          <Route
            exact
            path="/knowledge/tiresmarkings"
            component={TiresMarking}
          />
          <Route exact path="/services/prices" component={Pricing} />
          <Route exact path="/services/packages" component={Packages} />
          <Route exact path="/services/repairtires" component={TierRepair} />
          <Route
            exact
            path="/services/wheelsadjustment"
            component={WheelAdjustment}
          />

          <Route path="/:page" component={Footer} />
          <Route exact path="/" component={Footer} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
