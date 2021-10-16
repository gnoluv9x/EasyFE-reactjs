import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import AlbumList from './features/Album';
import ColorBox from './features/Colorbox';
import Counter from './features/Counter';
import ToDoFeatures from './features/Todo';
import './App.css';
import NotFound from './components/NotFound';
import productApi from './api/productsApi';

function App() {

    // test call api
    useEffect( () => {
        const params = {
            _limit : 5,
        };

        const fetchProductApi = async () => {
            const productList = await productApi.getAll(params);
            console.log( productList );
        };

        fetchProductApi();
        
    }, [])


    return (
        <div className="App">
            <p>Header</p>

            <p>
                <NavLink to="/todos" activeClassName="active-navLink">
                    Go to todos page by NavLink
                </NavLink>
            </p>
            <p>
                <NavLink to="/albums" activeClassName="active-navLink">
                    Go to albums page by NavLink
                </NavLink>
            </p>

            <Switch>
                <Redirect from="/home" to="/colorboxs" />

                <Route path="/" component={ToDoFeatures} />
                <Route path="/todos" component={ToDoFeatures} />
                <Route path="/albums" component={AlbumList} />
                <Route path="/colorboxs" component={ColorBox} />
                <Route path="/counters" component={Counter} />

                <Route component={NotFound} />
            </Switch>

            <p>Footer</p>
        </div>
    );
}

export default App;
