import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from '../Body/Body';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import styles from './App.module.scss';
import StaffList from '../StaffList/StaffList';
import Historia from '../Pages/Om Roines/Historia/History';
import BuisnessIdea from '../Pages/Om Roines/AffärsIde/BuisnessIdea';
import RimTester from '../RimsTester/RimsTester';
import Tiers from '../Pages/Däck/Tiers';
import WinterTiers from '../Pages/Däck/WinterTiers';
import SummerTiers from '../Pages/Däck/SummerTiers';
import TiersHotell from '../Pages/Däck/TiersHotell';

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
          <Route exact path="/tiers" component={Tiers} />
          <Route exact path="/wintertiers" component={WinterTiers} />
          <Route exact path="/summertiers" component={SummerTiers} />
          <Route exact path="/tiershotell" component={TiersHotell} />
          <Route exact path="/rimstester" component={RimTester} />
          <Route path="/:page" component={Footer} />
          <Route exact path="/" component={Footer} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
