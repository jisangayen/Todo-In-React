import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io"; // Icon for marking task as done
import { MdOutlineDone } from "react-icons/md"; // Icon for marking task as undone
import { RxCross2 } from "react-icons/rx";

function Todo({ task, deleteTodo, toggleEditMode, marksDone, isDone }) {
    if (!task || !task.task) {
        return null; // Return nothing if the task is invalid
    }


    return (
        <div className='flex justify-between items-center bg-[#135D66] text[#D0B8A8] font-semibold py-3 px-4 rounded-md mb-1'>
            <div className='flex items-center'>
                {/* Toggle between done and undone icons */}
                {isDone ? (
                    <IoMdDoneAll
                    style={isDone ? { color: "#4793AF" } : {}}
                        className='text-xl cursor-pointer '
                        onClick={() => marksDone(task.id)}
                    />
                ) : (
                    <MdOutlineDone
                        className='text-xl cursor-pointer text-gray-400 opacity-40 hover:opacity-100'
                        onClick={() => marksDone(task.id)}
                    />
                )}
                
                {/* Task text with optional line-through when done */}
                <p
                    className='font-primary ml-4 '
                    style={isDone ? { fontWeight:"bold", textDecoration: "line-through" } : {}}
                    onClick={() => marksDone(task.id)}
                >
                    {task.task}
                </p>
            </div>

            <div className='flex items-center gap-x-6'>
                {/* Edit task icon */}
                <FaEdit
                    className='text-xl cursor-pointer text-green-500 opacity-40 hover:opacity-100'
                    onClick={() => toggleEditMode(task.id)}
                />

                {/* Delete task icon with confirmation */}
                <RxCross2 
                    className='text-xl cursor-pointer text-red-500 opacity-40 hover:opacity-100'
                    onClick={()=> deleteTodo(task.id)}
                />
            </div>
        </div>
    );
}

export default Todo;
