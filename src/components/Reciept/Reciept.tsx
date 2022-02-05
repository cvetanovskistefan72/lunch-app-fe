import React from "react";
import styles from "./Reciept.module.scss";
type Props = {};

const Reciept: React.FC<Props> = () => {
  const list = [
    "1.Брз и лесен оброк кој може.",
    "2.Секако, дел од состојките и зачините.",
    "3.Секако, дел од состојките и зачините се додаваат.",
    "4.Брз и лесен оброк кој може.",
    "5.Секако, дел од состојките и зачините.",
    "6.Oдземаат според сечиј вкус индивидуално.",
    "7.Oдземаат според сечиј вкус индивидуално.",
    "8.Oдземаат според сечиј вкус индивидуално.",
    "9.Oдземаат според сечиј вкус индивидуално.",
    "10.Oдземаат според сечиј вкус индивидуално.",
    "11.Oдземаат според сечиј вкус индивидуално.",
    "12.Oдземаат според сечиј вкус индивидуално.",
  ];
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Рецепт</h1>
        </div>
        <div className={styles.description}>
          {list.map((val) => (
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
