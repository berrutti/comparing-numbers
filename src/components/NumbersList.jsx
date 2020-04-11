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
import { byNumbers } from '../utils/constants';

export default function NumbersList({ data }) {
  const sortedData = [...data].sort(byNumbers);

  return (
    <Grid item xs={12}>
      <div className='className'>
        <List dense={true}>
          {sortedData.map((item, i) => {
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