import { Box } from '@mui/system';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListProductPage from './pages/ListProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function ProductFeature(props) {

    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.path} component={ListProductPage} exact/>
                <Route path={`${match.path}/:productId`} component={ProductDetailPage}/>
            </Switch>
        </Box>
    );
}

export default ProductFeature;
