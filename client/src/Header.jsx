import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
} from '@material-ui/core';

const Header = () => {
  const history = useHistory();
  const displayDesktop = () => (
    <Toolbar>
      <div className="pixel-vault-menu-text">pixelVault</div>
    </Toolbar>
  );

  return (
    <div>
      <AppBar position="sticky">
        {displayDesktop()}
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
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
