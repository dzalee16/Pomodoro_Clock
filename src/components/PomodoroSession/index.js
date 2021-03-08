import React from "react";
import moment from "moment";
import momentDurationFormat from "moment-duration-format";

momentDurationFormat(moment);

const PomodoroSession = ({ timeLeft }) => {
  let formatPomodoroTimer;
  if (timeLeft > 60) {
    //greater then minute
    formatPomodoroTimer = moment
      .duration(timeLeft, "s")
      .format("mm:ss", { trim: false });
  } else {
    //minute or less then minute
    formatPomodoroTimer = moment
      .duration(timeLeft, "m")
      .format("ss:mm", { trim: false });
  }

  return <h1 className="text-center">{formatPomodoroTimer}</h1>;
};

export default PomodoroSession;
