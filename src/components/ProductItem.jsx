import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)} className={styles['cart-icon']}>
          <Image src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};
