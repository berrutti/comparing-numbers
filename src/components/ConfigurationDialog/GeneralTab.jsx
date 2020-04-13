import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

import {
  DialogContentText,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';

function GeneralTab({ modifiedConfig, setModifiedConfig }) {
  const handleColorChange = (color) => {
    setModifiedConfig(prevConfig => {
      const newState = {
        ...prevConfig,
        backgroundColor: color.hex
      };

      return newState;
    });
  };

  const handleConfigChange = (event) => {
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

      <ColorPicker color={modifiedConfig.backgroundColor} label='Background Color' setColor={handleColorChange}></ColorPicker>
    </>)
};

export default GeneralTab;