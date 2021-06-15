import React from 'react';
import { Container } from '@material-ui/core';

import NewsFeed from './NewsFeed.jsx';

const News = () => {
  return (
    <div id="news-outer-container">
      <Container id="news-container">
        <h1 id="news-heading">News and Updates</h1>
        <NewsFeed />
      </Container>
    </div>
  );
};

export default News;
