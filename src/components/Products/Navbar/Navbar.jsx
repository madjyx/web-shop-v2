import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../assets/logo.png'
import useStyles from './styles';


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                  TECH-SHOP<img src={logo} alt="Web-shop" height="50px" className={classes.image} />
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartRounded color='#6200EE'/>
                        </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
