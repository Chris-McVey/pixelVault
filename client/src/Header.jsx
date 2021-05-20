import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, ButtonGroup } from '@material-ui/core';

const Header = () => {
  const history = useHistory();
  const displayDesktop = () => <Toolbar>pixelVault</Toolbar>;

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
