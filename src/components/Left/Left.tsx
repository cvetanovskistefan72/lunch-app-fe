import React from "react";
import Ingredients from "../Ingredients/Ingredients";
import Title from "../Title/Title";
import styles from "./Left.module.scss";

interface Props {}

const Left: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Title />
      <Ingredients/>
    </div>
  );
};

export default Left;
