import React, { useContext } from "react";

import styles from "../styles/Home.module.css";

interface HomeProps {
  CountContext: any;
}

const Home: React.FC<HomeProps> = ({ CountContext }) => {
  const { setCount } = useContext(CountContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1
          className={styles.title}
          onClick={() => setCount((i: number) => i + 1)}
        >
          Welcome to App2!
        </h1>
      </main>
    </div>
  );
};

export default Home;
