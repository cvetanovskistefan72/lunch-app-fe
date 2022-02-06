import React from "react";
import { Lunch } from "../../models/app";
import styles from "./Title.module.scss";

interface Props {
  randomLunch: Lunch;
}

const Title: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      <h5>{randomLunch.title}</h5>
      <hr />
    </div>
  );
};

export default Title;
