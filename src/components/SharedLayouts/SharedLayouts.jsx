import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <section>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
          <Link to="/movies" className={styles.navLink}>
            MOVIES
          </Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};
