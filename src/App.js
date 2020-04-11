import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './App.css';
import Squares from './components/Squares';
import Data from './components/Data';
import SettingsDialog from './components/SettingsDialog';
import { cosmicCalendar } from './utils/constants';

function App() {
  const [config, setConfig] = useState(cosmicCalendar);
  const [squaresIndex, setSquaresIndex] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handleEvent = event => {
      if (event.key === 'ArrowLeft' && squaresIndex !== 0) {
        setSquaresIndex(squaresIndex - 1);
      } else if (event.key === 'ArrowRight' && squaresIndex !== config.data.length - 1) {
        setSquaresIndex(squaresIndex + 1);
      }
    }

    window.addEventListener('keydown', handleEvent)
    return () => {
      window.removeEventListener('keydown', handleEvent)
    }
  }, [setSquaresIndex, squaresIndex, config])


  return (
    <div
      className='App'
      style={{ backgroundColor: config.backgroundColor }}>
      <div className='grid-container'>
        <Squares data={config.data} index={squaresIndex}></Squares>
        <Data config={config} index={squaresIndex}></Data>
      </div>
      <SettingsDialog open={settingsOpen} setOpen={setSettingsOpen} config={config} setConfig={setConfig}></SettingsDialog>
      <Fab id='settings' color='secondary' onClick={() => setSettingsOpen(true)} aria-label='settings'><Settings /></Fab>
    </div>
  );
}

export default App;
