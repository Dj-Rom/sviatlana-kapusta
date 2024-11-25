import React from 'react';
import Navi from '../navi/Navi';
import Intro from './intro/Intro';
import ProjectView from './view_project/ProjectView';
import styles from './../../assets/styles/components/main_page.module.scss';
import { projectsList } from '../../data/projectsList';
import SocialMedia from './social_media/SocialMedia';

const MainPage = () => {
  return (
    <>
      <Navi />
      <Intro />
      <SocialMedia />
      <section className={styles.main_project}>
        <ProjectView className={styles.main_project_icon} {...projectsList} />
      </section>

      <div className={styles.main_projects_group}>
        <ProjectView
          className={styles.main_project_icon2}
          {...projectsList}
          class={styles.any_projects}
        />
        <ProjectView
          className={styles.main_project_icon2}
          {...projectsList}
          class={styles.any_projects}
        />
      </div>
      <footer class={styles.main_footer}>
  <span>&copy; 2024 Dj_Rom and Sviatlana Kapusta. Poland</span>
</footer>

    </>
  );
};

export default MainPage;
