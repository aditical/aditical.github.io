/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import myImage from '../assets/images/icons8-waving-hand-emoji-96.png';
import CodeImage from '../assets/images/code.jpeg';

function LandingPage() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${CodeImage})` }}>
      <div className="bg-black-60 text-white">
        <div className="p-24 border-white w-full">
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

  );
}

export default LandingPage;
