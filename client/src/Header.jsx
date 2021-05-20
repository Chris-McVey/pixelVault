import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, ButtonGroup } from '@material-ui/core';

const Header = () => {
  const displayDesktop = () => <Toolbar>pixelVault</Toolbar>;

  return (
    <header>
      <AppBar>
        {displayDesktop()}
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
        >
          <Button>
            <Link to="/pagetwo">Click for page two</Link>
          </Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </AppBar>
    </header>
  );
};

export default Header;
