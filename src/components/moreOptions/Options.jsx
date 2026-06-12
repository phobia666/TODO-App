import React, { useState } from 'react'
import EditTask from '../Dialog/EditTask';

const Options = ({setOption, status, id, title, category, description, del, setDel, setEditOpen, editOpen}) => {


    const [done, setDone] = useState(false);

    const delTask = async () => {
        await fetch(`https://todo-backend-gl1o.onrender.com/tasks/${id}`, { method: "DELETE" });
        setDel(true);
        setOption(false);
    }

    const markDone = async () => {
    await fetch(`https://todo-backend-gl1o.onrender.com/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, description, status: 1 }),
    });
    setDel(true);
    setOption(false);
  }

  const markUnDone = async () => {
    await fetch(`https://todo-backend-gl1o.onrender.com/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, description, status: 0 }),
    });
    setDel(true);
    setOption(false);
  }
  if(del == true) setDel(false);



  return (
        <div className='absolute right-0 top-12 bg-white shadow-lg rounded-xl p-2 z-10 flex flex-col gap-1 w-32'>

            <button
            onClick={(e) =>{
                if(status == 0) markDone();
                else markUnDone();
            }}
            className='hover:bg-gray-100 text-[#7F56D9] font-medium px-3 py-1 rounded-lg text-left'>
                {status ? 'Undone' : 'Done'}
            </button>

            <button
            onClick={(e) =>{
                setEditOpen(true);
                setOption(false);
            }}
            
            className='hover:bg-gray-100 px-3 py-1 rounded-lg text-left'>
                Edit
            </button>

            <button
            onClick={(e) =>{
                setOption(false);
                setDel(true);
                delTask();
            }}
            className='hover:bg-gray-100 px-3 py-1 rounded-lg text-left text-red-500'>
                Delete
            </button>
        </div>
  )
}

export default Options