import React, { useEffect, useState } from "react";
import styles from "./result.module.css";

const Result = (props) => {
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  const [people, setPeople] = useState("");

  useEffect(() => {
    if (props.state !== "" && people !== "") {
      setTip(props.percent);
      const totalVal = parseInt(props.state) + tip;
      const finalRes = totalVal / people;
      setTotal(finalRes);
    }
  }, [props.state, total, tip, props.percent, people]);
  return (
    <section className={styles.resultContainer}>
      <div className={styles.peopleInput}>
        <label htmlFor="numOfPeople">Number of People </label>
        <img src={props.src} className={styles.img} alt="person icon " />
        <input
          type="text"
          name="numOfPeople"
          className={styles.peopleNum}
          value={people}
          placeholder={
            props.state === "" && people === ""
              ? "please enter some value"
              : " "
          }
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
      <div className={styles.result}>
        <div className={styles.box1}>
          <h4>Tip Amount </h4>
          <p>/ person</p>
        </div>
        <div className={styles.box2}>
          <input
            type="text"
            className={styles.box2Input}
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>
        <div className={styles.box3}>
          <h4>Total</h4>
          <p>/person</p>
        </div>
        <div className={styles.box4}>
          <input
            type="text"
            className={styles.box4Input}
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
        <div className={styles.box5}>
          <button className={styles.btn}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Result;
