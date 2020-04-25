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

function ItemDialog({ dialogTitle, item, open, setOpen, save }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [avatar, setAvatar] = useState('');
  const [number, setNumber] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setTitle(item?.title || '');
    setSubtitle(item?.subtitle || '');
    setAvatar(item?.avatar || '');
    setNumber(item?.number || '');
    setColor(item?.color || '');
  }, [item])

  const handleSave = () => {
    debugger;
    const element = {
      title,
      subtitle,
      avatar,
      number,
      color
    }
    save(element);
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='item-dialog-title'>
        <DialogTitle id='item-dialog-title'>{dialogTitle}</DialogTitle>
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

          <TextField fullWidth id='color' margin='dense' label='Color' value={color}
            onChange={(event) => setColor(event.target.value)} />

          <SliderPicker width={'100%'} color={color} onChangeComplete={(color) => setColor(color.hex)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSave} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItemDialog;