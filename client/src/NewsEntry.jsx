import React from 'react';
import PropTypes from 'prop-types';

const NewsEntry = ({ title, date, text }) => {
  return (
    <div id="news-entry">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};

NewsEntry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsEntry;
