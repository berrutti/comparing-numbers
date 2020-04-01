import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField
} from '@material-ui/core';

import { getCurrentMiliseconds } from '../utils/functions';

function AddNumbersDialog({ open, handleClose, handleAddCard }) {
  const [name, setName] = useState('');
  const [units, setUnits] = useState('currency');

  const handleTimeframeChange = (event) => {
    event.preventDefault();
    setUnits(event.target.value);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSwitchChange = (event) => {
    event.preventDefault();
    setIsRegular(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.errors) {
      handleClose();
      handleAddCard({ name, timeframe: units, lastClicked: getCurrentMiliseconds(), isRegular });
      setName('');
      setIsRegular(true);
      setUnits(Timeframe.Daily);
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <form
          onSubmit={handleSubmit}>
          <DialogTitle id='form-dialog-title'>Add a New Habit</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new Habit, please add a Name and select a Timeframe.
            </DialogContentText>
            <TextField
              fullWidth
              autoFocus
              required
              autoComplete='off'
              margin='dense'
              id='name'
              label='Name'
              type='text'
              value={name}
              onChange={handleNameChange} />

            <FormControlLabel
              label="Regular"
              control={<Switch
                checked={isRegular}
                onChange={handleSwitchChange}
                name="regular"
                color="primary"
              />} />

            <FormControl fullWidth>
              <InputLabel id='units-label'>Units</InputLabel>
              <Select
                labelId='units-label'
                id='units'
                value={units}
                onChange={handleTimeframeChange}>
                <MenuItem value="currency">Currency</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
          </Button>
            <Button type='submit' color='primary'>
              Add
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default AddNumbersDialog;