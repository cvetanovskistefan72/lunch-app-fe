import React, { useEffect } from "react";
import { selectLoading, selectRandomLunch } from "../store/lunches/selectors";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/lunches/slice";
import Main from "../components/Main/Main";
import styles from "./Dashboard.module.scss";
import Loading from "../components/Loading/Loading";
interface Props {}

const Dashboard: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const randomLunch = useSelector(selectRandomLunch);
  const loading = useSelector(selectLoading);
  useEffect(() => {
    if (!randomLunch) {
      getRandomLunch()
    }
  }, []);


  const getRandomLunch = () => {
    dispatch(actions.getRandomLunch());
  }

  if (loading)
    return (
      <div className={styles.root}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.root}>
      {randomLunch ? (
        <Main randomLunch={randomLunch} getRandomLunch={getRandomLunch} />
      ) : (
        ""
      )}
    </div>
  );

};

export default Dashboard;
