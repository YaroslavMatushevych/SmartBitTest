// modules
import React, { memo } from 'react';
// components
import Messages from './components/Messages';
import NavList from './components/NavList';
import MainInfo from './components/MainInfo';
import Orders from './components/Orders';
import UserProjectList from './components/UserProjectList';
import SmallToDoList from './components/SmallToDoList';
import Transactions from './components/Transactions';
// img
import profileImg from './../../assets/Matushevych.png'
// styles
import styles from './HomePage.module.css';

const HomePage: React.FC = memo(() => {

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <div className={styles.profileContainer}>
          <img className={styles.profileImg} src={profileImg} alt="person"/>
          <h4 className={styles.name}>Yroslav Matushevych</h4>
          <p className={styles.profession}>Front-End Developer</p>
        </div>
        <nav className={styles.navBar}>
          <NavList />
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <MainInfo />
        <Orders />
        <Messages />
        <div className={styles.twoListAndTransactionContainer}>
          <UserProjectList />
          <SmallToDoList />
          <Transactions />
        </div>
      </div>
    </main>
  )
});

export default HomePage;