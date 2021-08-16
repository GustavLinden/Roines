import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from '../Body/Body';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import './App.module.scss';
import StaffList from '../StaffList/StaffList';

function App() {
  return (
    <div className="container has-background-white-bis Site">
      <BrowserRouter>
        <Route path="/:page" component={Header} />
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Body} />
        <Route exact path="/home" component={Body} />
        <Route exact path="/stafflist" component={StaffList} />
        {/* <Route exact path="/RimTester" component={RimTester} /> */}
        <Route path="/:page" component={Footer} />
        <Route exact path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
