import React from 'react';
import { AppBar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const footerClickHandler = (e) => {
  console.log(e.target);
};

const Footer = () => {
  const appBottomStyle = {
    display: 'flex',
    flexDirection: 'inherit',
    justifyContent: 'space-evenly',
    marginTop: '10px',
  };
  return (
    <div>
      {/* <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}> */}
      <AppBar style={appBottomStyle} position="sticky">
        <a
          href="https://www.youtube.com/channel/UCKONxFboO1zJNbvhPsbp5mQ"
          target="_blank"
          rel="noreferrer"
        >
          <div className="youtube-icon">
            <YouTubeIcon onClick={footerClickHandler} fontSize="large" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixelvaultgames/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="insta-icon">
            <InstagramIcon onClick={footerClickHandler} fontSize="large" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/PixelVaultGames/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="face-icon">
            <FacebookIcon onClick={footerClickHandler} fontSize="large" />
          </div>
        </a>
      </AppBar>
    </div>
  );
};
export default Footer;
