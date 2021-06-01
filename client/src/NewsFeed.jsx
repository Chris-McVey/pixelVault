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
      .catch(() => {
        setNewsList([
          {
            title:
              'Posts intercepted on their way to Earth. Sending reinforcements.',
            date: '1983-03-30T08:00:00.000Z',
            text: 'Await further instructions',
          },
        ]);
      });
  }, []);

  const chronologicalNews = newsList;
  chronologicalNews.reverse();

  return (
    <div id="news-feed">
      {chronologicalNews.map(({ _id, title, date, text }) => {
        return <NewsEntry key={_id} title={title} date={date} text={text} />;
      })}
      <img
        id="game-over"
        src="../assets/gameOver.jpg"
        alt="Old school arcade screen showing the words 'Game Over'"
      />
    </div>
  );
};

export default NewsFeed;
