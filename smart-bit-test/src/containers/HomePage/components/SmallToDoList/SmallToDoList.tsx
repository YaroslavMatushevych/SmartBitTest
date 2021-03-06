// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// typings
import { AppState } from '../../../../reducers/typings';
// actions
import { toDoListFetchData, toDoListCheckUnCheck } from '../../../../actions/toDoListActions';
// styles
import styles from './SmallToDoList.module.css';

const SmallToDoList: React.FC = memo(() => {
  const toDoList = useSelector((state: AppState) => state.toDoList.toDoListItems);
  const hasErrored = useSelector((state: AppState) => state.toDoList.toDoListHasErrored);
  const isLoading = useSelector((state: AppState) => state.toDoList.toDoListIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toDoListFetchData('https://next.json-generator.com/api/json/get/NJ_o8BzzO'));
  }, [dispatch]);

  const checkUnCheckWrapper = (e: any) => {
    let status = '';
    (!e.target.checked) ? status = '' : status = 'done';
    dispatch(toDoListCheckUnCheck(status, e.target.id))
  }

  const renderToDoList = toDoList.map((toDoItem: any, index: any) => {
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