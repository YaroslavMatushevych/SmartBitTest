// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// actions
import { messagesFetchData } from '../../../../actions/messagesActions';
// styles
// import styles from './Messages.module.css';

const Messages: React.FC = memo(() => {

  const messages = useSelector((state: any) => state.messages);
  const hasErrored = useSelector((state: any) => state.hasErrored);
  const isLoading = useSelector((state: any) => state.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(messagesFetchData('https://next.json-generator.com/api/json/get/VycIKBzf_'));
  }, [dispatch]);

  const data = messages.map((message: { name: { first: string; last: string; }; content: string; }) => {
    return (
      <div>
        <h4>{`${message.name.first} ${message.name.last}`}</h4>
        <p>{message.content}</p>
      </div>
    )
  })

  return (
    <div>
      {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
        (isLoading) ? <p>Loading…</p> : <Cards heading='Messages' type='instruments' content={data} />}
    </div>
  )
});

export default Messages;