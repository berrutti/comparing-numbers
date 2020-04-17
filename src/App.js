import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './App.css';
import Squares from './components/Squares';
import Data from './components/Data';
import ConfigurationDialog from './components/ConfigurationDialog/ConfigurationDialog';
import cosmicCalendar from './examples/cosmic-calendar.json';

function App() {
  const [config, setConfig] = useState(cosmicCalendar.configuration);
  const [data, setData] = useState(cosmicCalendar.data);
  const [squaresIndex, setSquaresIndex] = useState(0);
  const [configurationDialogOpen, setConfigurationDialogOpen] = useState(false);

  useEffect(() => {
    const handleEvent = event => {
      if (event.key === 'ArrowLeft' && !configurationDialogOpen && squaresIndex !== 0) {
        setSquaresIndex(squaresIndex - 1);
      } else if (event.key === 'ArrowRight' && !configurationDialogOpen && squaresIndex !== data.length - 1) {
        setSquaresIndex(squaresIndex + 1);
      }
    }

    window.addEventListener('keydown', handleEvent)
    return () => {
      window.removeEventListener('keydown', handleEvent)
    }
  }, [setSquaresIndex, squaresIndex, configurationDialogOpen, data])


  return (
    <div
      className='App'
      style={{ backgroundColor: config.backgroundColor }}>
      <div className='grid-container'>
        <Squares data={data} index={squaresIndex}></Squares>
        <Data config={config} element={data[squaresIndex]}></Data>
      </div>
      <ConfigurationDialog
        open={configurationDialogOpen}
        setOpen={setConfigurationDialogOpen}
        config={config}
        setConfig={setConfig}
        data={data}
        setData={setData}>
      </ConfigurationDialog>
      <Fab id='settings' color='secondary' onClick={() => setConfigurationDialogOpen(true)} aria-label='settings'><Settings /></Fab>
    </div>
  );
}

export default App;
