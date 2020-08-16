import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './App.css';
import SquaresSection from './components/SquaresSection';
import InformationSection from './components/InformationSection';
import ConfigurationDialog from './components/ConfigurationDialog/ConfigurationDialog';
import usPoliticians from './examples/us-politicians.json';

function App() {
  const [config, setConfig] = useState(usPoliticians.configuration);
  const [data, setData] = useState(usPoliticians.data);
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
        <SquaresSection data={data} index={squaresIndex}></SquaresSection>
        <InformationSection config={config} index={squaresIndex} data={data}></InformationSection>
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
