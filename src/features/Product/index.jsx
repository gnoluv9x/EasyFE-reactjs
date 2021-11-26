import { Box } from '@mui/system';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListProductPage from './pages/ListProductPage';

function ProductFeature(props) {

    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.path} component={ListProductPage} exact/>
            </Switch>
        </Box>
    );
}

export default ProductFeature;
