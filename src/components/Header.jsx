import React, { useContext, useState } from 'react';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import { AppContext } from '@context/AppContext';
import { MyOrder } from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const handleToggleOrder = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
        <ul>
          <li>
            <acorn href="/">All</acorn>
          </li>
          <li>
            <acorn href="/">Clothes</acorn>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            email@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder}>
            <Image src={shoppingCart} alt="shopping cart" />
            <div>{state.cart?.length}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
