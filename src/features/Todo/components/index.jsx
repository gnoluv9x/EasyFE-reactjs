import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    TodoList : PropTypes.array, 
};

TodoList.defaultProps = [];

function TodoList({todoList}) {
    return (
        <ul>
            { todoList.map( todo => (
                <li key={todo.id}>{todo.action}</li>
            ))}
        </ul>
    );
}

export default TodoList;