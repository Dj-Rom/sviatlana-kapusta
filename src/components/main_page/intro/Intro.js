import React from 'react';
import styles from './../../../assets/styles/components/intro.module.scss';

const Intro = () => {
  return (
    <section class={styles.intro_section}>
      <h2>
        <span>I'm</span> Sviatlana Kapusta,
      </h2>
      <p>a UX/UI designer specialising in creating sleek, </p>
      <p>user-friendly mobile apps.</p>
    </section>
  );
};

export default Intro;
