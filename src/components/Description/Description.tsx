import React from "react";
import styles from "./Description.module.scss";
type Props = {};

const Description: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Детален опис</h1>
        </div>
        <div className={styles.description}>
          <span>
            Брз и лесен оброк кој може да се направи спонтано штом ги имате
            потребните состојки. Секако, дел од состојките и зачините се
            додаваат или одземаат според сечиј вкус индивидуално.Секако, дел од
            состојките и зачините се додаваат или одземаат според сечиј вкус
            индивидуално.
          </span>
        </div>
      </div>

      <br />
      <hr />
    </div>
  );
};

export default Description;
