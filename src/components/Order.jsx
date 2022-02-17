import React from 'react';
import '../styles/Order.scss';

import arrow from '@icons/flechita.svg';
import Image from 'next/image';

export const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={arrow} alt="arrow" width={100} height={100} />
    </div>
  );
};
