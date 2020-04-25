import React, { useState } from 'react';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import ItemDialog from '../ItemDialog';
import ConfirmationDialog from '../ConfirmationDialog';

export default function ItemsTab({ data, setData }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [editValues, setItemDialogValues] = useState({});
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const byNumber = (a, b) => {
    if (a.number > b.number) {
      return -1;
    }
    if (b.number > a.number) {
      return 1;
    }
    return 0;
  }

  const handleEditClick = (selectedItem, itemIndex) => {
    setSelectedIndex(itemIndex);
    setItemDialogValues(selectedItem)
    setEditOpen(true);
  }

  const handleDeleteClick = (itemIndex) => {
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

  const handleEditSave = (modifiedElement) => {
    setData(previousData => {
      if (selectedIndex >= 0) {
        previousData[selectedIndex] = modifiedElement;
        setSelectedIndex(-1);
      }
      return previousData;
    });
    setItemDialogValues({});
  };

  const handleAddNew = (newElement) => {
    setData(previousData => {
      previousData.push(newElement)
      return previousData.sort(byNumber);
    });
    setItemDialogValues({});
  };

  return (
    <>
      <IconButton aria-label='add' onClick={() => setAddOpen(true)}>
        <AddCircle />
      </IconButton>
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
      <ItemDialog
        dialogTitle='Edit Item'
        item={editValues}
        open={editOpen}
        setOpen={setEditOpen}
        save={handleEditSave}>
      </ItemDialog>
      <ItemDialog
        dialogTitle='Add Item'
        open={addOpen}
        setOpen={setAddOpen}
        save={handleAddNew}>
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
