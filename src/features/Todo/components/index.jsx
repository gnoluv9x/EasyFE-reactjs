import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
const classNames = require('classnames');

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoList: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoList: null,
}

function TodoList({ todoList, onTodoList }) {

    const handleTodoClick = (todo , index) => {
        if(!onTodoList) return;

        onTodoList(todo, index);
    }

    return (
        <ul className="todoList">
            {todoList.map((todo, index) => (
                <li
                    key={todo.id}
                    className={classNames({
                        'todo-item': true,
                        finished: todo.status === 'finished' ? 'finished' : null
                    })}
                    onClick={ () => handleTodoClick(todo, index) }
                >
                    {todo.action}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;