/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './home/landingPage';
import SideBar from './sidebar';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, GitIcon, HtmlIcon, JsIcon, MySqlIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from './assets/icons';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="h-screen bg-black-bg">
      <div><LandingPage /></div>
      <div className="py-4">
        <div className="animate-marquee-container overflow-hidden">
          <div className="marquee-content whitespace-nowrap animate-flow-icons tex-white flex flex-row">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
