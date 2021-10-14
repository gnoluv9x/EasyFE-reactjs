import React from 'react';
import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from '../../components/NotFound';

ToDoFeatures.propTypes = {

};

function ToDoFeatures(props) {

    const match = useRouteMatch();

    return (
        <div>
            Todo shared

            <Switch>
                <Route path={match.path} component={ ListPage } exact/>
                <Route path={`${match.path}/:todoId`} component={ DetailPage } exact/>

                <Route component={ NotFound } />
            </Switch>

        </div>
    );
}

export default ToDoFeatures;