import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex-col gap-8 bg-white text-black text-lg border rounded-lg p-1">
      <h2>{currentDateTime.format("MMMM D, YYYY")}</h2>
      <h2 className="text-center">{currentDateTime.format("HH:mm:ss")}</h2>
    </div>
  );
};

export default Clock;
