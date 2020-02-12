// modules
import React, { useState, memo } from 'react';
// styles
import styles from './MainInfo.module.css';

const MainInfo: React.FC = memo(() => {

  // const [selectedLink, setLink] = useState(9);

  // const data = navLinks.map((linkName, index) => {
  //   return (
  //       <li className={(selectedLink === index)
  //         ? styles.listLinkItemActive
  //         : styles.listLinkItem}
  //         onClick={()=>setLink(index)}
  //       >
  //         <a className={styles.navLink} href='#'>{linkName}</a>
  //       </li>
  //   )
  // })

  return (
    <ul>
      {data}
    </ul>
  )
});

export default MainInfo;