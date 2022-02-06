import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/lunches/slice";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
interface Props {}

const LandingPage: React.FC<Props> = () => {

  return (
    <div className={styles.root}>
      <Link to="/randomLunch">
        <button className="cover-btn">
          <span>Генерирај</span>
          <FontAwesomeIcon className="cover-svg" icon={faUtensils} />
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
