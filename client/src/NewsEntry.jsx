import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

const NewsEntry = ({ title, date, text }) => {
  return (
    <Container maxWidth="md" className="news-entry">
      <h3 className="news-entry-title">{title}</h3>
      <p className="news-entry-date">{date}</p>
      <p className="news-entry-Text">{text}</p>
    </Container>
  );
};

NewsEntry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsEntry;
