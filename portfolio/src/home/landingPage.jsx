/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import CodeImage from '../assets/images/code.jpeg';
import Avatar from '../assets/images/avatar.png';
import { LaptopIcon } from '../assets/icons';

function LandingPage() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${CodeImage})` }}>
      <div className="bg-black-60 text-white-50">
        <div className="p-24 border-white w-full flex gap-8 items-center">
          <div className="border-2 rounded-full h-32 w-32 border-blue-100 shadow-xl shadow-black-200 m-0.5">
            <div>
              <img src={Avatar} alt="Avatar" width="100%" height="100%" />
            </div>
          </div>
          <div>
            Aditi Acharya
            <div className="mt-2 text-4xl flex relative gap-3 font-alata">
              SOFTWARE ENGINEER
              <div className="animate-popup-jam"><LaptopIcon width={40} height={40} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandingPage;
