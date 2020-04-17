import React, { useState } from 'react';

import {
  Button,
  DialogContentText,
  TextField
} from '@material-ui/core';

import FileSaver from 'file-saver';

function ImportExportTab({ data, setData, config, setConfig }) {
  const [filename, setFilename] = useState(`${config.title}`);

  const byNumber = (firstElement, secondElement) => {
    if (firstElement.number < secondElement.number) {
      return -1;
    }
    if (firstElement.number > secondElement.number) {
      return 1;
    }
    return 0;
  };

  const onFileSave = () => {
    const json = {
      configuration: {
        title: config.title,
        isCurrency: config.isCurrency,
        units: config.units,
        backgroundColor: config.backgroundColor,
      },
      data: data
    };

    const stringifiedJson = JSON.stringify(json, null, 2);

    const blob = new Blob([stringifiedJson], { type: "text/plain;charset=utf-8" });
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
        const parsedJson = JSON.parse(event.target.result);
        const loadedConfig = {
          title: parsedJson.configuration?.title,
          isCurrency: parsedJson.configuration?.isCurrency,
          units: parsedJson.configuration?.units,
          backgroundColor: parsedJson.configuration?.backgroundColor
        }
        setConfig(loadedConfig);
        const loadedData = parsedJson.data?.sort(byNumber).map(e => {
          return {
            title: e.title,
            subtitle: e.subtitle,
            avatar: e.avatar,
            number: e.number,
            color: e.color
          }
        });
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