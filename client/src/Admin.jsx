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
  // Check if auth'd
  // if (!sessionStorage.getItem('session_id')) {
  //   return <AuthForm />;
  // }

  return (
    <div>
      <NewsForm />
      <NewsFeed />
    </div>
  );
};

export default Admin;
