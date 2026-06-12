import React, { useEffect, useRef, useState } from 'react'
import Task from './Task'
import { Search } from 'lucide-react';

const Tasktype = ({open, del, setDel, setEditOpen, editOpen}) => {

  const [done, setDone] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState([])
  const allTasks = useRef([])
  

  const getTasks = async () =>{
    const response = await fetch('https://todo-backend-gl1o.onrender.com/tasks');
    const data = await response.json();
    allTasks.current = data;
    setTasks(data);
    // console.log(tasks);
  }

  useEffect(() =>{
    getTasks();
  }, [open, del, editOpen])

  const handleSearch = (value) => {
    console.log(value);
    console.log(allTasks);
    if(value === ''){
      setTasks(allTasks.current);
    }

    else{
      const displayed = 
      setTasks(allTasks.current.filter((task) => 
        task.title.toLowerCase().includes(value.toLowerCase())
      ));
    }
  }




  return (
    <div className='p-4 md:p-8 lg:p-12 '>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between px-2 md:px-4 lg:px-8'>
            <h2 className='font-bold text-3xl tracking-wide'>My Task</h2>
            <div className='flex items-center justify-between lg:justify-center lg:gap-10'>

              <div className='flex items-center flex-row gap-8'>
                <p
              onClick={() =>{
                setDone(0);
              }}
              className={`${done ? 'text-gray-600 ' : 'text-[#6241a9]'}
              font-medium text-lg cursor-pointer transition-transform duration-200 `}>
                Due soon
              </p>

              <p
              onClick={() =>{
                setDone(1);
              }}
              className={`${done ? 'text-[#6241a9]' : 'text-gray-600' }
              font-medium text-lg cursor-pointer transition-transform duration-200 `}>
                Completed
              </p>
              </div>
              
              <div className='bg-white shadow-xl gap-3 rounded-3xl flex items-center py-2 px-5'>
                <div className=' cursor-pointer w-12 h-12 rounded-full border-1 border-gray-400 p-2 flex items-center justify-center transition-transform duration-200 hover:scale-115 group'>
                  <Search className='transition-transform duration-200 group-hover:scale-85'/>
                </div>
                <input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                className='border-0 outline-none focus:outline-none focus:ring-0'
                type="text"
                placeholder='Search task..'/>
              </div>
            </div>
        </div>
        <div className='bg-[#7F56D9] w-full h-8 rounded-xl my-3'></div>
        
        {/* taskContainer */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
          {tasks.filter(task => task.status == done).map((task) =>{
            return (
              <Task
              id={task.id}
              title={task.title}
              category={task.category}
              description={task.description}
              status={task.status}
              del={del}
              setDel={setDel}
              setEditOpen={setEditOpen}
              editOpen={editOpen}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Tasktype