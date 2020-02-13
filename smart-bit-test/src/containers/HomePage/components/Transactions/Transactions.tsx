// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// const
import { monthNames } from '../../../../consts';
// actions
import { transactionsFetchData } from '../../../../actions/transactionsActions';
// styles
import styles from './Orders.module.css';
// img
import TransactionsMapImg from '../../../../assets/TransactionsMap.png';

const Transactions: React.FC = memo(() => {
  const transactionList = useSelector((state: any) => state.transactions.transactonList);
  const hasErrored = useSelector((state: any) => state.transactions.hasErrored);
  const isLoading = useSelector((state: any) => state.transactions.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsFetchData('https://next.json-generator.com/api/json/get/Ek4VPrzMu'));
  }, [dispatch]);


  const getHours = (date: string) => {
    let minutes: number | string = new Date(date).getMinutes();
    if (minutes < 10) minutes = ('0' + minutes);
    const hours = new Date(date).getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';

    return hours + ':' + minutes + ampm
  }

  const getMonth = (date: string, monthNames: string[]) => {
    return monthNames[new Date(date).getMonth()]
  }
  const day = new Date(transactionList.date).getDate();
  const month = getMonth(transactionList.date, monthNames);
  const year = new Date(transactionList.date).getFullYear();

  const renderTransactions = transactionList.map((transactionList: any, index: number | string) => {
    const time = getHours(transactionList.date);

    return (
      <tr key={index} className={styles.transactions}>
        <td className={styles.transactionsItem}>{status}</td>
        <td className={styles.transactionsItem}><i className="far fa-clock" /> {time}</td>
        <td className={styles.transactionsItem}>{transactionList.user}</td>
      </tr>
    )
  })

  return (
    <>
      {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
        (isLoading) ? <p>Loading…</p> :
          <Cards
            className={styles.TransactionsContainer}
            heading='Transactions worlwide'
            type='instruments'
            content={
              <div className={styles.transactionsContent}>
                <table className={styles.transactionsContainer}>
                  <thead>
                    <tr className={styles.transactionsHeadings}>
                      <th className={styles.transactionsItemHeading}>Status</th>
                      <th className={styles.transactionsItemHeading}>Date</th>
                      <th className={styles.transactionsItemHeading}>User</th>
                      <th className={styles.transactionsItemHeading}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTransactions}
                  </tbody>
                </table>
                <img
                  className={styles.imgTransactionsMap}
                  src={TransactionsMapImg}
                  alt="Transactions"
                />
              </div>
            }
          />}
    </>
  )
});

export default Transactions;