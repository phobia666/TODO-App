import React, { useRef, useState, useEffect } from 'react'
import { Ellipsis } from 'lucide-react'
import Options from '../moreOptions/Options';
import EditTask from '../Dialog/EditTask';

const Task = ({id, title, category, description, status, del, setDel, setEditOpen, editOpen}) => {

  const [option, setOption] = useState(false);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setOption(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  const getColor = (category) => {
    switch(category){
      case 'Landing Page Designs': return 'bg-[#f4e94c]';
      case 'Meeting Page Designs': return 'bg-[#42d753]';
      case 'UI/UX Designs': return 'bg-pink-300';
      case 'Development Tasks': return 'bg-blue-300';
      case 'Bug Fixes': return 'bg-orange-300';
      case 'Client Reviews': return 'bg-green-300';
      case 'Research': return 'bg-purple-300';
      case 'Marketing': return 'bg-yellow-300';
      case 'Content Writing': return 'bg-teal-300';
      case 'Testing & QA': return 'bg-cyan-300';
      default: return 'bg-gray-200';
    }
  }

  const firstWord = category.split(' ')[0];
  const color = getColor(category);
  
  return (
    
    <div className=' bg-white flex flex-col gap-2 rounded-3xl px-8 py-5 relative'>
      {editOpen && 
        <EditTask setEditOpen={setEditOpen} id={id} title={title} category={category} description={description} status={0} />}

      {option && (
        <div ref={optionRef}>
          <Options setOption={setOption} status={status} id={id} title={title} category={category} description={description} del={del} setDel={setDel} setEditOpen={setEditOpen} editOpen={editOpen} />
        </div>
      )}
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-xl'>{title}</h3>
        <div className='flex gap-5'>
          <div className={`${color} rounded-3xl px-3 py-1`}>
            <h3 className='font-medium text-sm'>{firstWord}</h3>
          </div>
          <Ellipsis
            className='cursor-pointer'
            onClick={() => setOption(true)}
          />
        </div>
      </div>
      <p className='text-gray-600 '>{description}</p>
    </div>
  )
}

export default Task