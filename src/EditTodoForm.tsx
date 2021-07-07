import React, {useState} from 'react';

interface Props {
    todo: Todo;
    editTodo: EditTodo;
}

export const EditTodoForm: React.FC<Props> = ({todo, editTodo}) => {
    const [text, setText] = useState('');
    
    return (
        <form>
            <input 
                type="text"
                value={text}
                onChange={e => {setText(e.target.value)}}
            />
            <button 
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    editTodo(text, todo);
                    setText('');
                }}
            >
            Edit
            </button>
        </form>
    );
}