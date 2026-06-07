import React from 'react'
import { Plus } from 'lucide-react'
const Newtask = ({open, setOpen}) => {


  return (
    <div className={`flex justify-end items-center py-5 px-20`}>
        <div className=' flex items-center justify-center '>
            <div className='relative bg-white rounded-xl px-8 py-3'>
                <h3 className='font-medium text-xl tracking-wide'>Create New Task</h3>
            </div>
            <button
            onClick={()=>{
                setOpen(true)
            }}
            className='cursor-pointer transition-transform duration-200 hover:scale-110 group absolute right-5 w-20 h-20 rounded-full bg-black flex items-center justify-center'>
                <Plus size={30} className='text-white transition-transform duration-200 group-hover:scale-85'/>
            </button>
        </div>
    </div>
  )
}

export default Newtask