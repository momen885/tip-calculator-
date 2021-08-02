import React, { useState } from "react";
import Result from "./Result";
import styles from "./Tip.module.css";

const TipSelection = () => {
  const [state, setState] = useState("");
  const [percent, setPercent] = useState("");
  const handleBtn = (e) => {
    const percentage = e.target.value / 100;
    const res = percentage * state;
    if (state !== "") {
      setPercent(res);
    } else {
      setState(percentage);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.billContainer}>
        <form className={styles.bill}>
          <h4>Bill</h4>
          {/* <img
            src="./images/icon-dollar.svg"
            className={styles.img}
            alt="dollar icon "
          /> */}

          <input
            type="text"
            className={styles.billInput}
            value={state}
            placeholder={state === "" ? "please enter a number" : ""}
            onChange={(e) => setState(e.target.value)}
          />
        </form>
      </div>
      <section className={styles.tip}>
        <h4>Tip Selection</h4>
        <div className={styles.btnContainer}>
          <button
            type="submit"
            className={styles.btn}
            onClick={handleBtn}
            value={5}
          >
            5%
          </button>
          <button
            type="submit"
            className={styles.btn}
            onClick={handleBtn}
            value={10}
          >
            10%
          </button>
          <button
            type="submit"
            className={styles.btn}
            onClick={handleBtn}
            value={15}
          >
            15%
          </button>
          <button
            type="submit"
            className={styles.btn}
            onClick={handleBtn}
            value={25}
          >
            25%
          </button>
          <button
            type="submit"
            className={styles.btn}
            onClick={handleBtn}
            value={50}
          >
            50%
          </button>
          <button className={styles.custom}>custom</button>
        </div>
      </section>
      <div>
        <Result
          src="./images/icon-person.svg"
          handleClick={handleBtn}
          state={state}
          percent={percent}
        />
      </div>
    </div>
  );
};

export default TipSelection;
