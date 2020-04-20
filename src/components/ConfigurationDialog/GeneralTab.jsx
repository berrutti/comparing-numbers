import React from 'react';
import { SliderPicker } from 'react-color';

import {
  Checkbox,
  DialogContentText,
  FormControlLabel,
  TextField
} from '@material-ui/core';

function GeneralTab({ config, setConfig }) {
  const handleIsCurrencyChanges = (event) => {
    setConfig(latestConfig => ({ ...latestConfig, isCurrency: event.target.checked }))
  }

  const handleInputChanges = (event) => {
    setConfig(latestConfig => ({ ...latestConfig, [event.target.name]: event.target.value }));
  }

  const handleColorChange = (newColor) => {
    setConfig(latestConfig => ({ ...latestConfig, backgroundColor: newColor.hex }));
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
      <FormControlLabel
        control={<Checkbox checked={config.isCurrency} onChange={handleIsCurrencyChanges} name="isCurrency" />}
        label="Is Currency"
      />
      {!config.isCurrency && <TextField
        fullWidth
        id='units'
        margin='dense'
        label='Units'
        value={config.units}
        onChange={handleInputChanges} />}
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