import React from 'react';
import styles from '../../assets/styles/components/about_me_page.module.scss';
const AboutPage = () => {
  return (
    <section className={styles.about_me_page}>
      <h2>Who I am</h2>
      <img
        src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-1/448387849_122093248646379566_616325213513192108_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=WHGieVwxPE4Q7kNvgE-Hc8P&_nc_zt=24&_nc_ht=scontent-ber1-1.xx&_nc_gid=AM53WkcwvhhGZ1FJ_DFTPkc&oh=00_AYDBqjxF6ytCX1Fq1ZwVtco8xRmJxDr5dnMBBX8A33_RLw&oe=674A48C7"
        alt=""
      />
      <div className={styles.text}>
        <span>
          Lorem ipsum dolor sit amet consectetur. Vitae cursus tristique nisi
          nulla imperdiet. At pretium condimentum sit faucibus risus. Amet
          scelerisque ultricies lacus quis at porttitor. Pulvinar habitant
          bibendum rhoncus rutrum.
        </span>
        <br />
        <span className={styles.about_me_span}>
          Lorem ipsum dolor sit amet consectetur. Vitae cursus tristique nisi
          nulla imperdiet. At pretium condimentum sit faucibus risus. Amet
          scelerisque ultricies lacus quis at porttitor. Pulvinar habitant
          bibendum rhoncus rutrum.
        </span>
      </div>
    </section>
  );
};

export default AboutPage;
