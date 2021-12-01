import { makeStyles } from '@material-ui/core';
import { Container, Grid, Pagination, Paper } from '@mui/material';
import { Box } from '@mui/system';
import productApi from 'api/productsApi';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import FilterViewer from '../components/FilterViewer';
import ListProduct from '../components/ListProduct';
import ProductFilters from '../components/ProductFilters';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductSort from '../components/ProductSort';

const useStyle = makeStyles((theme) => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '20px',
    },
}));

function ListProductPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState([]);

    const history = useHistory();
    const location = useLocation();

    // refetch data when url change ( location.search change )
    const queryParams = useMemo(() => {
        return queryString.parse(location.search, { parseBooleans: true, parseNumbers: true });
    }, [location.search]);
    console.log('queryParams: ', queryParams);

    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        total: 100,
    });

    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: queryParams._page || 1,
    //     _limit: queryParams._limit || 8,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }));

    // useEffect(() => {
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filters),
    //     });
    // }, [history, filters]);

    useEffect(() => {
        try {
            (async function () {
                let { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
                setLoading(false);
            })();
        } catch (error) {
            console.log('Failed to fetch product list', error);
        }
    }, [queryParams]);

    const handleChangePage = (e, page) => {
        // setFilters((prevFilters) => {
        //     return {
        //         ...prevFilters,
        //         _page: page,
        //     };
        // });
        const newQueryParams = {
            ...queryParams,
            _page: page,
        };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newQueryParams),
        });
    };

    const handleChangeSortValue = (newSortValue) => {
        // setFilters((prevFilters) => {
        //     return {
        //         ...prevFilters,
        //         _sort: newSortValue,
        //     };
        // });

        const newQueryParams = {
            ...queryParams,
            _sort: newSortValue,
        };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newQueryParams),
        });
    };

    const handleFilterChange = (newFilters) => {
        // setFilters({
        //     ...filters,
        //     ...newFilters,
        // });

        const newQueryParams = {
            ...queryParams,
            ...newFilters,
        };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newQueryParams),
        });
    };

    const handleChangeFilterView = (newFilters) => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters),
        });
    };

    return (
        <Box>
            <Container spacing={1}>
                <Grid container>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters onChange={handleFilterChange} filters={queryParams} />
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort onChange={handleChangeSortValue} sortValue={queryParams._sort} />
                            <FilterViewer onChange={handleChangeFilterView} filters={queryParams} />
                            {loading ? <ProductSkeleton skeletonLength={8} /> : <ListProduct data={productList} />}

                            <Box className={classes.pagination}>
                                <Pagination
                                    page={pagination.page}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    color="primary"
                                    onChange={handleChangePage}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListProductPage;
