import React, { useContext } from 'react';
import '@styles/ProductItem.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <Image src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)} className="cart-icon">
          <Image src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};
