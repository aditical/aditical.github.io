/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { MilestoneIcon } from '../assets/icons';

function Title({ title }) {
  return (
    <div>
      <span className="flex items-center text-sm font-alata font-semibold text-gray-900 dark:text-white">
        {title}
      </span>
    </div>
  );
}

function Company({ name }) {
  return (
    <p className="text-xs text-gray-500 dark:text-gray-400">{name}</p>
  );
}

function Time({ time }) {
  return (
    <div className="text-center bg-white-50 p-1.5 text-black-100 w-full">
      <time className="block text-xs leading-none text-black-200" style={{ fontSize: '11px' }}>{time}</time>
    </div>
  );
}

function MileStoneComponent({ flip }) {
  return (
    <span className={`absolute ${flip && 'scale-x-[-1]'}
    flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full -start-2.5 ring-2 ring-white-50 dark:ring-gray-900 dark:bg-blue-900`}
    >
      <MilestoneIcon />
    </span>
  );
}

function Work() {
  return (
    <div className="flex justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-6 -ms-44">
          <MileStoneComponent flip />
          <div className="w-2/5 flex flex-col justify-center gap-1.5 items-end text-white-50">
            <Title title="Software Engineer" />
            <Company name="Fetchly Labs" />
            <Time time="Mar 2023 - Present" />
          </div>

        </li>
        <li className="mb-6 ms-5">
          <MileStoneComponent />
          <div className="w-full flex flex-col justify-center gap-1.5 text-white-50">
            <Title title="Senior Software Engineer" />
            <Company name="Gurzu Inc" />
            <Time time="Dec 2022 - Mar 2023" />
          </div>
        </li>
        <li className="mb-6 -ms-44">
          <MileStoneComponent flip />
          <div className="w-2/5 flex flex-col justify-center gap-1.5 items-end text-white-50">
            <Title title="Software Engineer" />
            <Company name="Gurzu Inc" />
            <Time time="Jul 2020 - Dec 2022" />
          </div>
        </li>
        <li className="ms-5">
          <MileStoneComponent />
          <div className="w-full flex flex-col justify-center gap-1.5 text-white-50">
            <Title title="Associate Software Engineer" />
            <Company name="Gurzu Inc" />
            <Time time="Jun 2019 - Jul 2020" />
          </div>

        </li>
      </ol>
    </div>
  );
}

export default Work;
