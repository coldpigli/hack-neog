import React, { createRef, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Lighthouse.module.css";
import toast from "react-hot-toast";
import { Circle } from "rc-progress";
import Pdf from "react-to-pdf";
export default function Lighthouse() {
  const [inputUrl, setInputUrl] = useState("https://www.google.com");
  const [scoreData, setScoreData] = useState();
  const [speedMetrics, setSpeedMetrics] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [metric, setMetric] = useState(0);

  const ref = createRef();
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
      setSpeedMetrics(value[0])
    );
  };

  const calcAvg = () => {
    return scoreData?.reduce((acc, curr) => {
      return (acc += curr.score * 100);
    }, 0);
  };

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
      const first_contentful_paint =
        response.data?.lighthouseResult?.audits["first-contentful-paint"];
      const interactive =
        response.data?.lighthouseResult?.audits["interactive"];
      const speed_index =
        response.data?.lighthouseResult?.audits["speed-index"];
      const total_blocking_time =
        response.data?.lighthouseResult?.audits["total-blocking-time"];
      const largest_contentful_paint =
        response.data?.lighthouseResult?.audits["largest-contentful-paint"];
      const cumalative_layout_shift =
        response.data?.lighthouseResult?.audits["cumulative-layout-shift"];
      return [
        first_contentful_paint,
        interactive,
        speed_index,
        total_blocking_time,
        largest_contentful_paint,
        cumalative_layout_shift,
      ];
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

  return (
    <div ref={ref}>
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
        <Pdf targetRef={ref} filename="Page-Score.pdf" scale={0.5}>
          {({ toPdf }) => (
            <button className={styles.secondary_btn} onClick={toPdf}>
              Download
            </button>
          )}
        </Pdf>
      </div>
      {!speedMetrics?.length >= 0 && (
        <div className={styles.report}>
          <div>
            <h1>Measure Page Quality</h1>
          </div>
          <div className={styles.metrics_wrapper}>
            <div className={styles.metric_header}>Overall</div>
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
          <div className={styles.subtitle_wrapper}>
            <div className={styles.metric_header}>Total</div>
          </div>
          <div className={styles.avg_wrapper}>
            <div className={styles.avg_score}>{(calcAvg() / 3).toFixed(1)}</div>
            <Circle
              percent={(calcAvg() / 3).toFixed(1)}
              strokeWidth="7"
              trailWidth="7"
              strokeColor={`${
                calcAvg() / 3 < 50
                  ? "#DA100B"
                  : calcAvg() / 3 < 75
                  ? "#F0D042"
                  : calcAvg() / 3 <= 100
                  ? "#2AB930"
                  : "#C5DCFA"
              }`}
              trailColor={`${
                calcAvg() / 3 < 50
                  ? "#FCD0CF"
                  : calcAvg() / 3 < 75
                  ? "#FBF3D0"
                  : calcAvg() / 3 <= 100
                  ? "#C5F2C7"
                  : "#C5DCFA"
              }`}
              className={styles.avgBar}
            />
          </div>
          <div className={styles.avg_copy}>
            <h3>Performance</h3>
            <p>
              Values are estimated and may vary. The performance score is
              calculated directly from these metrics.
            </p>
          </div>
          <div className={styles.metrics_wrapper}>
            <div className={styles.metric_header}>Metrics</div>
            <div className={styles.card_container}>
              {speedMetrics?.map((item) => (
                <div className={styles.metric_card}>
                  <div className={styles.metric_text}>
                    <span
                      className={`material-icons ${
                        item.score === 0 || item.score === null
                          ? styles.lowScore
                          : styles.highScore
                      } ${styles.metric_icon}`}
                    ></span>
                    <span className={styles.metric_title}>{item?.title}</span>
                  </div>
                  <span className={`${styles.metric_stat}`}>
                    {item?.displayValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
