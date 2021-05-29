import React from 'react';
import { AppBar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => (
  <div>
    {/* <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}> */}
    <AppBar position="sticky">
      <YouTubeIcon />
      <InstagramIcon />
      <FacebookIcon />
    </AppBar>
  </div>
);
export default Footer;
