import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import { AppContext } from '@context/AppContext';
import arrow from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => state.cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product, i) => (
          <OrderItem product={product} key={`orderItem-${i}`} index={i} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout" className={styles['primary-button']}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};
