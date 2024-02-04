/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import SidebarImage from '../assets/images/sidebar.png';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, GitIcon, HtmlIcon, JsIcon, MySqlIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from '../assets/icons';

function ReusableIcon({ icon, top, left }) {
  return (
    <div className="absolute opacity-30 z-10 cursor-pointer hover:opacity-100 hover:scale-150 transition-transform duration-300" style={{ top, left }}>
      {icon}
    </div>
  );
}

function SideBar() {
  return (
    <div className="h-screen">
      <div className="relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black-87">
          <ReusableIcon icon={<HtmlIcon width={80} height={80} />} top="2%" />
          <ReusableIcon icon={<CssIcon width={80} height={80} />} top="10%" left="45%" />
          <ReusableIcon icon={<BootstrapIcon width={70} height={70} />} top="28%" left="60%" />
          <ReusableIcon icon={<TailwindIcon width={50} height={50} />} top="75%" left="60%" />
          <ReusableIcon icon={<SassIcon width={85} height={85} />} top="20%" left="25%" />
          <ReusableIcon icon={<JsIcon width={70} height={70} />} top="83%" left="58%" />
          <ReusableIcon icon={<TsIcon width={70} height={70} />} top="34%" left="0" />
          <ReusableIcon icon={<NpmIcon width={40} height={40} />} top="85%" left="10%" />
          <ReusableIcon icon={<ReactIcon width={80} height={80} />} top="54%" left="55%" />
          <ReusableIcon icon={<ReactNativeIcon width={60} height={60} />} top="61%" left="13%" />
          <ReusableIcon icon={<ReduxIcon width={50} height={50} />} top="65%" left="70%" />
          <ReusableIcon icon={<NodeIcon width={65} height={65} />} top="3%" left="52%" />
          <ReusableIcon icon={<RailsIcon width={80} height={80} />} top="91%" left="25%" />
          <ReusableIcon icon={<PostgresIcon width={58} height={58} />} top="47%" left="28%" />
          <ReusableIcon icon={<GitIcon width={80} height={80} />} top="73%" left="0" />
          <ReusableIcon icon={<MySqlIcon width={60} height={60} />} top="38%" left="65%" />
        </div>
      </div>
    </div>
  );
}

ReusableIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  top: PropTypes.element.isRequired,
  left: PropTypes.element.isRequired,

};

export default SideBar;
