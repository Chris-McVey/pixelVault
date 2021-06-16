import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';

const AuthForm = () => {
  const history = useHistory();
  const defaults = { user: '', password: '' };
  const [authState, setAuthState] = useState(defaults);
  const handleChange = (e) => {
    if (e.target.name === 'user-name') {
      setAuthState({
        ...authState,
        user: e.target.value,
      });
    }
    if (e.target.name === 'password') {
      setAuthState({
        ...authState,
        password: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (authState.password === '' || authState.user === '') {
      return;
    }

    axios
      .post('/api/auth', {
        username: authState.user,
        password: authState.password,
      })
      .then((data) => {
        const token = data.data;
        const cookie = `token=${token}`;
        document.cookie = cookie;
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="login-div">
      <div className="username">
        <InputLabel htmlFor="user-name">User Name</InputLabel>
        <Input
          name="user-name"
          id="user-name"
          required
          value={authState.user}
          onChange={handleChange}
        />
      </div>
      <div className="password-div">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          id="user-name"
          required
          type="password"
          value={authState.password}
          onChange={handleChange}
        />
        <div className="cred-submit">
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            type="button"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/');
            }}
            color="primary"
            type="button"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
