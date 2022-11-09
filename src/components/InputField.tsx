import React, { useRef } from 'react';
// import { SpreadAssignment } from 'typescript';
import './style.css'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({ todo, setTodo }: props) => {
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className='input'
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type='input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)
                } placeholder='Enter a task'
                className='input_box'
            />
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
    )
}
export default InputField;