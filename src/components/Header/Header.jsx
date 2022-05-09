import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_hero}>
        <Link to="/">
          <h1>W.A.S.P</h1>
        </Link>
      </div>

      <div className={styles.navbar}>
        <NavLink to="/responsively">
          <div className={styles.navItem}>
            <span className="material-icons">devices</span>
            <p>Responsive</p>
          </div>
        </NavLink>

        <NavLink to="/color-contrast">
          <div className={styles.navItem}>
            <span className="material-icons">contrast</span>
            <p>Contrast</p>
          </div>
        </NavLink>

        <NavLink to="/lighthouse">
          <div className={styles.navItem}>
            <span className="material-icons">speed</span>
            <p>Metrics</p>
          </div>
        </NavLink>
        <NavLink to="/fontjoy">
          <div className={styles.navItem}>
            <span className="material-icons">text_fields</span>
            <p>Font</p>
          </div>
        </NavLink>
        <NavLink to="/rankings">
          <div className={styles.navItem}>
            <span className="material-icons">leaderboard</span>
            <p>Leaderboard</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
