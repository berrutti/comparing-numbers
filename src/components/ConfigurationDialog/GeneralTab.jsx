import React, { useState } from 'react';

import { SliderPicker } from 'react-color';

import {
  DialogContentText,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';

function GeneralTab({ modifiedConfig, setModifiedConfig }) {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleChange = (color) => {
    console.log({ color: color.rgb });
  };
  const handleConfigChange = (event) => {
    debugger;
    setModifiedConfig(prevConfig => {
      const newState = {
        ...prevConfig,
        [event.target.name]: event.target.value
      };

      return newState;
    });
  }


  return (
    <>
      <DialogContentText>
        You can complete, export and import your own data.
      </DialogContentText>
      <TextField
        fullWidth
        autoFocus
        required
        autoComplete='off'
        margin='dense'
        id='title'
        label='Title'
        name='title'
        type='text'
        value={modifiedConfig.title}
        onChange={handleConfigChange} />

      <FormControl fullWidth>
        <InputLabel id='units-label'>Units</InputLabel>
        <Select
          labelId='units-label'
          id='isCurrency'
          name='isCurrency'
          value={modifiedConfig.isCurrency}
          onChange={handleConfigChange}>
          <MenuItem value={true}>Currency</MenuItem>
          <MenuItem value={false}>Other</MenuItem>
        </Select>
      </FormControl>

      <div>
        <div style={{
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        }} onClick={() => setDisplayPicker(!displayPicker)}>
          <div style={{
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: modifiedConfig.backgroundColor,
          }} />
        </div>
        {displayPicker ? <div style={{
          position: 'absolute',
          zIndex: '2',
        }}>
          <div style={{
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }} onClick={() => setDisplayPicker(false)} />
          <SliderPicker color={modifiedConfig.backgroundColor} onChange={handleChange} />
        </div> : null}

      </div>
    </>)
};

export default GeneralTab;