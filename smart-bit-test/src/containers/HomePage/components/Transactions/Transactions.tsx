// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// typings
import { AppState } from '../../../../reducers/typings';
// actions
import { transactionsFetchData } from '../../../../actions/transactionsActions';
// styles
import styles from './Transactions.module.css';
// img
import TransactionsMapImg from '../../../../assets/TransactionsMap.png';

const Transactions: React.FC = memo(() => {
  const transactionList = useSelector((state: AppState) => state.transactions.transactionList);
  const hasErrored = useSelector((state: AppState) => state.transactions.transactionHasErrored);
  const isLoading = useSelector((state: AppState) => state.transactions.transactionIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsFetchData('https://next.json-generator.com/api/json/get/Ek4VPrzMu'));
  }, [dispatch]);

  const getDate = (date: string) => {
    return date.split(' ')
  }

  const renderTransactions = transactionList.map((transactionList: any, index: number | string) => {
    const date = getDate(transactionList.date);
    const day = date[2];
    const month = date[1];
    const year = date[3];

    return (
      <tr key={index} className={styles.transactions}>
        <td className={styles.transactionsItem}>
          {Number(index)+1}
        </td>

        <td className={styles.transactionsItem}>
          {transactionList.transaction}
        </td>

        <td className={styles.transactionsItem}>
          {day} {month} {year}
        </td>

        <td className={styles.transactionsItem}>
          <span className={styles.amount}>
            ${Number(transactionList.amount).toFixed(2)}
          </span>
        </td>
      </tr>
    )
  })

  return (
    <>
      {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
        (isLoading) ? <p>Loading…</p> :
          <Cards
            className={styles.transactionsContainer}
            heading='Transactions worlwide'
            type='instruments'
            content={
              <div className={styles.transactionsContent}>
                <table className={styles.transactionsTable}>
                  <thead>
                    <tr className={styles.transactionsHeadings}>
                      <th className={styles.transactionsItemHeading}>No.</th>
                      <th className={styles.transactionsItemHeading}>Transaction</th>
                      <th className={styles.transactionsItemHeading}>Date</th>
                      <th className={styles.transactionsItemHeading}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTransactions}
                  </tbody>
                </table>
                <div className={styles.transactionsImgContainer}>
                  <img
                    className={styles.imgTransactionsMap}
                    src={TransactionsMapImg}
                    alt="Transactions"
                  />
                </div>
              </div>
            }
          />}
    </>
  )
});

export default Transactions;