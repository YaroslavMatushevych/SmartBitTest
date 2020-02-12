// modules
import React, { useState, memo } from 'react';
// consts 
import { navLinks } from '../../../../consts';
// styles
import styles from './NavList.module.css';

const NavList: React.FC = memo(() => {

  const [selectedLink, setLink] = useState(9);

  const data = navLinks.map((linkName, index) => {
    return (
        <li key={index} className={(selectedLink === index)
          ? styles.listLinkItemActive
          : styles.listLinkItem}
          onClick={()=>setLink(index)}
        >
          <a className={styles.navLink} href='#'>{linkName}</a>
        </li>
    )
  })

  return (
    <ul>
      {data}
    </ul>
  )
});

export default NavList;