import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { HomeOutlined, PeopleOutlined, SportsBasketballOutlined } from '@material-ui/icons';
import useStyles from './SidebarStyles';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
    const classes = useStyles();

    return (
        <Drawer
            open={open}
            variant="slide"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            onClose={onClose}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Jugadores" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SportsBasketballOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Torneos" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
