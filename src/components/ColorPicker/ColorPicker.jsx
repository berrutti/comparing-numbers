import React, { useState } from 'react';

import { SliderPicker } from 'react-color';
import { TextField } from '@material-ui/core';

export default function ColorPicker({ label, color, setColor }) {
  const isValidHex = (stringToTest) => {
    if (stringToTest.startsWith('#')) {
      stringToTest = stringToTest.substring(1);
    }
    const parsedInt = parseInt(stringToTest, 16);
    return (parsedInt.toString(16) === stringToTest)
  }

  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const color = event.target.value;
    if (isValidHex(color)) {
      setError(false);
      setColor(color)
    } else {
      setError(true);
    }
  }
  return (
    <>
      <TextField error={error} helperText="Invalid hex!" id="standard-basic" label={label} defaultValue={color} onChange={handleChange} />
      <SliderPicker width={'100%'} color={color} onChange={(newColor) => setColor(newColor)} />
    </>);
};