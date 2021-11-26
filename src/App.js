import HeadingComponent from 'components/Header';
import ProductFeature from 'features/Product';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import productApi from './api/productsApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumList from './features/Album';
import ColorBox from './features/Colorbox';
import CounterFeature from './features/Counter';
import ToDoFeatures from './features/Todo';

function App() {

    return (
        <div className="App">
            <HeadingComponent />

            <Switch>
                <Redirect from="/home" to="/colorboxs" />

                <Route path="/" component={ColorBox} exact/>
                <Route path="/albums" component={AlbumList} />
                <Route path="/todos" component={ToDoFeatures} />
                <Route path="/colorboxs" component={ColorBox} />
                <Route path="/counters" component={CounterFeature} />
                <Route path="/products" component={ProductFeature} exact/>

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
