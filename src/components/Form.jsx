import React, { useState } from 'react';

function Form({ createTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(value);
        setValue('');
    };

    return (
        <form className='mb-4 font-primary w-full  flex' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='w-[74%] outline-none bg-transparent border border-gray-500 p-4 text-white mb-2 rounded  placeholder:text-[#E3FEF7] h-12'
                placeholder='What task do you have today?' 
                required 
                maxLength={40}
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
            />
            <button 
                className='w-[25%] text-[#E3FEF7] border ml-1 border-[#E3FEF7]  active:bg-[#77B0AA] rounded cursor-pointer bg-transparent h-12'
            >
                Add Task
            </button>
        </form>
       
    );
}

export default Form;
