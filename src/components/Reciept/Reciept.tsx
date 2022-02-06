import React from "react";
import { Lunch } from "../../models/app";
import styles from "./Reciept.module.scss";
interface Props {
  randomLunch: Lunch;
};

const Reciept: React.FC<Props> = ({ randomLunch }) => {

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Рецепт</h1>
        </div>
        <div className={styles.description}>
          {randomLunch.recipe.split('\n').map((val) => (
            <span>{val}</span>
          ))}
        </div>
      </div>

      <br />
      <hr />
    </div>
  );
};

export default Reciept;
