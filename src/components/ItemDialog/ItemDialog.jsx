import React, { useState, useEffect } from 'react';
import { SliderPicker } from 'react-color';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';

function ItemDialog({ item, open, setOpen, save }) {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setColor(item.color);
    setTitle(item.title);
    setSubTitle(item.subtitle);
    setNumber(item.number);
  }, [item])

  const handleSubmit = () => {
    save({
      color,
      title,
      subtitle,
      number
    })
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='item-dialog-title'>
        <DialogTitle id='item-dialog-title'>Configuration</DialogTitle>
        <DialogContent>
          <TextField fullWidth autoFocus autoComplete='off' margin='dense' id='title'
            label='Title' name='title' type='text' value={title}
            onChange={(event) => setTitle(event.target.value)} />

          <TextField fullWidth autoComplete='off' margin='dense' id='subtitle'
            label='Subtitle' name='subtitle' type='text' value={subtitle}
            onChange={(event) => setSubTitle(event.target.value)} />

          <TextField fullWidth required autoComplete='off' margin='dense'
            id='number' label='Number' name='number' type='number' value={number}
            onChange={(event) => setNumber(parseFloat(event.target.value))} />

          <TextField fullWidth id='color' margin='dense' label='color' value={color}
            onChange={(event) => setColor(event.target.value)} />

          <SliderPicker width={'100%'} color={color} onChangeComplete={(color) => setColor(color.hex)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItemDialog;