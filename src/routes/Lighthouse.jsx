import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLinkClickHandler } from "react-router-dom";
export default function Lighthouse() {
  const [inputUrl, setInputUrl] = useState("https://www.google.com");

  const clickHandler = () => {
    const responseData = Promise.all([
      getSeo(inputUrl),
      getPerf(inputUrl),
      getAccess(inputUrl),
      getBestPractice(inputUrl),
    ]);
    console.log(responseData);
  };

  const getSeo = async (url) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=seo`
      );
      return response.data?.lighthouseResult?.categories?.seo;
    } catch (error) {
      console.log(error);
    }
  };

  const getPerf = async (url) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=performance`
      );
      return response.data?.lighthouseResult?.categories?.performance;
    } catch (error) {
      console.log(error);
    }
  };

  const getAccess = async (url) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=accessibility`
      );
      return response.data?.lighthouseResult?.categories?.accessibility;
    } catch (error) {
      console.log(error);
    }
  };

  const getBestPractice = async (url) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyC42xX5ZHqNgPcMeWNUJzren-CCuY9wD9A&category=best_practices`
      );
      return response.data?.lighthouseResult?.categories?.best_practices;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Address here" value={inputUrl} />
      <button onClick={(e) => clickHandler()}>Check</button>
      <div className={styles.score_wrapper}></div>
    </div>
  );
}
