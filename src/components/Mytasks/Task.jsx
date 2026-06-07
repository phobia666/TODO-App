import React, { useState } from 'react'
import { Ellipsis } from 'lucide-react'
import Options from '../moreOptions/Options';

const Task = ({id, title, category, description, status, del, setDel, setEditOpen, editOpen}) => {

  const [option, setOption] = useState(false);

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
    <div className='w-12/25 bg-white rounded-3xl px-8 py-5 relative'>
      {option && <Options id={id} del={del} setDel={setDel} setEditOpen={setEditOpen} editOpen={editOpen} />}
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
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default Task