import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {

    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            console.log(index);
            console.log(key);
            console.log(style);
            return (
                <TodoListItem
                    todo = {todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            )
        },
        [onToggle, onRemove, todos]
    )

    return (
        <List
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    );
};

export default React.memo(TodoList);