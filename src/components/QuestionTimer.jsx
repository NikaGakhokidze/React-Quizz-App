import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timerTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
      setRemainingTime(timeout);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}
