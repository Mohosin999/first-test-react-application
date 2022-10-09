import { useEffect, useState } from "react";
import * as DateFns from "date-fns";
import Layout from "../components/layout/Layout";

// utility function start

const getTimes = (date) => {
  return {
    hours: DateFns.getHours(date),
    minutes: DateFns.getMinutes(date),
    seconds: DateFns.getSeconds(date),
  };
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

// utility function ends

const ClockPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTimes(date);

  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {formatTime(time.hours)} : {formatTime(time.minutes)} :{" "}
        {formatTime(time.seconds)}
      </h1>
    </Layout>
  );
};

export default ClockPage;
