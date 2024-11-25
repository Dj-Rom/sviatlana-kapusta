import React from 'react';
import styles from './../../../assets/styles/components/social_media.module.scss';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons';
const SocialMedia = () => {
  return (
    <div className={styles.social_links}>
      <SocialIcon
        className={styles.social_links_icon}
        network="linkedin"
        url="linkedin.com/in/sviatlana-kapusta"
      />
      <SocialIcon
        className={styles.social_links_icon}
        network="behance"
        url="behance.net/sviatlakapusta1"
      />
      <SocialIcon
        className={styles.social_links_icon}
        network="facebook"
        url="/"
      />
       <SocialIcon
        className={styles.social_links_icon}
        network="skype"
        url="live:.cid.444f4346256da9e3 "
      />
    </div>
  );
};

export default SocialMedia;
