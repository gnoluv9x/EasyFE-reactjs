import {
    AppBar,
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import Login from 'features/Auth/Login';
import Register from 'features/Auth/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        color: 'white',
        textDecoration: 'none',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    homepage: {
        flexGrow: '1',
    },
    closeButton: {
        position: 'absolute !important',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: '#A9A9A9',
        zIndex: 1,
    },
    accountIcon: {
        margin: theme.spacing(0, 1),
        cursor: 'pointer',
    },
    toggleBtn: {
        textAlign: 'center',
    },
}));

const MODE_LIST = {
    LOGIN: 'login',
    REGISTER: 'register',
};

function HeadingComponent() {
    const dispatch = useDispatch();
    const loginedUser = useSelector((state) => state.user.current);
    const isLogined = !!loginedUser.id;

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE_LIST.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    };

    return (
        <div>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.icon}
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <GitHubIcon />
                        </IconButton>

                        <Typography className={classes.homepage} variant="h6" component="div">
                            <Link className={classes.button} to="/">
                                HomePage
                            </Link>
                        </Typography>

                        <NavLink className={classes.button} to="/todos">
                            <Button color="inherit">Todos</Button>
                        </NavLink>

                        <NavLink className={classes.button} to="/albums">
                            <Button color="inherit">Albums</Button>
                        </NavLink>

                        <NavLink className={classes.button} to="/counters">
                            <Button color="inherit">Counter</Button>
                        </NavLink>

                        <NavLink className={classes.button} to="/products">
                            <Button color="inherit">Products</Button>
                        </NavLink>

                        {!isLogined && (
                            <Button color="inherit" onClick={handleClickOpen}>
                                Login
                            </Button>
                        )}
                        {isLogined && <AccountCircleIcon className={classes.accountIcon} onClick={handleUserClick} />}

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                        </Menu>
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
                <IconButton onClick={handleClose} className={classes.closeButton}>
                    <Close />
                </IconButton>

                <DialogContent>
                    {mode === MODE_LIST.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box className={classes.toggleBtn}>
                                <Button onClick={() => setMode(MODE_LIST.LOGIN)} color="primary">
                                    Already has an account. Login here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE_LIST.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box className={classes.toggleBtn}>
                                <Button onClick={() => setMode(MODE_LIST.REGISTER)} color="primary">
                                    Dont has an account. Register here!!!
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default HeadingComponent;
