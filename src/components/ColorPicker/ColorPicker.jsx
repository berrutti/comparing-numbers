import React from 'react';

import { SliderPicker } from 'react-color';
import { TextField } from '@material-ui/core';

export default function ColorPicker({ label, color, setColor, id }) {
  const handleChange = (event) => {
    const possibleColor = event.target.value;
    setColor(possibleColor);
  }
  return (
    <>
      <TextField
        fullWidth
        id={id}
        margin='dense'
        label={label}
        value={color}
        onChange={handleChange} />
      <SliderPicker width={'100%'} color={color} onChangeComplete={(newColor) => setColor(newColor.hex)} />
    </>);
};