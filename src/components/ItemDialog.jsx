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
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [avatar, setAvatar] = useState('');
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    setTitle(item.title ? item.title : '');
    setSubtitle(item.subtitle ? item.subtitle : '');
    setAvatar(item.avatar ? item.avatar : '');
    setNumber(item.number);
    setColor(item.color ? item.color : '');
  }, [item])

  const handleSubmit = () => {
    save({
      title,
      subtitle,
      avatar,
      number,
      color
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
            onChange={(event) => setSubtitle(event.target.value)} />

          <TextField fullWidth autoComplete='off' margin='dense' id='avatar'
            label='Avatar URL' name='avatar' type='text' value={avatar}
            onChange={(event) => setAvatar(event.target.value)} />

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