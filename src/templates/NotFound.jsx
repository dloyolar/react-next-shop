import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.scss';

export const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
        alt="not_found"
        className="NotFound-image"
      />
      <p className="NotFound-text">Page Not Found!</p>
      <Link to="/">
        <h1>Return to Home</h1>
      </Link>
    </div>
  );
};
