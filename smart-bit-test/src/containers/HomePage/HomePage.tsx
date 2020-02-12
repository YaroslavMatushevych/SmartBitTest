// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Button from '../../ui-library/components/Button';
// actions
import { messagesFetchData } from '../../actions/messagesActions';
// styles
import styles from './HomePage.module.css';

const HomePage: React.FC = memo(() => {

  const messages = useSelector((state: any) => state.messages);
  const hasErrored = useSelector((state: any) => state.hasErrored);
  const isLoading = useSelector((state: any) => state.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(messagesFetchData('https://next.json-generator.com/api/json/get/VycIKBzf_'));
  }, []);

  console.log(messages);
  
  return (
    <main>
        {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
          (isLoading) ? <p>Loading…</p> : <p>{messages[0].id}</p>}
    </main>
  )
});

export default HomePage;