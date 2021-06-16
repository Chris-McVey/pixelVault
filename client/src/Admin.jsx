import React, { useState, useEffect } from 'react';

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
  // Just switch this to true and they can access the admin page, which means we
  // need to use the session storage to validate all actions on the API, and bounce them if
  // we get an non validated action. Maybe we can make an API request on the following page with
  // the auth token and then if it doesn't match up bounce them back.
  const [authd, changeAuth] = useState(false);
  // if (sessionStorage.getItem('session_id') && !authd) {
  //   useEffect(() => {
  //     axios
  //       .post('/api/isauthd', {
  //         sessionToken: sessionStorage.getItem('session_id'),
  //       })
  //       .then((data) => {
  //         changeAuth({ authd: data.data });
  //       });
  //   }, []);
  // }
  const cookies = document.cookie.split(';');
  let hasCookie = false;
  cookies.forEach((ele) => {
    if (ele.split('=')[0].includes('token')) {
      hasCookie = true;
    }
  });

  if (!hasCookie) {
    return <AuthForm />;
  } else {
    location.replace('/admin/admin');
  }

  return (
    <div>
      <NewsForm />
      <p>Click the trash icon to delete the post. THIS IS PERMANENT!</p>
      <NewsFeed handleDelete={handleDelete} />
    </div>
  );
};

export default Admin;
