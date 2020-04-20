import React, { useState } from 'react';

import {
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import cosmicCalendar from '../../examples/cosmic-calendar.json';
import usPoliticians from '../../examples/us-politicians.json';
function GalleryTab({ setData, setConfig }) {
  const importedElements = [cosmicCalendar, usPoliticians];
  const [dropdownElements] = useState(importedElements)

  const handleSelectChanges = (event) => {
    const index = parseInt(event.target.value);
    setData(dropdownElements[index].data);
    setConfig(dropdownElements[index].configuration);
  }
  return (
    <>
      <DialogContentText>
        Load from our numbers gallery. If you want to upload yours, please submit an PR on <a href="https://github.com/berrutti/comparing-numbers" alt="Comparing Numbers" title="Comparing Numbers">Github</a>. <br />
        Soon we'll have a backend to publish these.
      </DialogContentText>
      <FormControl fullWidth>
        <InputLabel id='units-label'>Numbers</InputLabel>
        <Select
          labelId='units-label'
          id='gallery-elements'
          name='elements'
          margin='dense'
          value={0}
          onClick={handleSelectChanges}>
          {dropdownElements.map((element, index) => <MenuItem key={index} value={index}>{element.configuration.title}</MenuItem>)}
        </Select>
      </FormControl>
    </>)
};

export default GalleryTab;