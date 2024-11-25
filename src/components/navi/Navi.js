import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../../assets/styles/components/navi.module.scss';

const Navi = () => {
  return (
    <nav className={styles.navi_nav}>
      <Link className={styles.navi_main} to="/">
        Sviatlana Kapusta
      </Link>
      <ul className={styles.navi_ul}>
        <li className={styles.navi_li_link}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={styles.navi_li_link}>
          <Link to="/resume">Resume</Link>
        </li>
        <li className={styles.navi_li_link}>
          <Link to="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
