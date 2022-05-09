import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h2 className={styles.hero_header}>Web Accessibility Starter Pack</h2>
          <p className={styles.hero_desc}>
            DevTools that benefit everybody, not just people with special
            abilities.
          </p>
        </div>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_img}>
            <video
              src="https://res.cloudinary.com/dkqrmlxlg/video/upload/v1649884290/Iridescent/animated_medium20201006-7152-owgrd8_reis0o.mp4"
              alt="hero banner"
              type="video/mp4"
              autoplay="true"
              muted="true"
              loop="true"
            />
          </div>
        </div>
      </div>
      <section>
        <h2 className={styles.text_subheader}>Tools we offer</h2>
        <div className={styles.offerings}>
          <Link to="/responsively" className={styles.card_wrapper}>
            <div className={styles.landing_card}>
              <h3>Responsively</h3>
              <p>
                Responsively allows you a single glance view of your website in
                all the common screen sizes. It also supports screenshot feature
                both in portrait and landscape mode.
              </p>
            </div>
          </Link>
          <Link to="/lighthouse" className={styles.card_wrapper}>
            <div className={styles.landing_card}>
              <h3>Web Metrics</h3>
              <p>
                Web metrics runs lighthouse tests on your website and scores you
                based on 3 parameters. It also provides more metadata related to
                the site’s loading time, blocking time etc.. The entire report
                is downloadable in PDF format.
              </p>
            </div>
          </Link>
          <Link to="/color-contrast" className={styles.card_wrapper}>
            <div className={styles.landing_card}>
              <h3>Colors for all</h3>
              <p>
                Colors for all is a tool that calculates the contrast ratio of
                colors against a background to see if they are in accordance to
                the WCAG2 standards. Colors for all also allows you to
                experience how colorblind people interpret colors.
              </p>
            </div>
          </Link>
          <Link to="/fontjoy" className={styles.card_wrapper}>
            <div className={styles.landing_card}>
              <h3>Fontjoy</h3>
              <p>
                Font Joy is a tool that lets you select fonts that qualify the
                WCAG2 standards. It generates random font pairings, from a pool
                of easy-to-eye fonts.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
