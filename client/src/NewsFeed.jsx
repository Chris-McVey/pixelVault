import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsEntry from './NewsEntry.jsx';

const NewsFeed = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/news')
      .then((response) => {
        const posts = response.data;
        setNewsList(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="news-feed">
      {newsList.map(({ _id, title, date, text }) => {
        return <NewsEntry key={_id} title={title} date={date} text={text} />;
      })}
    </div>
  );
};

export default NewsFeed;
