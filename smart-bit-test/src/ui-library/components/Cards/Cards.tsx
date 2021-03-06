// modules
import React from 'react';
import cx from 'classnames';
// components
import Button from '../Button';
// styles
import styles from './Cards.module.css';

interface Props {
  id?: string;
  className?: string;
  type: 'span' | 'select' | 'instruments';
  heading: string;
  content: any;
  colorSpan?: string;
  textSpan?: string;
}

const Card: React.FC<Props> = ({ heading, id, className, type, content, textSpan, colorSpan }) => {
  const renderType = (type: Props['type']) => {
    if (type === 'select') {
      return (
        <select id="term">
          <option value="today">Today</option>
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
        </select>
      )
    }
    if (type === 'span') {
      if (colorSpan === 'redSpan') return (<span className={styles.redSpan}>{textSpan}</span>);
      if (colorSpan === 'lightGreenSpan') return (<span className={styles.lightGreenSpan}>{textSpan}</span>);
      if (colorSpan === 'blueSpan') return (<span className={styles.blueSpan}>{textSpan}</span>);
      if (colorSpan === 'greenSpan') return (<span className={styles.greenSpan}>{textSpan}</span>);
    }
    if (type === 'instruments') {
      return (
        <div className={styles.instruments}>
          <Button className={styles.cardBtn} icon={<i className="fas fa-arrow-up" />}/>
          <Button className={styles.cardBtn} icon={<i className="fas fa-wrench" />}/>
          <Button className={styles.cardBtn} icon={<i className="fas fa-trash" />}/>
        </div>
      );
    }
  }

  return (
    <div
      className={cx(
        styles.card,
        className)}
      id={id}
    >
      <header className={styles.cardHeader}>
        <h3>{heading}</h3>
        {renderType(type)}
      </header>
      {content}
    </div>
  )
}

export default Card;