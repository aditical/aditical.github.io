/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import myImage from '../assets/images/icons8-waving-hand-emoji-96.png';
import CodeImage from '../assets/images/code.jpeg';
import Avatar from '../assets/images/avatar.png';

function LandingPage() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${CodeImage})` }}>
      <div className="bg-black-60 text-white">
        <div className="p-24 border-white w-full flex gap-8 items-center">
          <div className="border-2 rounded-full h-32 w-32 border-blue-100 shadow-xl shadow-black-200 m-0.5">
            <div>
              <img src={Avatar} alt="Avatar" width="100%" height="100%" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <p>Hello</p>
              <img src={myImage} alt="My Image" width="40" height="40" className="animate-waving-hand" />
            </div>
            I am Aditi Acharya,
            <div className="mt-2 text-6xl">
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandingPage;
