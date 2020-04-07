import React from 'react';
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
import { Delete } from '@material-ui/icons';

export default function NumbersList({ listData }) {
  const sortNumber = (firstElement, secondElement) => {
    if (firstElement.number < secondElement.number) {
      return -1;
    }
    if (firstElement.number > secondElement.number) {
      return 1;
    }
    return 0;
  };

  return (
    <Grid item xs={12} md={6}>
      <div className='className'>
        <List dense={true}>
          {listData.map((item, i) => {
            return <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.avatar}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title ? item.title : null}
                secondary={item.subtitle ? item.subtitle : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          })}
        </List>
      </div>
    </Grid>
  );
}