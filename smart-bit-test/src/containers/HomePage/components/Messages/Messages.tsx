// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// actions
import { messagesFetchData } from '../../../../actions/messagesActions';
// typings
import { AppState } from '../../../../reducers/typings';
// styles
import styles from './Messages.module.css';

const Messages: React.FC = memo(() => {

  const messages = useSelector((state: AppState) => state.messages.messagesItems);
  const hasErrored = useSelector((state: AppState) => state.messages.messagesHasErrored);
  const isLoading = useSelector((state: AppState) => state.messages.messagesIsLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(messagesFetchData('https://next.json-generator.com/api/json/get/VycIKBzf_'));
  }, [dispatch]);

  const data = messages.map((message: { name: { first: string; last: string; }; content: string; }, index: string | number | undefined) => {
    return (
      <div key={index} className={styles.message}>
        <h4>{`${message.name.first} ${message.name.last}`}</h4>
        <p className={styles.messageText}>{message.content}</p>
      </div>
    )
  })

  return (
    <div className={styles.messageContainer}>
      {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
        (isLoading) ? <p>Loading…</p> : <Cards heading='Messages' type='instruments' content={data} />}
    </div>
  )
});

export default Messages;