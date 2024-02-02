import React from 'react';
import LandingPage from './home/landingPage';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, HtmlIcon, JsIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from './assets/icons';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="mainPage flex">
      <div className="flex-auto w-14">
        <div className="animate-first-icon">
          <CssIcon />
        </div>
        <div className="animate-second-icon">
          <BootstrapIcon />
        </div>
        <div className="animate-third-icon">
          <HtmlIcon />
        </div>
        <div className="animate-fourth-icon">
          <TailwindIcon />
        </div>
        <div className="animate-fifth-icon">
          <SassIcon />
        </div>
        <div className="animate-sixth-icon">
          <JsIcon />
        </div>
        <div className="animate-seventh-icon">
          <TsIcon />
        </div>
        <div className="animate-first-icon">
          <NpmIcon />
        </div>
        <div className="animate-second-icon">
          <ReactIcon />
        </div>
        <div className="animate-third-icon">
          <ReactNativeIcon />
        </div>
        <div className="animate-fourth-icon">
          <ReduxIcon />
        </div>
        <div className="animate-fifth-icon">
          <NodeIcon />
        </div>
        <div className="animate-sixth-icon">
          <RailsIcon />
        </div>
        <div className="animate-seventh-icon">
          <PostgresIcon />
        </div>
      </div>
      <div className="flex-auto w-9/12">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
