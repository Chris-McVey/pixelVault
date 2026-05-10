import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Button, ButtonGroup } from '@material-ui/core';

import logo from '../../assets/mainLogo.png';

const Header = () => {
  const history = useHistory();

  return (
    <div id="header">
      <AppBar position="sticky">
        <div id="pixelVaultLogo">
          <a href="/">
            <img src={logo} alt="Pixel Vault logo" />
          </a>
        </div>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
          id="headerButtons"
        >
          <Button onClick={() => history.push('/')}>Home</Button>
          <Button onClick={() => history.push('/events')}>Events</Button>
          <Button onClick={() => history.push('/news')}>News</Button>
          <Button onClick={() => history.push('/contact')}>Contact</Button>
        </ButtonGroup>
      </AppBar>
    </div>
  );
};

export default Header;
