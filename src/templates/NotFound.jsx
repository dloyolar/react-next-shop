import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import '../styles/NotFound.scss';

export const NotFound = () => {
  return (
    <div className="NotFound">
      <Image src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="not_found" width={100} height={100} className="NotFound-image" />
      <p className="NotFound-text">Page Not Found!</p>
      <Link href="/">
        <h1>Return to Home</h1>
      </Link>
    </div>
  );
};
