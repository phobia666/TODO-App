import React from 'react'
import { LayoutGrid, ChartPie, CalendarDays, Settings, Search } from 'lucide-react'

const Header = ({open}) => {

  return (
    <div className={`w-full px-8 py-5 flex justify-between`}>

        <div className='flex items-center justify-center gap-5'>
            <img className='object-co   ver w-20 h-20 rounded-full shadow-md shadow-gray-400' src="ab.jpg" alt="" />
            <div>
                <h3 className='font-semibold text-xl tracking-wide '>Abhyanshu Shah</h3>
                <p className='font-normal text-s tracking-normal text-gray-400'>39 tasks today</p>
            </div>
        </div>

        <div className='flex items-center gap-20 bg-white rounded-3xl shadow-xl py-5 px-15'>
            <LayoutGrid size={36} className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>
            <ChartPie className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110' />
            <CalendarDays className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>
            <Settings className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>
            
        </div>

        <div className='bg-white shadow-xl gap-3 w-[20%] rounded-3xl flex items-center py-2 px-5'>
            <div className=' cursor-pointer w-12 h-12 rounded-full border-1 border-gray-400 p-2 flex items-center justify-center transition-transform duration-200 hover:scale-115 group'>
                <Search className='transition-transform duration-200 group-hover:scale-85'/>
            </div>
            <input
            className='border-0 outline-none focus:outline-none focus:ring-0'
            type="text"
            placeholder='Search task..'/>
        </div>
    </div>
  )
}

export default Header