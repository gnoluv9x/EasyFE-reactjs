import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

ProductMenu.propTypes = {
    
};

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',

        '& > li' : {
            margin: theme.spacing(1, 4),
            fontSize: theme.typography.h6.fontSize,
        },

        '& > li a' : {
            textDecoration : 'none',
            cursor: 'pointer',
            color: theme.palette.grey[700],
        },
        '& > li a.active' : {
            textDecoration : 'underline',
            color : theme.palette.primary.main,
        },
    },
}))

function ProductMenu() {
    const { url } = useRouteMatch();
    const classes = useStyles();

    return (
        <Box className={classes.root} component="ul">
            <li >
                <Link component={NavLink} to={url} exact>Descriptions</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/additional`} exact>Additional Info</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact>Reviews</Link>
            </li>
        </Box>
    );
}

export default ProductMenu;
