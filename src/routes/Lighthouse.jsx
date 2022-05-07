import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Lighthouse.module.css";
import toast from "react-hot-toast";
import { Circle } from "rc-progress";
export default function Lighthouse() {
  const [inputUrl, setInputUrl] = useState("https://www.google.com");
  const [scoreData, setScoreData] = useState();
  const [speedMetrics, setSpeedMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let metrics = {};
  const [filteredMetrics, setFilteredMetrics] = useState({});

  const clickHandler = () => {
    const responseData = Promise.all([
      getSeo(inputUrl),
      getPerf(inputUrl),
      getAccess(inputUrl),
    ]).then((scores) => setScoreData(scores));
    toast.promise(
      responseData,
      {
        loading: "Fetching scores",
        success: "Here you go",
        error: "Ouch",
      },
      {
        position: "bottom-center",
      }
    );

    const speedData = Promise.all([getData(inputUrl)]).then((value) =>
      setSpeedMetrics(value)
    );
  };

  useEffect(() => {
    // for (let [key, value] of Object.entries(speedMetrics)) {
    //   metrics = { ...metrics, [key]: value };
    // }

    setSpeedMetrics({});
    console.log(metrics);
  }, [speedMetrics]);

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const getSeo = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=seo`
      );
      return response.data?.lighthouseResult?.categories?.seo;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getData = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A`
      );
      const audits = response.data?.lighthouseResult?.audits;
      return audits;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPerf = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=performance`
      );
      return response.data?.lighthouseResult?.categories?.performance;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAccess = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=accessibility`
      );
      return response.data?.lighthouseResult?.categories?.accessibility;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const getBestPractice = async (url) => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=best-practices`
  //     );
  //     return response.data?.lighthouseResult?.categories?.best_practices;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className={styles.address_wrapper}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Enter Address here"
          value={inputUrl}
        />
        <button className={styles.btn} onClick={(e) => clickHandler()}>
          Check
        </button>
      </div>
      <div className={styles.score_wrapper}>
        {scoreData?.map((category) => (
          <div key={category.id} className={styles.score_card}>
            <h5 className={styles.score}>{category.score * 100}</h5>
            <p className={styles.title}>{category.title}</p>
            <Circle
              percent={category.score * 100}
              strokeWidth="7"
              trailWidth="7"
              strokeColor={`${
                category.score < 0.5
                  ? "#DA100B"
                  : category.score < 0.75
                  ? "#F0D042"
                  : category.score <= 1
                  ? "#2AB930"
                  : "#C5DCFA"
              }`}
              trailColor={`${
                category.score < 0.5
                  ? "#FCD0CF"
                  : category.score < 0.75
                  ? "#FBF3D0"
                  : category.score <= 1
                  ? "#C5F2C7"
                  : "#C5DCFA"
              }`}
              className={styles.progressBar}
            />
          </div>
        ))}
      </div>
      <div className={styles.metrics_wrapper}>
        <div className={styles.metric_header}>Metrics</div>
        <div className={styles.metric_card}>
          <div className={styles.metric_text}>
            <span className={`material-icons ${styles.metric_icon}`}></span>
            <span className={styles.metric_title}>
              {["first-contentful-paint"].title}
            </span>
          </div>
          <span className={`${styles.metric_stat}`}></span>
        </div>
      </div>
    </div>
  );
}
