import React, { useEffect } from 'react';
import styles from './LandingPage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
interface Props {
  
}

const LandingPage:React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <button className='cover-btn'>
        <span>Генерирај</span>
        <FontAwesomeIcon className='cover-svg' icon={faUtensils} />
      </button>
    </div>
  );
}



export default LandingPage;