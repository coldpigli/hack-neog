import { useLeaderboard } from "contexts";
import React, { useEffect, useState } from "react";
import styles from "./Ranking.module.css";

const Rankings = () => {
  const { leaderboard, setLeaderBoard } = useLeaderboard();
  const [descendingOrder, setDescendingOrder] = useState([]);
  useEffect(() => {
    const temp = leaderboard.sort((a, b) => b.avgScore - a.avgScore);
    setDescendingOrder(temp);
  }, [leaderboard]);

  return (
    <div>
      <h2 className={styles.title}>
        See how your website fares against others
      </h2>
      <div className={styles.score_container}>
        {descendingOrder &&
          descendingOrder.map((website) => {
            return (
              <div className={styles.score_value}>
                <h4 className={styles.link}>{website.url}</h4>
                <h4 className={styles.score}>{website.avgScore}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Rankings;
