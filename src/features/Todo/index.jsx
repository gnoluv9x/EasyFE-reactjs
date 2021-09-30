import React from 'react';
import TodoList from './components';

ToDoFeatures.propTypes = {
    
};

function ToDoFeatures(props) {

    const todoList = [

        {
            id: 1,
            action:'Eat'
        },
        {
            id: 2,
            action:'Coding...'
        },
        {
            id: 3,
            action:'Playing...'
        },

    ];


    return (
        <div>
            <h2>To Do List</h2>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default ToDoFeatures;