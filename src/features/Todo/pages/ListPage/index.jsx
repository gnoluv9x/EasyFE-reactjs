import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components';
import queryString from 'query-string';


ListPage.propTypes = {

};

function ListPage(props) {

    const initTodoList = [

        {
            id: 1,
            action: 'Eat',
            status: 'created',
        },
        {
            id: 2,
            action: 'Coding...',
            status: 'created',
        },
        {
            id: 3,
            action: 'Playing...',
            status: 'finished',
        },

    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [statusfiltered , setStatusfiltered] = useState( () => {

        const locationString = queryString.parse(location.search);
        return locationString.status || 'all';

    });
    // listen show button
    useEffect( () => {

        const statusFromUrl = queryString.parse(location.search);
        setStatusfiltered( statusFromUrl.status );

    }, [location.search]);

    const handleTodoClick = (todo , index) => {
        // clone current todoList to new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index].status =  todo.status === 'created' ? 'finished' : 'created';
        
        // update status
        setTodoList(newTodoList);

    }
    const handleShowAll = () => {
        // setStatusfiltered('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams),
        });
    }
    const handleShowCreated = () => {
        // setStatusfiltered('created');
        const queryParams = { status: 'created' };
        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams),
        });
    }
    const handleShowFinished = () => {
        // setStatusfiltered('finished');
        const queryParams = { status: 'finished' };
        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams),
        });
    }

    const todoListFiltered = useMemo( () => {
        return todoList.filter(todo => statusfiltered === 'all' || statusfiltered === todo.status );
    }, [ todoList, statusfiltered ] );

    return (
        <div>
            <h2>To Do List</h2>
            <TodoList todoList={todoListFiltered} onTodoList={handleTodoClick}/>

            <button onClick={handleShowAll}>Show all</button>
            <button onClick={handleShowCreated}>Show Created</button>
            <button onClick={handleShowFinished}>Show Finished</button>
        </div>
    );
}

export default ListPage;