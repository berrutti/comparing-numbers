import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

import {
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';

function GeneralTab({ title, setTitle, isCurrency, setIsCurrency, backgroundColor, setBackgroundColor }) {
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
        value={title}
        onChange={(event) => setTitle(event.target.value)} />

      <FormControl fullWidth>
        <InputLabel id='units-label'>Units</InputLabel>
        <Select
          labelId='units-label'
          id='isCurrency'
          name='isCurrency'
          margin='dense'
          value={isCurrency}
          onChange={(event) => setIsCurrency(event.target.value)}>
          <MenuItem value={true}>Currency</MenuItem>
          <MenuItem value={false}>Other</MenuItem>
        </Select>
      </FormControl>

      <ColorPicker color={backgroundColor} label='Background Color' setColor={setBackgroundColor}></ColorPicker>
    </>)
};

export default GeneralTab;