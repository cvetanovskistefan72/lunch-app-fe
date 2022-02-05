import React from "react";
import styles from "./Title.module.scss";

interface Props {}

const Title: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <h5>Макарони со сирење, хопла, кечап и сирење</h5>
      <hr />
    </div>
  );
};

export default Title;
