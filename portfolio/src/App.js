/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './home/landingPage';
import SideBar from './sidebar';
import Footer from './home/footer';
import ShortIntro from './home/shortIntro';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="h-screen bg-black-bg font-encode-sans">
      <div><LandingPage /></div>
      <div className="py-4">
        <div className="animate-marquee-container overflow-hidden">
          <div className="marquee-content whitespace-nowrap animate-flow-icons tex-white flex flex-row">
            <SideBar />
          </div>
        </div>
      </div>
      <div className="mt-2 px-8 text-white " style={{ height: '45%' }}>
        <div className="flex justify-around flex-row">
          <div className="w-1/2 ">
            {/* <div>Work Experience</div> */}
          </div>
          <ShortIntro />
        </div>
      </div>
      <hr className="my-2 border-t-2 border-black-400" />
      <Footer />
    </div>
  );
}

export default App;
