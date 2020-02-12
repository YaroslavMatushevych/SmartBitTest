// modules
import React, { memo } from 'react';
// components
import Cards from '../../../../ui-library/components/Cards';
// styles
import styles from './Orders.module.css';
// img
import OrdersImg from '../../../../assets/OrdersImg.png';

const Orders: React.FC = memo(() => {

  return (
    <>
      <Cards className={styles.ordersContainer} heading='Orders' type='select' content={<img className={styles.imgOrder} src={OrdersImg} alt="Orders" />}/>
    </>
  )
});

export default Orders;