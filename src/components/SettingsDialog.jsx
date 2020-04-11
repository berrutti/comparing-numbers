import React, { useState } from 'react';
import { SliderPicker } from 'react-color'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField
} from '@material-ui/core';
import NumbersList from './NumbersList';

import { Phone, Favorite } from '@material-ui/icons';

function SettingsDialog({ open, setOpen, config, setConfig }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [units, setUnits] = useState('currency');
  const [color, setColor] = useState('#007FAC')

  const handleTimeframeChange = (event) => {
    event.preventDefault();
    setUnits(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
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
          <DialogTitle id='form-dialog-title'>Settings</DialogTitle>
          <DialogContent>
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Item One" icon={<Phone />} {...a11yProps(0)} />
              <Tab label="Item Two" icon={<Favorite />} {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={tabIndex} index={0}>Item One</TabPanel>
            <TabPanel value={tabIndex} index={1}>Item Two</TabPanel>
            <TabPanel value={tabIndex} index={2}>Item Three</TabPanel>
            <DialogContentText>
              You can complete, export and import your own data.
            </DialogContentText>
            <TextField
              fullWidth
              autoFocus
              required
              autoComplete='off'
              margin='dense'
              id='title'
              label='Title'
              type='text'
              value={title}
              onChange={(event) => setTitle(event.target.value)} />
            <TextField
              fullWidth
              required
              autoComplete='off'
              margin='dense'
              id='subtitle'
              label='Subtitle'
              type='text'
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)} />
            <SliderPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            ></SliderPicker>
            <FormControl fullWidth>
              <InputLabel id='units-label'>Units</InputLabel>
              <Select
                labelId='units-label'
                id='units'
                value={units}
                onChange={handleTimeframeChange}>
                <MenuItem value='currency'>Currency</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
            </FormControl>
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
        <NumbersList data={config.data} ></NumbersList>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;