import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="headerContainer">
      <Link to="/pagetwo">Click for page two</Link>
    </div>
  );
};

export default Header;
