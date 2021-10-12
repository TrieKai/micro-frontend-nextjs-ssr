import { useContext } from "react";

import { CountContext } from "../context/Context";

const APP1 = (await import("app1/index")).default;

const App1 = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Count: {count}</h1>
      <APP1 CountContext={CountContext} />
    </>
  );
};

export default App1;
