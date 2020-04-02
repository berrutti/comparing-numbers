import React from 'react';
//import { useSpring, animated, config } from 'react-spring';
import { Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Folder, Delete } from '@material-ui/icons';

export default function NumbersList({ listData, setListData }) {
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
                        return <ListItem>
                            <ListItemAvatar>
                                <Avatar alt={item.title} src={item.avatar}></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${item.title} ${item.number}`}
                                secondary={item.subtitle ? item.subtitle : null}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
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