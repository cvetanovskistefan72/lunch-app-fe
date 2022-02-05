import React from "react";
import styles from "./Ingredients.module.scss";

type Props = {};

const Ingredients: React.FC<Props> = () => {
  const list = [
    "Домат",
    "Мајонез",
    "Кечап",
    "Салама",
    "Кашкавал",
    "Сирење",
    "Морков",
    "Ајвар",
    "Павлака",
    "Магдонос",
    "Кари сос",
  ];
  return (
    <div className={styles.root}>
      {list.map((val) => (
        <div className={styles.ingredient}>{val}</div>
      ))}
    </div>
  );
};

export default Ingredients;
