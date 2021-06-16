import React, { useState } from 'react';
import axios from 'axios';
import NewsForm from './NewsForm';
import AuthForm from './AuthForm';

const Admin = () => {
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
    location.replace('/admin/private/index.html');
  }
  // Should be unreachable.
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default Admin;
