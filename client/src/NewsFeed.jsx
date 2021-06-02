import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

import NewsEntry from './NewsEntry.jsx';

const NewsFeed = () => {
  const [newsList, setNewsList] = useState([]);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    axios
      .get('/api/news')
      .then((response) => {
        const posts = response.data;
        posts.reverse();
        const toBeDisplayed = posts.splice(0, 5);
        setNewsList(posts);
        setDisplayed(toBeDisplayed);
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

  const handleAddMorePosts = () => {
    const currentPosts = newsList;
    const currentDisplayed = displayed;
    const newTobeDisplayed = currentPosts.splice(0, 5);
    const finalDisplay = currentDisplayed.concat(newTobeDisplayed);
    setNewsList(currentPosts);
    setDisplayed(finalDisplay);
  };

  return (
    <div id="news-feed">
      {displayed.map(({ _id, title, date, text }) => {
        return <NewsEntry key={_id} title={title} date={date} text={text} />;
      })}
      {newsList.length ? (
        <Button
          variant="contained"
          color="secondary"
          aria-label="outlined primary button group"
          className="news.feed.button"
          onClick={handleAddMorePosts}
        >
          More
        </Button>
      ) : null}
      <img
        id="game-over"
        src="../assets/gameOver.jpg"
        alt="Old school arcade screen showing the words 'Game Over'"
      />
    </div>
  );
};

export default NewsFeed;
