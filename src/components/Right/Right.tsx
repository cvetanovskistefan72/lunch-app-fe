import React from "react";
import { Lunch } from "../../models/app";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Description from "../Description/Description";
import Reciept from "../Reciept/Reciept";
import styles from "./Right.module.scss";
interface Props {
  randomLunch: Lunch;
}

const Right: React.FC<Props> = ({ randomLunch }) => {
  return (
    <div className={styles.root}>
      <Description randomLunch={randomLunch} />
      <Reciept randomLunch={randomLunch} />
      <ButtonGroup />
    </div>
  );
};

export default Right;
