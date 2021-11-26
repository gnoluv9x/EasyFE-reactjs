import { FilterSharp } from '@mui/icons-material';
import { Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import productApi from 'api/productsApi';
import React, { useEffect, useState } from 'react';
import ListProduct from '../components/ListProduct';
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
    pagination : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop : '20px',
        paddingBottom : '20px',
    }
}));

function ListProductPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        total: 100,
    });
    const [productFilters, setProductFilters] = useState({
        _page: 1,
        _limit: 8,
        _sort: "salePrice:ASC"
    });

    useEffect(() => {
        (async function () {
            let { data, pagination } = await productApi.getAll(productFilters);
            setProductList(data);
            setPagination(pagination);
            setLoading(false);
        })();
    }, [productFilters]);

    const handleChangePage = (e, page) => {
        setProductFilters((prevFilters) => {
            return { 
                ...prevFilters, 
                _page: page,
            };
        });
    };

    const handleChangeSortValue = (newSortValue) => {
        setProductFilters((prevFilters) => {
            return { 
                ...prevFilters, 
                _sort: newSortValue,
            };
        });
    }

    return (
        <Box>
            <Container spacing={1}>
                <Grid container>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left col</Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort onChange={handleChangeSortValue} sortValue={productFilters._sort} />
                            {loading ? <ProductSkeleton skeletonLength={8}/> : <ListProduct data={productList} />}

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
