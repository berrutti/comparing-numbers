import React, { useState, useEffect,  } from 'react';
import { Fab } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './App.css';
import Squares from './components/Squares';
import Data from './components/Data';
import SettingsDialog from './components/SettingsDialog';
import { cosmicCalendar } from './utils/constants';

function App() {
  const [squaresData, setSquaresData] = useState(cosmicCalendar);
  const [currentSquareIndex, setCurrentSquareIndex] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handleEvent = event => {
      if (event.key === 'ArrowLeft' && currentSquareIndex !== 0) {
        setCurrentSquareIndex(currentSquareIndex - 1);
      } else if (event.key === 'ArrowRight' && currentSquareIndex !== squaresData.length - 1) {
        setCurrentSquareIndex(currentSquareIndex + 1);
      }
    }

    window.addEventListener('keydown', handleEvent)
    return () => {
      window.removeEventListener('keydown', handleEvent)
    }
  }, [setCurrentSquareIndex, currentSquareIndex, squaresData])


  return (
    <div className='App'>
      <div className='grid-container'>
        <Squares squaresData={squaresData} index={currentSquareIndex}></Squares>
        <Data squaresData={squaresData} index={currentSquareIndex}></Data>
      </div>
      <SettingsDialog open={settingsOpen} setOpen={setSettingsOpen} squaresData={squaresData} setSquaresData={setSquaresData}></SettingsDialog>
      <Fab id='settings' color='secondary' onClick={() => setSettingsOpen(true)} aria-label='settings'><Settings /></Fab>
    </div>
  );
}

export default App;
