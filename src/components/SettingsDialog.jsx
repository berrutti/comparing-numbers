import React, { useState } from 'react';
import { SliderPicker } from 'react-color'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import NumbersList from './NumbersList';

function SettingsDialog({ open, setOpen, squaresData, setSquaresData }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [units, setUnits] = useState('currency');
  const [color, setColor] = useState('#007FAC')

  const handleTimeframeChange = (event) => {
    event.preventDefault();
    setUnits(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='form-dialog-title'>
        <form
          onSubmit={handleSubmit}>
          <DialogTitle id='form-dialog-title'>Settings</DialogTitle>
          <DialogContent>
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
              type='text'
              value={title}
              onChange={(event) => setTitle(event.target.value)} />
            <TextField
              fullWidth
              required
              autoComplete='off'
              margin='dense'
              id='subtitle'
              label='Subtitle'
              type='text'
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)} />
            <SliderPicker 
              color={color}
              onChange={(color) => setColor(color.hex)}
            ></SliderPicker>
            <FormControl fullWidth>
              <InputLabel id='units-label'>Units</InputLabel>
              <Select
                labelId='units-label'
                id='units'
                value={units}
                onChange={handleTimeframeChange}>
                <MenuItem value='currency'>Currency</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color='primary'>
              Cancel
          </Button>
            <Button type='submit' color='primary'>
              Save
          </Button>
          </DialogActions>
        </form>
        <NumbersList listData={squaresData.data} ></NumbersList>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;