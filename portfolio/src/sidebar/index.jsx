/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import {
  // eslint-disable-next-line max-len
  BootstrapIcon, CssIcon, GitIcon, HtmlIcon, JsIcon, MySqlIcon, NodeIcon, NpmIcon, PostgresIcon, RailsIcon, ReactIcon, ReactNativeIcon, ReduxIcon, SassIcon, TailwindIcon, TsIcon,
} from '../assets/icons';

function ReusableIcon({ icon }) {
  return (
    <div className="opacity-20 cursor-pointer hover:opacity-100 hover:scale-125 transition-transform duration-300">
      {icon}
    </div>
  );
}

function SideBar() {
  return (
    <div className=" flex flex-row gap-7 items-center">
      <ReusableIcon icon={<HtmlIcon width={70} height={70} />} />
      <ReusableIcon icon={<CssIcon width={70} height={70} />} />
      <ReusableIcon icon={<SassIcon width={70} height={70} />} />
      <ReusableIcon icon={<JsIcon width={70} height={70} />} />
      <ReusableIcon icon={<TailwindIcon width={70} height={70} />} />
      <ReusableIcon icon={<BootstrapIcon width={70} height={70} />} />
      <ReusableIcon icon={<ReactIcon width={65} height={65} />} />
      <ReusableIcon icon={<ReduxIcon width={65} height={65} />} />
      <ReusableIcon icon={<NpmIcon width={70} height={70} />} />
      <ReusableIcon icon={<TsIcon width={70} height={70} />} />
      <ReusableIcon icon={<ReactNativeIcon width={70} height={70} />} />
      <ReusableIcon icon={<NodeIcon width={65} height={65} />} />
      <ReusableIcon icon={<PostgresIcon width={65} height={65} />} />
      <ReusableIcon icon={<RailsIcon width={70} height={70} />} />
      <ReusableIcon icon={<GitIcon width={70} height={70} />} />
      <ReusableIcon icon={<MySqlIcon width={65} height={65} />} />
    </div>
  );
}

ReusableIcon.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default SideBar;
