import React from 'react';

const NewsEntry = ({ title, date, text }) => {
  return (
    <div id="news-entry">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};

export default NewsEntry;
