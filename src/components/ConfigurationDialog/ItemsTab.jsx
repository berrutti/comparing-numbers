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
import { Edit } from '@material-ui/icons';
import ItemDialog from '../ItemDialog/ItemDialog';

export default function ItemsTab({ data, setData }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [itemDialogValues, setItemDialogValues] = useState({});
  const [itemDialogOpen, setItemDialogOpen] = useState(false);

  const handleEditClick = (selectedItem, itemIndex) => {
    setSelectedIndex(itemIndex);
    setItemDialogValues(selectedItem)
    setItemDialogOpen(true);
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
                </ListItemSecondaryAction>
              </ListItem>
            })}
          </List>
        </div>
      </Grid>
      <ItemDialog item={itemDialogValues} open={itemDialogOpen} setOpen={setItemDialogOpen} save={handleItemDialogSave} ></ItemDialog>
    </>
  );
}
