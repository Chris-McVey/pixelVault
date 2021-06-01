import React, { useState } from 'react';
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
  if (!sessionStorage.getItem('session_id')) {
    return <AuthForm />;
  }
  const session = sessionStorage.getItem('session_id');
  axios.post('/api/isauthd', { sessionToken: session }).then((data) => {
    debugger;
  });
  //return <NewsForm />;
};

export default Admin;
