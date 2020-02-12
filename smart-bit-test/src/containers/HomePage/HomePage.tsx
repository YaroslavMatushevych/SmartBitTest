// modules
import React, { memo } from 'react';
// components
import Messages from './components/Messages';
import NavList from './components/NavList';
import MainInfo from './components/MainInfo';
import Orders from './components/Orders';
import UserProjectList from './components/UserProjectList';
// styles
import styles from './HomePage.module.css';

const HomePage: React.FC = memo(() => {

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <nav className={styles.nav}>
          <NavList />
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <MainInfo />
        <Orders />
        <Messages />
        <UserProjectList />
      </div>
    </main>
  )
});

export default HomePage;