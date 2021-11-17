import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Register from 'features/Auth/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    button: {
        color: 'white',
        textDecoration: 'none',
    }
});

function HeadingComponent() {
    const classes = useStyles();
    
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <GitHubIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link className={classes.button} to="/">
                                HomePage
                            </Link>
                        </Typography>

                        <NavLink className={classes.button} to="/todos" >
                            <Button  color="inherit">Todos</Button>
                        </NavLink>

                        <NavLink className={classes.button} to="/albums">
                            <Button  color="inherit">Albums</Button>
                        </NavLink>

                        <NavLink className={classes.button} to="/counters">
                            <Button  color="inherit">Counter</Button>
                        </NavLink>
                        
                        <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog
                disableEscapeKeyDown
                open={open}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose(event, reason);
                    }
                    }}
            >
                <DialogContent>
                    <Register />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>Subscribe</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default HeadingComponent;
