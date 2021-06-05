import React from 'react';
import { Container } from '@material-ui/core';

import NewsFeed from './NewsFeed.jsx';

const News = () => {
  return (
    <Container id="news-container">
      <h1 id="news-heading">News and Updates</h1>
      <NewsFeed />
    </Container>
  );
};

export default News;
