import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Description from "../Description/Description";
import Reciept from "../Reciept/Reciept";
import styles from "./Right.module.scss";
interface Props {}

const Right: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Description />
      <Reciept/>
      <ButtonGroup/>
    </div>
  );
};

export default Right;
