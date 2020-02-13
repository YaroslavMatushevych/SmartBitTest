// modules
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Cards from '../../../../ui-library/components/Cards';
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

  const checkStatus = (status: string) => {
    if (status === 'completed') return (<span className={styles.completed} >Completed</span>);
    if (status === 'pending') return (<span className={styles.pending} >Pending...</span>);
    if (status === 'canceled') return (<span className={styles.canceled} >Canceled</span>);
  }

  const checkValue = (value: string) => {
    if (value > '0') return (<span className={styles.greenVal}><i className="fas fa-long-arrow-alt-up" /> {Number(value).toFixed()}%</span>);
    if (value < '0') return (<span className={styles.redVal}><i className="fas fa-long-arrow-alt-down" /> {Number(value).toFixed()}%</span>);
    if (value === '0') return (<span className={styles.orangeVal}>{Number(value).toFixed()}</span>);
  }

  const getHours = (date: string) => {
    let minutes: number | string = new Date(date).getMinutes();
    if (minutes < 10) minutes = ('0' + minutes);
    const hours = new Date(date).getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';

    return hours + ':' + minutes + ampm
  }

  // const getMonth = (date: string, monthNames: string[]) => {
  //   return monthNames[new Date(date).getMonth()]
  // }
  // const day = new Date(projectList.date).getDate();
  // const month = getMonth(projectList.date, monthNames);
  // const year = new Date(projectList.date).getFullYear();

  const renderListItems = projectList.map((projectList: any, index: number | string) => {
    const status = checkStatus(projectList.status);
    const value = checkValue(projectList.value);
    const time = getHours(projectList.date);

    return (
      <tr key={index} className={styles.list}>
        <td className={styles.listItem}>{status}</td>
        <td className={styles.listItem}><i className="far fa-clock" /> {time}</td>
        <td className={styles.listItem}>{projectList.user}</td>
        <td className={styles.listItem}>{value}</td>
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
              <thead>
                <tr className={styles.listHeadings}>
                  <th className={styles.listItemHeading}>Status</th>
                  <th className={styles.listItemHeading}>Date</th>
                  <th className={styles.listItemHeading}>User</th>
                  <th className={styles.listItemHeading}>Value</th>
                </tr>
              </thead>
              <tbody>
                {renderListItems}
              </tbody>
            </table>
          }
        />}
    </>
  )
});

export default UserProjectList;