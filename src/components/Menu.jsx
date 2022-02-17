/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

export const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" className={styles.title}>
            <a>My orders</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>My account</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign out</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
