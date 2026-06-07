import React, { useState } from 'react'

const EditTask = ({setEditOpen, id}) => {

    const [selected, setSelected] = useState('placeholder')
    const [error, setError] = useState('');
    const [titleError, setTitleError] = useState('')
    const [descError, setDescError] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const editTask = async (id, title, category, description) => {
        await fetch(`https://todo-app-production-fe20.up.railway.app/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, category, description }),
        });
    }   

    const testing = (e) => {
        let cond1 = selected =='placeholder';
        let cond2 = title == '';
        let cond3 = description == '';
        
        if(cond1 || cond2 || cond3){
            if(cond1){
                setError('Please select a category');
            }
            else{
                setError('')
            }
            if(cond2){
                setTitleError('Please enter a title');
            }
            else{
                setTitleError('')
            }
            if(cond3){
                setDescError('Please enter a description');
            }
            else{
                setDescError('')
            }
        }
        else{
            editTask(id, title, selected, description);
            setEditOpen(false);
        }
    }


  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center">
        <form 
        onSubmit={(e) =>{
            e.preventDefault();
            testing(e);
            
        }}
        className='bg-white  rounded-3xl flex flex-col gap-5 p-5'>
        <div  className='flex flex-col items-center justify-center gap-5'>
            <h2 className='font-semibold text-2xl'>Edit Task Details</h2>

            <div className='flex gap-10'>
                <div className='bg-[#7F56D9] rounded-2xl px-5 py-2'>
                    <h3 className='text-white font-medium text-xl '>Category</h3>
                </div>

            <select
            className='bg-gray-200 rounded-xl border-0 px-4 '
            value={selected}
            onChange={(e) => {
                setSelected(e.target.value)
            }}
            >
                <option value="placeholder">Select an option</option>
                <option value="Landing Page Designs">Landing Page Designs</option>
                <option value="Meeting Page Designs">Meeting Page Designs</option>
                <option value="UI/UX Designs">UI/UX Designs</option>
                <option value="Development Tasks">Development Tasks</option>
                <option value="Bug Fixes">Bug Fixes</option>
                <option value="Client Reviews">Client Reviews</option>
                <option value="Research">Research</option>
                <option value="Marketing">Marketing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Testing & QA">Testing & QA</option>
            </select>
        </div>
        </div>

        <div className='flex justify-end px-5'>
            {error && <div className='text-red-500 text-sm'>{error}</div>}
        </div>
        

        <div className='flex justify-between'>
            <h2 className='font-semibold text-2xl'>Task title</h2>
            <input 
            type='text'
            onChange={(e) =>{
                console.log(e.target.value);
                setTitle(e.target.value)
            }}
            value={title}
            className='border-2 w-3/5 rounded-xl p-2' type="text" placeholder='Enter Task title' />
        </div>

        <div className='flex justify-end px-5'>
            {titleError && <div className='text-red-500 text-sm'>{titleError}</div>}
        </div>

        <div className='flex justify-between'>
            <h2 className='font-semibold text-2xl'>Task Description</h2>
            <textarea
            onChange={(e) => {
                console.log(e.target.value);
                setDescription(e.target.value)
            }}
            value={description}
            className='border-2 w-3/5 h-30 rounded-xl p-2' name="" id="" placeholder='Enter Task description'></textarea>
        </div>

        <div className='flex justify-end px-5'>
            {descError && <div className='text-red-500 text-sm'>{descError}</div>}
        </div>
        
        <div className='flex items-center justify-center gap-20 '>
            <button
            type='button'
            onClick={() => {
                setEditOpen(false);
            }}
            className='bg-[#000000] rounded-2xl px-5 py-2 cursor-pointer text-white font-medium text-xl'>
                Cancle
            </button>
            <button
            type='submit'
            className='bg-[#7F56D9] rounded-2xl px-5 py-2 cursor-pointer text-white font-medium text-xl'>
                Edit Task
            </button>
        </div>
        

    </form>
</div>
  )
}

export default EditTask