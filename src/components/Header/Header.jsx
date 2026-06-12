import React, { useEffect, useEffectEvent, useState } from 'react'
import { LayoutGrid, ChartPie, CalendarDays, Settings, Search } from 'lucide-react'
import Newtask from './Newtask';
import Nav from './Nav';
const Header = ({open, del, editOpen, setOpen}) => {


    const [totalTasks, setTotalTasks] = useState(0);


    const getTasks = async () =>{
        const response = await fetch('https://todo-backend-gl1o.onrender.com/tasks');
        const data = await response.json();
        setTotalTasks(data.length);
    }
    
    useEffect(() =>{
        getTasks();
    }, [open, del, editOpen])



  return (

    <div className={`lg:bg-white lg:fixed lg:z-10 lg:border-b px-5 lg:px-10 py-2 lg:py-5 flex justify-between top-0 left-0 right-0  border-gray-300`}>

        <div className='flex items-center justify-center gap-5 '>
            <img className='object-cover w-20 h-20 rounded-full shadow-md shadow-gray-400' src="ab.jpg" alt="" />
            <div>
                <h3 className='font-semibold text-xl tracking-wide '>Abhyanshu Shah</h3>
                <p className='font-normal text-s tracking-normal text-gray-400'>{totalTasks < 2 ? `${totalTasks} task today` : `${totalTasks} tasks today`}</p>
            </div>
        </div>

        {/* <div className='w-full flex items-center justify-center'> */}
        <div className='hidden lg:block'>
            <Nav />
        </div>
        

        {/* </div> */}
        

        <Newtask  setOpen={setOpen}/>
    </div>
  )
}

export default Header