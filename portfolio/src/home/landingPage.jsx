/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import myImage from '../assets/images/icons8-waving-hand-emoji-96.png';
import BgImage from '../assets/images/background.jpg';
import CodeImage from '../assets/images/code.jpg';

function LandingPage() {
  return (
    <div className="h-screen">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImage})` }}>
        <div className="absolute inset-0 bg-black-200">
          <div className="flex justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${CodeImage})`, height: '38%' }}>
            <div className="absolute border-white w-full inset-0 bg-black-60">
              <div className="mt-16 p-16 border-white w-full">
                <div className="flex items-center gap-1">
                  <p>Hello</p>
                  <img src={myImage} alt="My Image" width="40" height="40" className="animate-waving-hand" />
                </div>
                I am Aditi Acharya
                <div className="mt-2 text-6xl">
                  Software Engineer
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default LandingPage;
