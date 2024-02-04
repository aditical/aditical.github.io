/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import SidebarImage from '../assets/images/sidebar.png';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, GitIcon, HtmlIcon, JsIcon, MySqlIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from '../assets/icons';

function SideBar() {
  return (
    <div className="h-screen">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${SidebarImage})` }}>
        <div className="absolute inset-0 bg-black-200">
          <div className="">
            <CssIcon width={80} height={80} />
          </div>
          <div className="">
            <BootstrapIcon />
          </div>
          <div className="">
            <HtmlIcon />
          </div>
          <div className="">
            <TailwindIcon />
          </div>
          <div className="">
            <SassIcon />
          </div>
          <div className="">
            <JsIcon />
          </div>
          <div className="">
            <TsIcon />
          </div>
          <div className="">
            <NpmIcon />
          </div>
          <div className="">
            <ReactIcon />
          </div>
          <div className="">
            <ReactNativeIcon />
          </div>
          <div className="">
            <ReduxIcon />
          </div>
          <div className="">
            <NodeIcon />
          </div>
          <div className="">
            <RailsIcon />
          </div>
          <div className="">
            <PostgresIcon />
          </div>
          <div className="">
            <GitIcon />
          </div>
          <div className="">
            <MySqlIcon />
          </div>
        </div>

      </div>

    </div>
  );
}

export default SideBar;
