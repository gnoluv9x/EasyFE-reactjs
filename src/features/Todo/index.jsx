import React from 'react';
import { useState } from 'react';
import TodoList from './components';

ToDoFeatures.propTypes = {

};

function ToDoFeatures(props) {

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
    const [todoList, setTodoList] = useState(initTodoList);
    const [statusfiltered , setStatusfiltered] = useState('all');

    const handleTodoClick = (todo , index) => {
        // clone current todoList to new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index].status =  todo.status === 'created' ? 'finished' : 'created';
        
        // update status
        setTodoList(newTodoList);

    }
    const handleShowAll = () => {
        setStatusfiltered('all')
    }
    const handleShowCreated = () => {
        setStatusfiltered('created')
    }
    const handleShowFinished = () => {
        setStatusfiltered('finished')
    }

    const todoListFiltered = todoList.filter(todo => statusfiltered === 'all' || statusfiltered === todo.status );

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

export default ToDoFeatures;