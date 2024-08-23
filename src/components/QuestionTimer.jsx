import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("Setting TIMEOUT");
    const timerTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting TIMEOUT");
    const timerInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
      setRemainingTime(timeout);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
