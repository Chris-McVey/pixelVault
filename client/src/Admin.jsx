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

const Admin = () => {
  // Check if auth'd
  if (!sessionStorage.getItem('session_id')) {
    return 'not auth';
  } else {
    return <NewsForm />;
  }
};

export default Admin;
