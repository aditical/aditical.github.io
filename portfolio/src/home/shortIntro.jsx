/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import HelloImage from '../assets/images/icons8-waving-hand-emoji-96.png';

function ShortIntro() {
  return (
    <div className="w-1/3 flex flex-col gap-4 text-white-50 text-sm">
      <div className="flex items-center gap-1">
        <p>Hello</p>
        <img src={HelloImage} alt="My Image" width="40" height="40" className="hover:animate-waving-hand cursor-pointer" />
      </div>
      <p> Welcome to my world of coding wonders! </p>
      <p>
        {' I\'m a skilled software engineer with 4+ years of experience in the field of Software Development. My journey started with a bachelor\'s degree in Computer Science and Information Technology, and ever since then, I\'ve been exploring cutting-edge technologies with confidence and passion.'}
      </p>
      <p> I enjoy exploring new technologies and working on projects that make a difference. My goal is to create applications that are not just functional but user-friendly. I work well in collaborative environments and always aim to ensure client satisfaction.</p>
      <p>{'As an eager learner and a dedicated craftsman of impactful solutions, I\'m confident in my ability to take on any challenge and deliver extraordinary outcomes. Join me in the realm where code meets creativity, and let\'s create something exceptional together!'}</p>
    </div>
  );
}

export default ShortIntro;
