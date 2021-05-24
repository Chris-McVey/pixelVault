import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
} from '@material-ui/core';

import logo from '../../assets/mainLogo.png';

const Header = () => {
  const history = useHistory();

  return (
    <div id="header">
      <AppBar position="sticky">
        <div id="pixelVaultLogo">
          <img src={logo} alt="Pixel Vault logo" />
        </div>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
          id="headerButtons"
        >
          <Button onClick={() => history.push('/')}>Home</Button>
          <Button onClick={() => history.push('/pagetwo')}>Page Two</Button>
          <Button onClick={() => history.push('/pagetwo')}>About</Button>
        </ButtonGroup>
      </AppBar>
    </div>
  );
};

export default Header;
