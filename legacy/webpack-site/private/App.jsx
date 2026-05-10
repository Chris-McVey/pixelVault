import React from 'react';
import axios from 'axios';
import NewsForm from './NewsForm';
import NewsFeed from './NewsFeed';

const App = (props) => {
  const handleDelete = (id) => {
    axios
      .delete(`/api/news${id}`)
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NewsForm />
      <p>Click the trash icon to delete the post. THIS IS PERMANENT!</p>
      <NewsFeed handleDelete={handleDelete} />
    </div>
  );
};

export default App;
