import React from 'react';
import styles from './../../../assets/styles/components/social_media.module.scss';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons';
const SocialMedia = () => {
  return (
    <div class={styles.social_links}>
      <SocialIcon
        className={styles.social_links_icon}
        network="linkedin"
        url="/"
      />
      <SocialIcon
        className={styles.social_links_icon}
        network="behance"
        url="/"
      />
      <SocialIcon
        className={styles.social_links_icon}
        network="facebook"
        url="/"
      />
    </div>
  );
};

export default SocialMedia;
