import React from "react";
import { Lunch } from "../../models/app";
import styles from "./Description.module.scss";
interface Props {
  randomLunch: Lunch;
};

const Description: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Детален опис</h1>
        </div>
        <div className={styles.description}>
          <span>{randomLunch.description}</span>
        </div>
      </div>

      <br />
      <hr />
    </div>
  );
};

export default Description;
