import React, { useState, useEffect } from 'react';

function Edit({ editTodo, task, cancelEdit }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            editTodo(task.id, value);
            setValue('');
        }
    };

    useEffect(() => {
        setValue(task.task); // Set the initial value to the current task value
    }, [task]);

    return (
        <form className='font-primary  w-full'  onSubmit={handleSubmit}>
            <input
                type="text"
                className='w-[74%]  outline-none bg-transparent border border-gray-500 p-4 text-white mb-2 rounded placeholder:text-gray-300 h-12 '
                onChange={(e) => setValue(e.target.value)}
                value={value}
                maxLength={50}
            />
            <button
                type="submit"
                className='w-[25%]  h-12 ml-1  text-white border border-gray-500 rounded cursor-pointer bg-[135D66]  active:bg-[#77B0AA]'
            >
                Update 
            </button>
            {/* <button
                type="button"
                className='p-4 text-white border ml-2 border-gray-500 rounded cursor-pointer bg-gray-800'
                onClick={cancelEdit} // Add a cancel button to exit editing mode
            >
                Cancel
            </button> */}
        </form>
    );
}

export default Edit;
