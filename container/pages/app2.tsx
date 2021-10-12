import { useContext } from "react";

import { CountContext } from "../context/Context";

const APP2 = (await import("app2/index")).default;

const App2 = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Count: {count}</h1>
      <APP2 CountContext={CountContext} />
    </>
  );
};

export default App2;
