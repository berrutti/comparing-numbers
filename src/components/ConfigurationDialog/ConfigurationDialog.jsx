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
  Apps,
  ImportExport,
  List,
  Tune
} from '@material-ui/icons';

import GalleryTab from './GalleryTab';
import GeneralTab from './GeneralTab';
import ItemsTab from './ItemsTab';
import ImportExportTab from './ImportExportTab';

function ConfigurationDialog({ open, setOpen, config, setConfig, data, setData }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [modifiedData, setModifiedData] = useState([...data]);
  const [modifiedConfig, setModifiedConfig] = useState({ ...config });

  const handleSubmit = () => {
    setConfig(modifiedConfig);
    setData(modifiedData);
    setOpen(false);
  }

  const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  const TabPanel = ({ children, value, index }) => {
    return (<>{value === index && <Box p={3}>{children}</Box>}</>);
  }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Configuration</DialogTitle>
        <DialogContent>
          <Tabs
            value={tabIndex}
            variant="scrollable"
            scrollButtons="on"
            onChange={handleChange}
            indicatorColor="primary">
            <Tab label="General" icon={<Tune />} {...a11yProps(0)} />
            <Tab label="Items" icon={<List />} {...a11yProps(1)} />
            <Tab label="Import / Export" icon={<ImportExport />} {...a11yProps(2)} />
            <Tab label="Gallery" icon={<Apps />} {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={tabIndex} index={0}>
            <GeneralTab
              config={modifiedConfig}
              setConfig={setModifiedConfig}>
            </GeneralTab>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <ItemsTab
              data={modifiedData}
              setData={setModifiedData}>
            </ItemsTab>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <ImportExportTab
              data={modifiedData}
              setData={setModifiedData}
              config={modifiedConfig}
              setConfig={setModifiedConfig}>
            </ImportExportTab>
          </TabPanel>
          <TabPanel value={tabIndex} index={3}>
            <GalleryTab
              setData={setModifiedData}
              setConfig={setModifiedConfig}>
            </GalleryTab>
          </TabPanel>

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

export default ConfigurationDialog;