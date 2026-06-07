import React, { useEffect, useState } from 'react'
import Task from './Task'

const Tasktype = ({open, del, setDel, setEditOpen, editOpen}) => {

  const [done, setDone] = useState(0);
  console.log(done);
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState([]);
  

  const getTasks = async () =>{
    const response = await fetch('https://todo-app-production-fe20.up.railway.app/tasks');
    const data = await response.json();
    setTasks(data);
    console.log(tasks);
  }

  useEffect(() =>{
    getTasks();
  }, [open, del, editOpen])



  return (
    <div className='px-8'>
        <div className='flex items-center justify-between px-8'>
            <h2 className='font-bold text-3xl tracking-wide'>My Task</h2>
            <div className='flex items-center justify-center gap-20'>

              <p
              onClick={() =>{
                setDone(0);
              }}
              className='text-[#6241a9] font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-2'>Due soon</p>
              <p
              onClick={() =>{
                setDone(1);
              }}
              className='text-gray-600 font-medium cursor-pointer transition-transform duration-200 hover:-translate-y-2'>Completed</p>
            </div>
        </div>
        <div className='bg-[#7F56D9] w-full h-8 rounded-xl my-3'></div>
        
        {/* taskContainer */}
        <div className='flex flex-wrap gap-5 py-5'>
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