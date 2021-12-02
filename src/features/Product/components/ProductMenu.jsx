import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

ProductMenu.propTypes = {
    
};

function ProductMenu() {
    const { url } = useRouteMatch();

    return (
        <Box component="ul">
            <li>
                <NavLink to={url} exact>Details</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/additional`} exact>Additional Info</NavLink>
            </li>
            <li>
                <NavLink to={`${url}/reviews`} exact>Reviews</NavLink>
            </li>
        </Box>
    );
}

export default ProductMenu;
