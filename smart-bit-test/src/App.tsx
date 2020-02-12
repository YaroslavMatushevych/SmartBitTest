// modules
import React from 'react';
// containers
import HomePage from './containers/HomePage';
// styles
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <HomePage />
    </div>
  );
}

export default App;

