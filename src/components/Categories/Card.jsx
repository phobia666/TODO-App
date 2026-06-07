import React from 'react'
import { PencilLine, Video, Palette, Code, Bug, Users, Search, Megaphone, PenLine, TestTube } from 'lucide-react'

const Card = ({ title, projects, active }) => {

  const getColor = (title) => {
    switch(title){
      case 'Landing Page Designs': return 'bg-gray-700';
      case 'Meeting Page Designs': return 'bg-red-400';
      case 'UI/UX Designs': return 'bg-pink-400';
      case 'Development Tasks': return 'bg-blue-500';
      case 'Bug Fixes': return 'bg-orange-400';
      case 'Client Reviews': return 'bg-green-500';
      case 'Research': return 'bg-purple-500';
      case 'Marketing': return 'bg-yellow-500';
      case 'Content Writing': return 'bg-teal-500';
      case 'Testing & QA': return 'bg-cyan-500';
      default: return 'bg-gray-400';
    }
  }

  const getIcon = (title) => {
    switch(title){
      case 'Landing Page Designs': return <PencilLine />;
      case 'Meeting Page Designs': return <Video />;
      case 'UI/UX Designs': return <Palette />;
      case 'Development Tasks': return <Code />;
      case 'Bug Fixes': return <Bug />;
      case 'Client Reviews': return <Users />;
      case 'Research': return <Search />;
      case 'Marketing': return <Megaphone />;
      case 'Content Writing': return <PenLine />;
      case 'Testing & QA': return <TestTube />;
      default: return <PencilLine />;
    }
  }

  const color = getColor(title);
  const icon = getIcon(title);

  return (
    <div className={`transition-all duration-300 cursor-pointer w-56 gap-3 rounded-3xl p-4 flex flex-col
      ${active ? 'bg-[#7F56D9] text-white scale-110' : 'bg-white text-black scale-95'}`}>

      <div className='flex justify-start'>
        <div className={`${color} w-12 h-12 text-white rounded-full flex items-center justify-center p-3`}>
          {icon}
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <h3 className='font-medium text-xl'>{title}</h3>
        <p className={`font-normal text-sm ${active ? 'text-gray-300' : 'text-gray-500'}`}>
          {projects} projects
        </p>
      </div>

      <div className='flex flex-col gap-3 py-2'>
        <div className='flex'>
          <img className='object-cover w-8 h-8 rounded-full -ml-1 first:ml-0 border-2 border-white' src="https://images.pexels.com/photos/8145333/pexels-photo-8145333.jpeg" alt="" />
          <img className='object-cover w-8 h-8 rounded-full -ml-2 border-2 border-white' src="https://images.pexels.com/photos/7550826/pexels-photo-7550826.jpeg" alt="" />
          <img className='object-cover w-8 h-8 rounded-full -ml-2 border-2 border-white' src="https://images.pexels.com/photos/6964066/pexels-photo-6964066.jpeg" alt="" />
          <img className='object-cover w-8 h-8 rounded-full -ml-2 border-2 border-white' src="https://images.pexels.com/photos/8374304/pexels-photo-8374304.jpeg" alt="" />
        </div>

        <div className='flex flex-col gap-1'>
          <div className={`w-full rounded-full h-1.5 ${active ? 'bg-gray-300' : 'bg-[#c9c9c9]'}`}>
            <div className={`h-1.5 rounded-full ${active ? 'bg-white' : 'bg-[#7F56D9]'}`} style={{ width: '70%' }}></div>
          </div>
          <div className='flex justify-between'>
            <p className={`text-sm ${active ? 'text-gray-200' : 'text-gray-500'}`}>Progress</p>
            <p className={`text-sm ${active ? 'text-gray-200' : 'text-gray-500'}`}>70%</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card