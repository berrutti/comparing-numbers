import React from 'react';
import { SliderPicker } from 'react-color';

import {
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';

function GeneralTab({ config, setConfig }) {
  const handleInputChanges = (event) => {
    setConfig(latestConfig => {
      return {
        ...latestConfig,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleColorChange = (newColor) => {
    setConfig(latestConfig => {
      return {
        ...latestConfig,
        backgroundColor: newColor.hex
      }
    })
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
        value={config.title}
        onChange={handleInputChanges} />
      <FormControl fullWidth>
        <InputLabel id='units-label'>Units</InputLabel>
        <Select
          labelId='units-label'
          id='isCurrency'
          name='isCurrency'
          margin='dense'
          value={config.isCurrency}
          onChange={handleInputChanges}>
          <MenuItem value={true}>Currency</MenuItem>
          <MenuItem value={false}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        id='backgroundColor'
        margin='dense'
        label='Background Color'
        value={config.backgroundColor}
        onChange={handleInputChanges} />
      <SliderPicker width={'100%'} color={config.backgroundColor} onChangeComplete={handleColorChange} />
    </>)
};

export default GeneralTab;