import React from 'react';
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container id="home-container">
      <h1 id="home-heading">Welcome to Pixel Vault Games!</h1>
      <img
        id="games-in-case"
        src="../assets/gamesInCase.jpeg"
        alt="Store display case with NES games"
      />
      <p id="home-first-block-text">
        We buy, sell, and trade everything from the Magnavox Odyssey to the Xbox
        Series X. Bring in your old games and find a &quot;new&quot; favorite.
      </p>
      <img
        id="consoles-and-controllers"
        src="../assets/consolesAndControllers.jpeg"
        alt="Store display case with boxed consoles and controllers"
      />
      <p id="home-second-block-text">
        Have a dead console or a controller with stick drift? We can fix almost
        anything!
      </p>
      <img
        id="home-store-display"
        src="../assets/storeDisplay2.jpeg"
        alt="In-store display depicting scene with Mario, Link, and other video game characters"
      />
      <p id="home-third-block-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum
        porttitor risus, id fringilla ante viverra nec. Aliquam tortor lorem,
        mollis quis ex ut, elementum mollis arcu. Nunc ac ligula luctus ante
        eleifend molestie ac eget dolor. Integer ipsum neque, vehicula quis
        tristique at, convallis id ante. Sed ac sapien eleifend, ornare urna
        eget, lobortis mi. Cras enim tortor, interdum sit amet gravida nec,
        ultrices ac magna.
      </p>
    </Container>
  );
};

export default Home;
