import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [allDone, setAllDone] = useState(false);

  const markAllAsDone = () => {
    if (allDone === false) {
      const completedTodos = todos.map(todo => {
        return {
          ...todo,
          complete: true
        }
      });
      setTodos(completedTodos);
      setAllDone(true);
    } else {
      const completedTodos = todos.map(todo => {
        return {
          ...todo,
          complete: false
        }
      });
      setTodos(completedTodos);
      setAllDone(false);
    }
  }

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    if (text !== '') {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    }
  }

  const editTodo: EditTodo = (text: string, selectedTodo: Todo) => {
    // console.log("asli:", todos[0]);
    const selectedIndex = todos.indexOf(selectedTodo);
    // console.log(todos[selectedIndex]);
    todos[selectedIndex].text = text;
    // console.log(todos[selectedIndex]);
    setTodos([...todos]);
  }


  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  }

  return (
    <>
      <button onClick={markAllAsDone}>Mark all as done</button>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

    </>

  );
}

export default App;