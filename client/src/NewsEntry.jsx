import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

const NewsEntry = ({ title, date, text }) => {
  const [day, month, year] = new Date(date)
    .toLocaleDateString('en-US')
    .split('/');
  return (
    <Container maxWidth="md" className="news-entry">
      <h3 className="news-entry-title">{title}</h3>
      <p className="news-entry-date">{`${day}-${month}-${year}`}</p>
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
