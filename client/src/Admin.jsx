import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';

const Admin = () => (
  <div className="admin-panel">
    {'Admin:\n'}
    {'News Post\n'}
    {/*Need to make these containers bigger*/}
    <div className="news-title">
      <FormControl required="true">
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input fullWidth id="title" />
      </FormControl>
    </div>
    <div className="news-body">
      <FormControl required="true">
        <TextField
          required="true"
          label="Post Body"
          fullwidth
          multiline
          rowsMax={10}
          id="post-body"
        />
      </FormControl>
      <div className="news-submit">
        <Button variant="contained" color="primary" type="button">
          Submit
        </Button>
        <Button variant="contained" color="primary" type="button">
          Cancel
        </Button>
      </div>
    </div>
  </div>
);

export default Admin;
