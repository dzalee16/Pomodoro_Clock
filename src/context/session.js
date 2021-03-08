import React, { createContext, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [pomodoroLength, setPomodoroLength] = useState(25);
  const [shortBreakLength, setShortBreakLength] = useState(5);
  const [longBreakLength, setLongBreakLength] = useState(15);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SessionContext.Provider
      value={{
        isOpen,
        setIsOpen,
        pomodoroLength,
        setPomodoroLength,
        shortBreakLength,
        setShortBreakLength,
        longBreakLength,
        setLongBreakLength,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
