import React from "react";
import { Lunch } from "../../models/app";
import Ingredients from "../Ingredients/Ingredients";
import Title from "../Title/Title";
import styles from "./Left.module.scss";

interface Props {
  randomLunch: Lunch;
}

const Left: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      <Title randomLunch={randomLunch} />
      <Ingredients randomLunch={randomLunch} />
    </div>
  );
};

export default Left;
