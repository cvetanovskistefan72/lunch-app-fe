import React from "react";
import { Lunch } from "../../models/app";
import Left from "../Left/Left";
import Reviews from "../Reviews/Reviews";
import Right from "../Right/Right";
import styles from "./Main.module.scss";

interface Props {
  randomLunch: Lunch;
}

const Main: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      <Left randomLunch={randomLunch} />
      <Right randomLunch={randomLunch} />
      <Reviews />
    </div>
  );
};

export default Main;
