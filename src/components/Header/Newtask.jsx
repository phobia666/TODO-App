import React from 'react'
import { Plus } from 'lucide-react'

const Newtask = ({open, setOpen}) => {


  return (
    <div className={`flex items-center  px-8`}>
        <div className=' flex items-center justify-center '>
            <div className='relative bg-[#7F56D9] rounded-xl px-8 py-3'>
                <h3 className='font-medium text-xl tracking-wide text-white'>Create New Task</h3>
            </div>
            <button
            onClick={()=>{
                setOpen(true) 
            }}
            className='cursor-pointer transition-transform duration-200 hover:scale-110 group absolute right-0 lg:right-3  w-20 h-20 rounded-full bg-black flex items-center justify-center'>
                <Plus size={30} className='text-white transition-transform duration-200 group-hover:scale-85'/>
            </button>
        </div>
    </div>
  )
}

export default Newtask