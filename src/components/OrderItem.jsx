import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

export const OrderItem = ({ product }) => {
  return (
    <div className={styles.OrderItem}>
      <figure>{product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width={100} height={100} />}</figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" className={styles['close-img']} />
    </div>
  );
};
