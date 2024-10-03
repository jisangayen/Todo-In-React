import React, { useState } from "react";
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import Edit from "./Edit";

const TodoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = (todo) => {
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false, isDone:false }]);
    }

    const deleteTodo = (id) => {
        setTodo(todoValue.filter(todo => todo.id !== id));
    }

    const saveEditedTodo = (id, newTask) => {
        setTodo(todoValue.map(todo => 
            todo.id === id ? { ...todo, task: newTask, isEditing: false} : todo
        ));
    }

    const toggleEditMode = (id) => {
        setTodo(todoValue.map(todo => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    }


    const marksDone = (id) => {
        setTodo(todoValue.map(todo => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone }; // Toggle the isDone status
            } else {
                return todo;
            }
        }));
    };




    return (
        <div className="container bg-[#003C43] p-8 rounded-md  w-[600px] ml-4 mr-4 shadow-2xl mb-20 ">
            <h3 className="text-4xl font-semibold text-center mb-4 text-[#E3FEF7]">Todo List</h3>
            <Form createTodo={createTodo} />
            {
                todoValue.map((todo, idx) => (
                    todo.isEditing ? (
                        <Edit 
                            key={idx} 
                            editTodo={saveEditedTodo} 
                            task={todo} 
                            cancelEdit={() => toggleEditMode(todo.id)} 
                        />
                    ) : (
                        <Todo 
                            task={todo} 
                            key={idx} 
                            deleteTodo={deleteTodo} 
                            toggleEditMode={() => toggleEditMode(todo.id)} 
                            marksDone={marksDone}   
                            isDone={todo.isDone}
                        />
                    )
                ))
            }
        </div>
    );
}

export default TodoList;
