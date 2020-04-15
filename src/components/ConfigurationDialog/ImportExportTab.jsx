import React, { useState } from 'react';

import {
  Button,
  DialogContentText,
  TextField
} from '@material-ui/core';

import FileSaver from 'file-saver';

function ImportExportTab({
  title,
  setTitle,
  backgroundColor,
  setBackgroundColor,
  isCurrency,
  setIsCurrency,
  data,
  setData
}) {
  const [filename, setFilename] = useState(title);

  const onFileSave = () => {
    const stringifiedConfig = JSON.stringify({
      title,
      backgroundColor,
      isCurrency,
      data
    }, null, 2);

    const blob = new Blob([stringifiedConfig], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, filename ? `${filename}.json` : `comparing-numbers-config.json`);
  }

  const onFileLoad = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const loadedState = JSON.parse(event.target.result);
        const loadedData = loadedState.data.map(loadedElement => {
          return {
            title: loadedElement.title,
            subtitle: loadedElement.subtitle,
            avatar: loadedElement.avatar,
            number: loadedElement.number,
            color: loadedElement.color
          }
        });
        setTitle(loadedState.title);
        setBackgroundColor(loadedState.setBackgroundColor);
        setIsCurrency(loadedState.setIsCurrency);
        setData(loadedData);
      } catch (error) {
        // TODO: Should display some kind of window with the error
        console.log(error);
      }
    };

    reader.readAsText(file);
  }
  return (
    <>
      <DialogContentText>
        You can complete, export and import your own data.
      </DialogContentText>
      <TextField
        fullWidth
        autoFocus
        autoComplete='off'
        margin='dense'
        id='filename'
        label='Filename'
        name='filename'
        type='text'
        value={filename}
        onChange={(event) => setFilename(event.target.value)} />
      <Button variant="contained" onClick={onFileSave}>Export</Button>
      <input
        accept="application/json"
        style={{ display: 'none' }}
        id="contained-import-button"
        multiple
        type="file"
        onChange={onFileLoad}
      />
      <label htmlFor="contained-import-button">
        <Button variant="contained" component="span">
          Import
        </Button>
      </label>
    </>)
};

export default ImportExportTab;