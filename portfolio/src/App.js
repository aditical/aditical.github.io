/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './home/landingPage';
import SideBar from './sidebar';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, GitIcon, HtmlIcon, JsIcon, MySqlIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from './assets/icons';
import myImage from './assets/images/icons8-waving-hand-emoji-96.png';

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
          <div className="w-1/3 flex flex-col gap-4 text-white-50 text-sm">
            <div className="flex items-center gap-1">
              <p>Hello</p>
              <img src={myImage} alt="My Image" width="40" height="40" className="hover:animate-waving-hand cursor-pointer" />
            </div>
            <p> Welcome to my world of coding wonders! </p>
            <p>
              I'm a skilled software engineer with four years of experience in the field of Software Development. My journey started with a bachelor's degree in Computer Science and Information Technology, and ever since then, I've been exploring cutting-edge technologies with confidence and passion.
            </p>
            <p> I enjoy exploring new technologies and working on projects that make a difference. My goal is to create applications that are not just functional but user-friendly. I work well in collaborative environments and always aim to ensure client satisfaction.</p>

            <p>As an eager learner and a dedicated craftsman of impactful solutions, I'm confident in my ability to take on any challenge and deliver extraordinary outcomes. Join me in the realm where code meets creativity, and let's create something exceptional together!</p>
          </div>
        </div>
      </div>
      <hr className="my-2 border-t-2 border-black-400" />
      <div className="text-black-footer mr-2 text-right font-gayathri" style={{ fontSize: '12px' }}>
        <footer>© 2024 Aditi Acharya. All rights reserved.</footer>
      </div>
    </div>
  );
}

export default App;
