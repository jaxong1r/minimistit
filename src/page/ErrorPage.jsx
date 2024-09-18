// src/components/ErrorPage.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Agar siz React Router’dan foydalanayotgan bo’lsangiz

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4rem' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'blue' }}>Go Back Home</NavLink>
    </div>
  );
};

export default ErrorPage;
