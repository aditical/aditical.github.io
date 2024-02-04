import React from 'react';
import LandingPage from './home/landingPage';
import SideBar from './home/sidebar';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="mainPage flex">
      <div className="flex-auto w-14">
        <SideBar />
      </div>
      <div className="flex-auto w-9/12">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
