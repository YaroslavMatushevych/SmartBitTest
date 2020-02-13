// modules
import React, { memo } from 'react';
// components
import Cards from '../../../../ui-library/components/Cards';
// consts 
import { mainInfoItems } from '../../../../consts';
// styles
import styles from './MainInfo.module.css';

const MainInfo: React.FC = memo(() => {

  const data = mainInfoItems.map((item, index) => {
    const addContent = (
      <div className={styles.addContent}>
        <p className={styles.number}>
          {item.number + ',000'}
        </p>
        <p className={styles.smallText}>
          {item.smallText}
          <span>{43 + index}%<i className="fas fa-long-arrow-alt-up" /></span>
        </p>
      </div>
    )
    return (
      <Cards
        key={index}
        className={styles.mainInfoContainer}
        type='span'
        heading={item.heading}
        colorSpan={item.color}
        textSpan={item.text}
        content={addContent}
      />
    )
  })

  return (
    <>
      {data}
    </>
  )
});

export default MainInfo;