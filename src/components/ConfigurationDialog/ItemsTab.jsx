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
import { Delete, Edit } from '@material-ui/icons';
import ItemDialog from '../ItemDialog';
import ConfirmationDialog from '../ConfirmationDialog';

export default function ItemsTab({ data, setData }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [itemDialogValues, setItemDialogValues] = useState({});
  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleEditClick = (selectedItem, itemIndex) => {
    setSelectedIndex(itemIndex);
    setItemDialogValues(selectedItem)
    setItemDialogOpen(true);
  }

  const handleDeleteClick = (itemIndex) => {
    debugger;
    setSelectedIndex(itemIndex);
    setDeleteDialogOpen(true);
  }

  const handleDeleteConfirmation = () => {
    setDeleteDialogOpen(false);
    setData(previousData => {
      previousData.splice(selectedIndex, 1);
      return previousData;
    });
    setSelectedIndex(-1);
  }

  const handleItemDialogSave = (modifiedElement) => {
    setData(previousData => {
      if (selectedIndex >= 0) {
        previousData[selectedIndex] = modifiedElement;
        setSelectedIndex(-1);
      }
      return previousData;
    });
    setItemDialogValues({});
  };

  return (
    <>
      <Grid item xs={12}>
        <div className='className'>
          <List dense={true}>
            {data.map((item, key) => {
              return <ListItem key={key}>
                {item.avatar && <ListItemAvatar>
                  <Avatar alt={item.title} src={item.avatar}></Avatar>
                </ListItemAvatar>}
                <ListItemText
                  primary={item.title ? `${item.title} ${item.subtitle}` : `${item.subtitle}`}
                  secondary={item.number}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleEditClick(item, key)} edge='end' aria-label='edit'>
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
      <ItemDialog
        item={itemDialogValues}
        open={itemDialogOpen}
        setOpen={setItemDialogOpen}
        save={handleItemDialogSave}>
      </ItemDialog>
      <ConfirmationDialog
        open={deleteDialogOpen}
        setOpen={setDeleteDialogOpen}
        handleConfirm={handleDeleteConfirmation}
        title={'Delete Item'}
        content={'Are you sure you want to delete this item? This action cannot be undone'}>
      </ConfirmationDialog>
    </>
  );
}
