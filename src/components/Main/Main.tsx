import React from "react";
import Left from "../Left/Left";
import Reviews from "../Reviews/Reviews";
import Right from "../Right/Right";
import styles from "./Main.module.scss";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Left />
      <Right/>
      <Reviews/>
    </div>
  );
};

export default Main;
