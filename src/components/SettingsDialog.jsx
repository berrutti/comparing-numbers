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

function SettingsDialog({ open, setOpen }) {
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

  const squaresData = [
    {
      title: 'Median Net Worth:',
      subtitle: 'Millenial Households',
      avatar: null,
      number: 8850,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Pete Buttigieg',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg/220px-Pete_Buttigieg_by_Gage_Skidmore.jpg',
      number: 100000,
      color: '#007FAC',
    },
    {
      title: 'Median Net Worth:',
      subtitle: 'Members of Congress',
      avatar: null,
      number: 460000,
      color: '#07415E',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Bernie Sanders',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/220px-Bernie_Sanders_in_March_2020.jpg',
      number: 2000000,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Amy Klobuchar',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg/220px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg',
      number: 2500000,
      color: '#007FAC',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Joe Biden',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Joe_Biden_February_2020_crop.jpg/220px-Joe_Biden_February_2020_crop.jpg',
      number: 9000000,
      color: '#07415E',
    },
  ]

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
        <NumbersList listData={squaresData} ></NumbersList>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;