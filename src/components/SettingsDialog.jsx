import React, { useState } from 'react';

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

function SettingsDialog({ open, setOpen }) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.errors) {
      setName('');
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby='form-dialog-title'>
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
              id='name'
              label='Name'
              type='text'
              value={name}
              onChange={handleNameChange} />

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
            <Button onClick={() => setOpen(false)} color='primary'>
              Cancel
          </Button>
            <Button type='submit' color='primary'>
              Save
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;