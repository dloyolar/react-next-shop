import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

export const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (indexValue) => {
    removeFromCart(indexValue);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image src={close} alt="close" className={styles['close-img']} onClick={() => handleRemove(index)} />
    </div>
  );
};
