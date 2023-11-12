import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo=>(
                <TodoListItem onToggle={onToggle} todo={todo} onRemove={onRemove} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;