import React, { useState } from 'react';
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { byNumbers } from '../../utils/helperFunctions';
import ItemDialog from '../ItemDialog/ItemDialog';

export default function ItemsTab({ data, setData }) {
  const sortedData = [...data].sort(byNumbers);
  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleEditClick = (index) => {
    debugger;
    setSelectedIndex(index);
    setItemDialogOpen(true);
  }

  const handleDeleteClick = (index) => {
    setSelectedIndex(index);
    console.log(index);
  }

  const handleDialogSave = (data) => {
    console.log(data);
  };
  return (
    <>
      <Grid item xs={12}>
        <div className='className'>
          <List dense={true}>
            {sortedData.map((item, key) => {
              return <ListItem key={key}>
                {item.avatar && <ListItemAvatar>
                  <Avatar alt={item.title} src={item.avatar}></Avatar>
                </ListItemAvatar>}
                <ListItemText
                  primary={item.title ? `${item.title} ${item.subtitle}` : `${item.subtitle}`}
                  secondary={item.number}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleEditClick(key)} edge='end' aria-label='edit'>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(key)} edge='end' aria-label='delete'>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            })}
          </List>
        </div>
      </Grid>
      <ItemDialog open={itemDialogOpen} setOpen={setItemDialogOpen} save={handleDialogSave} item={sortedData[selectedIndex]}></ItemDialog>
    </>
  );
}
