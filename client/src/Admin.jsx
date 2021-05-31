import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';

const Admin = () => {
  const defaults = { newsTitle: '', newsBody: '' };
  const [formValues, setFormValues] = useState(defaults);
  const handleNewsInputChange = (e) => {
    if (e.target.name === 'news-title') {
      setFormValues({
        ...formValues,
        newsTitle: e.target.value,
      });
    }
    if (e.target.name === 'post-body') {
      setFormValues({
        ...formValues,
        newsBody: e.target.value,
      });
    }
  };
  const handleNewsSubmit = () => {
    if (formValues.newsBody === '' || formValues.newsTitle === '') {
      return;
    }
    // post news to DB
  };
  const handleNewsClear = () => {
    // document.getElementById('title').value = '';
    // document.getElementById('post-body').value = '';
    setFormValues({
      ...defaults,
    });
  };
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
          required
          value={formValues.newsTitle}
          onChange={handleNewsInputChange}
        />
      </div>
      <div className="news-body">
        <TextField
          required
          label="Post Body"
          fullwidth
          multiline
          rowsMax={10}
          id="post-body"
          name="post-body"
          value={formValues.newsBody}
          onChange={handleNewsInputChange}
        />
        <div className="news-submit">
          <Button
            variant="contained"
            onClick={handleNewsSubmit}
            color="primary"
            type="button"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={handleNewsClear}
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

export default Admin;
