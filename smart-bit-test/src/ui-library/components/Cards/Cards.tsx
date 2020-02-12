// modules
import React from 'react';
import cx from 'classnames';
// styles
import styles from './Cards.module.css';

interface Props {
  id?: string;
  className?: string;
  type: 'span' | 'select' | 'instruments';
  heading: string;
  content: any;
  // colorSpan?: 'red' | 'blue' | 'green' | 'lightGreen'
}

const Card: React.FC<Props> = ({ heading, id, className, type, content }) => {
  const renderType = (type:Props['type']) => {
    if (type === 'select') { 
      return (
        <select id="term">
          <option value="today">Today</option>
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
        </select>
        )
    }
    if (type === 'span') return(<span>sdf</span>);
    if (type === 'instruments') return(<span>sdf</span>);
  }
  
  return (
    <div 
      className={cx(
      styles.card,
      className)} 
      id={id} 
    >
      <header className={styles.cardHeader}>
      <h2>{heading}</h2>
        {renderType(type)}
      </header>
      {content}
    </div>
  )
}

export default Card;