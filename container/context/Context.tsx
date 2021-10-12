import React, { createContext, useState } from "react";

interface CountContext {
  count: number;
  setCount: (value: number) => void;
}

export const CountContext = createContext<CountContext>({
  count: 0,
  setCount: () => {},
});

const CountContextProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
