import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';

const handleNewsInputChange = (e) => {
  console.log('input changed to: ', e.target.value);
};

const Admin = () => {
  const defaults = { newsTitle: '', newsBody: '' };
  const [formValues, setFormValues] = useState(defaults);
  console.log(formValues);
  return (
    <div className="admin-panel">
      {'Admin:\n'}
      {'News Post\n'}
      {/*Need to make these containers bigger*/}
      <div className="news-title">
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          name="news-title"
          fullWidth
          id="title"
          onChange={handleNewsInputChange}
        />
      </div>
      <div className="news-body">
        <TextField
          required="true"
          label="Post Body"
          fullwidth
          multiline
          rowsMax={10}
          id="post-body"
          name="post-body"
        />
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
};

export default Admin;
