import React, { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs
} from '@material-ui/core';
import {
  ImportExport,
  List,
  Tune
} from '@material-ui/icons';

import GeneralTab from './GeneralTab';
import ItemsTab from './ItemsTab';
import ImportExportTab from './ImportExportTab';

function SettingsDialog({ open, setOpen, config, setConfig }) {
  const [backgroundColor, setBackgroundColor] = useState(config.backgroundColor);
  const [title, setTitle] = useState(config.title);
  const [isCurrency, setIsCurrency] = useState(config.isCurrency);
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState(config.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfig(prevConfig => {
      const newConfig = {
        ...prevConfig,
        title,
        isCurrency,
        backgroundColor,
      }
      return newConfig;
    });
    setOpen(false);
  }

  const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabIndex(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return (<>{value === index && <Box p={3}>{children}</Box>}</>);
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='form-dialog-title'>
        <form
          onSubmit={handleSubmit}>
          <DialogTitle id='form-dialog-title'>Configuration</DialogTitle>
          <DialogContent>
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              indicatorColor="primary">
              <Tab label="General" icon={<Tune />} {...a11yProps(0)} />
              <Tab label="Items" icon={<List />} {...a11yProps(1)} />
              <Tab label="Import / Export" icon={<ImportExport />} {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={tabIndex} index={0}>
              <GeneralTab
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                isCurrency={isCurrency}
                setIsCurrency={setIsCurrency}
                title={title}
                setTitle={setTitle}>
              </GeneralTab>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <ItemsTab data={data} setData={setData}></ItemsTab>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <ImportExportTab
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                isCurrency={isCurrency}
                setIsCurrency={setIsCurrency}
                title={title}
                setTitle={setTitle}
                data={data}
                setData={setData}>
              </ImportExportTab>
            </TabPanel>

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

export default SettingsDialog;