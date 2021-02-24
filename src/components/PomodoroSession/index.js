import React from "react";
import moment from "moment";
import momentDurationFormat from "moment-duration-format";

momentDurationFormat(moment);

const PomodoroSession = ({ timeLeft }) => {
  const formatPomodoroTimer = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return <h1 className="text-center">{formatPomodoroTimer}</h1>;
};

export default PomodoroSession;
