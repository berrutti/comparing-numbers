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
  const [modifiedConfig, setModifiedConfig] = useState(config);
  const [tabIndex, setTabIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfig(modifiedConfig);
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
    <div>
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
              <GeneralTab modifiedConfig={modifiedConfig} setModifiedConfig={setModifiedConfig}></GeneralTab>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <ItemsTab modifiedConfig={modifiedConfig} setModifiedConfig={modifiedConfig}></ItemsTab>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <ImportExportTab modifiedConfig={modifiedConfig} setModifiedConfig={setModifiedConfig}></ImportExportTab>
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
    </div>
  );
}

export default SettingsDialog;