import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import ColorPicker from '../ColorPicker/ColorPicker';

function ItemDialog({ open, setOpen, save, item }) {
  const [color, setColor] = useState(item.color);
  const [title, setTitle] = useState(item.title);
  const [subtitle, setSubTitle] = useState(item.subtitle);
  const [number, setNumber] = useState(item.number);

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <form
          onSubmit={handleSubmit}>
          <DialogTitle id='item-dialog-title'>Configuration</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              autoFocus
              autoComplete='off'
              margin='dense'
              id='title'
              label='Title'
              name='title'
              type='text'
              value={title}
              onChange={(event) => setTitle(event.target.value)} />
            <TextField
              fullWidth
              autoFocus
              autoComplete='off'
              margin='dense'
              id='subtitle'
              label='Subtitle'
              name='subtitle'
              type='text'
              value={subtitle}
              onChange={(event) => setSubTitle(event.target.value)} />
            <TextField
              fullWidth
              autoFocus
              required
              autoComplete='off'
              margin='dense'
              id='number'
              label='Number'
              name='number'
              type='number'
              value={title}
              onChange={(event) => setNumber(event.target.value)} />
            <ColorPicker color={color} label='Square Color' setColor={setColor}></ColorPicker>
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
    </>
  );
}

export default ItemDialog;