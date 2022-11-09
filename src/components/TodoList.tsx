import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';
import './style.css'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
    todos, 
    setTodos, 
    completedTodos, 
    setCompletedTodos
}) => {
return(
    <div className='container'>
        <Droppable droppableId='TodosList'>
            {(provided, snapshot) => (
            <div 
            className={`todos ${snapshot.isDraggingOver ? 'dragactive':''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
            <span className='todos_heading'>Active Task</span>
            {todos.map((todo, index) => (
                <SingleTodo
                index={index}
                todo={todo} 
                todos={todos} 
                key={todo.id} 
                setTodos={setTodos}
                />
        ))}
        {provided.placeholder}
            </div>    
            )}
        </Droppable>
        <Droppable droppableId='TodosRemove'>
            {(provided, snapshot) => (
                    <div className={`todos remove ${
                        snapshot.isDraggingOver ? 'dragcomplete' :''
                    }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                    <span className='todos_heading'>
                        Completed Task
                    </span>
                    {completedTodos?.map((todo, index) => (
            <SingleTodo
            index={index}
            todo={todo} 
            todos={completedTodos} 
            key={todo.id} 
            setTodos={setCompletedTodos}
            />
            ))}
             {provided.placeholder}
                    </div>  
                )
            }
        </Droppable>  
    </div>
)

};
export default TodoList