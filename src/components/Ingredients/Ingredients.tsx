import React from "react";
import { Lunch } from "../../models/app";
import styles from "./Ingredients.module.scss";

interface Props {
  randomLunch: Lunch;
}

const Ingredients: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      {randomLunch?.ingredients.map(({ title },i) => (
        <div key={i} className={styles.ingredient}>{title}</div>
      ))}
    </div>
  );
};

export default Ingredients;
