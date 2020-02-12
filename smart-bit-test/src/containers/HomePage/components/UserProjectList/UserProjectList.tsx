// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
// const
import { monthNames } from '../../../../consts';
// actions
import { projectListFetchData } from '../../../../actions/projectListActions';
// styles
import styles from './UserProjectList.module.css';

const UserProjectList: React.FC = memo(() => {

  const projectList = useSelector((state: any) => state.projectList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(projectListFetchData('https://next.json-generator.com/api/json/get/EkI_HSfGu'));
  }, [dispatch]);

  const getMonth = (date: string, monthNames: string[]) => {
    return monthNames[new Date(date).getMonth()]
  }

  const checkStatus = () => {

  }

  const checkValue = () => {
    
  }

  const renderListItems = projectList.map((projectList: any, index: number | string) => {
    const day = new Date(projectList.date).getDate();
    const month = getMonth(projectList.date, monthNames);
    const year = new Date(projectList.date).getFullYear();

    return (
      <tr key={index} className={styles.list}>
        <td className={styles.listItem}>{projectList.status}</td>
        <td className={styles.listItem}>{day} {month} {year}</td>
        <td className={styles.listItem}>{projectList.user}</td>
        <td className={styles.listItem}>{projectList.value}</td>
      </tr>
    )
  })

  return (
    <>
      {
        (projectList) &&
        <Cards
          className={styles.UserProjectList}
          heading='User Project list'
          type='instruments'
          content={
            <table className={styles.listContainer}>
              <tr className={styles.listHeadings}>
                <th className={styles.listItemHeading}>Status</th>
                <th className={styles.listItemHeading}>Date</th>
                <th className={styles.listItemHeading}>User</th>
                <th className={styles.listItemHeading}>Value</th>
              </tr>
              {renderListItems}
            </table>
          }
        />}
    </>
  )
});

export default UserProjectList;