import React from 'react';
import {EditTodoForm} from './EditTodoForm';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteTodo, editTodo}) => {
    return (
        <li>
            <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input 
                    type="checkbox" 
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }} 
                />{' '} 
                {todo.text}
                {/* <button>Edit</button> */}
                <button style={{backgroundColor: 'red', color: 'white'}} onClick={() => {
                    deleteTodo(todo);
                }}>x</button>
            </label>
            <EditTodoForm todo={todo} editTodo={editTodo} />
        </li>
        
    );
}
