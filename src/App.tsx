import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import styles from './App.module.scss';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
