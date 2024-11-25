import React from 'react';
import styles from './../../assets/styles/components/resume.module.scss';
const ResumePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Sviatlana Kapusta</h1>
        <h2>UX/UI Designer</h2>
        <div class="contact">
          <p>Portfolio Address</p>
          <p>Email</p>
          <p>LinkedIn</p>
          <p>Phone</p>
          <a
            href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQImo7gpDHJWXwAAAZNjtD8jxzOZBgRbjCtJsDtLn_9V_SLPMdSALlc9qFyzUOPRPs2skIlymeP7M-dhP0TgsdS8IPfgKUPHBbxijLCqqgWfpildTMAOq1oB2GpX-RDSRKLZ4AlEywVvmU7qgEzakfnJFMgfzXZey31159yMHnRWKQyFdXeNPWs9Kt0nLrbY4rWdXsgeYP96zA-Qd67Evl0hcLPak515vzHid7fY4u5XFnsiFBxdclUoqwdhNVdQT_ru3LJ0lTxYkseCU3t4bq9iPmf1ggnfqudAw7nRTq8YS2MvmndclTRiMfmKq-4KESbSSuLzLfHjPPmf9xZ8Nyp0LxKF7dD7ul-u5C1FKFYKOfpq37--sZo8gPReOaM5Wchli8kHNevvI0A-3m4xftYpxgYBhdlOzMveLNs9VlBL68aZ7YFRdqBk3f_XBYXNyLexbjdA7xCV7TkGQofYjjzfoqs3NqtyxjXkGE0HXqCDW1tUZKhjZ3dRH6691mualxI9j-y2OHRTaCGOmT4nG9Kev6AUwmYtemOBwv7ovKLN52Au2l8hw9pf75wwt18mg7YJK6Q&x-ambry-um-filename=Profile.pdf"
            download="CV_Sviatlana_Kapusta_UI_UX_Designer.pdf"
          >
            <button>Download Resume as PDF</button>
          </a>
        </div>
      </header>

      <section className={styles.education}>
        <h3>Education</h3>
        <div class="item">
          <h4>
            Position <span>Company</span>
          </h4>
          <p>// date</p>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </section>

      <section className={styles.experience}>
        <h3>Experience</h3>
        <div class="item">
          <h4>
            Position <span>Company</span>
          </h4>
          <p>// date</p>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </section>

      <section className={styles.skills}>
        <h3>Skills</h3>
        <div class="item">
          <h4>
            Position <span>Company</span>
          </h4>
          <p>// date</p>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
