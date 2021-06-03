import React, { useState } from 'react';
import NewsFeed from './NewsFeed.jsx';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import NewsForm from './NewsForm';
import AuthForm from './AuthForm';

const Admin = () => {
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

  // Check if auth'd
  // if (!sessionStorage.getItem('session_id')) {
  //   return <AuthForm />;
  // }

  return (
    <div>
      <NewsForm />
      <p>Click the trash icon to delete the post. THIS IS PERMANENT!</p>
      <NewsFeed handleDelete={handleDelete} />
    </div>
  );
};

export default Admin;
