import React, { useState } from 'react'
import EditTask from '../Dialog/EditTask';

const Options = ({id, title, category, description, del, setDel, setEditOpen, editOpen}) => {

    

    const delTask = async () => {
        await fetch(`https://todo-backend-gl1o.onrender.com/tasks/${id}`, {
            method: "DELETE",
        });
    }
    if(del == true){
        setDel(false);
    }
  return (
        <div className='absolute right-0 top-12 bg-white shadow-lg rounded-xl p-2 z-10 flex flex-col gap-1 w-32'>
            {editOpen && <EditTask setEditOpen={setEditOpen} id={id} title={title} category={category} description={description}/>}
            <button
            onClick={(e) =>{
                setEditOpen(true);
            }}
            
            className='hover:bg-gray-100 px-3 py-1 rounded-lg text-left'>
                Edit
            </button>

            <button
            onClick={(e) =>{
                setDel(true);
                delTask()
            }}
            className='hover:bg-gray-100 px-3 py-1 rounded-lg text-left text-red-500'>
                Delete
            </button>
        </div>
  )
}

export default Options