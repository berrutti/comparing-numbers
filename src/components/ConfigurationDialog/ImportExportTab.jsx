import React, { useState } from 'react';

import {
  Button,
  DialogContentText,
  TextField
} from '@material-ui/core';

import FileSaver from 'file-saver';

function ImportExportTab({ modifiedConfig, setModifiedConfig }) {
  const [filename, setFilename] = useState(modifiedConfig.title);

  const onFileSave = () => {
    const stringifiedConfig = JSON.stringify(modifiedConfig, null, 2);

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
        const importedRawState = JSON.parse(event.target.result);
        const data = importedRawState.data.map(rawElement => {
          return {
            title: rawElement.title,
            subtitle: rawElement.subtitle,
            avatar: rawElement.avatar,
            number: rawElement.number,
            color: rawElement.color
          }
        })
        const newState = {
          title: importedRawState.title,
          isCurrency: importedRawState.isCurrency,
          units: importedRawState.units,
          backgroundColor: importedRawState.backgroundColor,
          data
        };
        debugger;
        setModifiedConfig(newState);
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