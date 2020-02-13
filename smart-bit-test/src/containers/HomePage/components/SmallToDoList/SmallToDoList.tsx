// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// actions
import { toDoListFetchData, toDoListCheckUnCheck } from '../../../../actions/toDoListActions';
// styles
import styles from './SmallToDoList.module.css';

const SmallToDoList: React.FC = memo(() => {
  const toDoList = useSelector((state: any) => state.toDoList.toDoListItems);
  const hasErrored = useSelector((state: any) => state.toDoList.hasErrored);
  const isLoading = useSelector((state: any) => state.toDoList.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toDoListFetchData('https://next.json-generator.com/api/json/get/NJ_o8BzzO'));
  }, [dispatch]);

  const checkUnCheckWrapper = (e: any) => {
    let status = '';
    (!e.target.checked) ? status = '' : status = 'done';
    dispatch(toDoListCheckUnCheck(status, e.target.id))
  }

  const renderToDoList = toDoList.map((toDoItem: { status: string, task: string, user: string }, index: string | undefined) => {
    return (
      <div key={index} className={styles.toDoItem}>
        <input
          className={styles.inputCheckbox}
          id={index}
          type="checkbox"
          checked={toDoItem.status === 'done' ? true : false}
          onChange={checkUnCheckWrapper}
        />
        <label htmlFor={index} className={styles.task} >{toDoItem.task}</label>
      </div>
    )
  })

  return (
    <>
      {(hasErrored) ? <p>Sorry! There was an error loading the items</p> :
        (isLoading) ? <p>Loading…</p> :
          <Cards
            className={styles.smallToDoList}
            heading='Small todo list'
            type='instruments'
            content={
              <div className={styles.toDoItemsContainer}>
                {renderToDoList}
              </div>
            }
          />}
    </>
  )
});

export default SmallToDoList;