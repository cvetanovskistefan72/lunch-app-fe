import React from "react";
import styles from "./ButtonGroup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare,faHistory } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const ButtonGroup: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <button className={styles.create}>
        <span>Креирај рецепт</span>
        <FontAwesomeIcon className="create-new" icon={faPlusSquare} />
      </button>
      <button className={styles.new}>
        <span>Генерирај нов</span>
        <FontAwesomeIcon className="new-new" icon={faHistory} />
      </button>
    </div>
  );
};

export default ButtonGroup;
