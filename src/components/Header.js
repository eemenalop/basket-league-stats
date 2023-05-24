import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import useStyles from './HeaderStyles';
import Sidebar from './Sidebar';

const Header = () => {
    const classes = useStyles();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleSidebarToggle} className={classes.menuButton}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Menu</Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />
            <div className={isSidebarOpen ? classes.contentShift : null}>
                {/* Aquí va el contenido principal de tu aplicación */}
            </div>
        </div>
    );
};

export default Header;
