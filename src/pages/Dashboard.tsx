import React from 'react';
import Main from '../components/Main/Main';
import styles from './Dashboard.module.scss';
interface Props  {

};

const Dashboard:React.FC<Props> = () => {
  return <div className={styles.root}><Main/></div>;
};

export default Dashboard;
