import { useCallback, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodos(){
  const array = [];
  for(let i=1 ; i<= 4500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {

  const [todos, setTodos] = useState(createBulkTodos)

  const nextId = useRef(4501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current++,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
    },
    [],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos=>todos.filter(todo => todo.id != id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos=>
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
