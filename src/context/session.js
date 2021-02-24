import React, { createContext } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const session = {
    pomodoroLength: 1500,
    shortBreakLength: 300,
    longBreakLength: 900,
  };

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
