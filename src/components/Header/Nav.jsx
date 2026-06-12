import React from 'react'
import { LayoutGrid, ChartPie, CalendarDays, Settings, Search } from 'lucide-react'

const Nav = () => {
  return (
    <div className='flex items-center justify-center text-black gap-15 lg:gap-20 bg-white rounded-3xl shadow-2xl border-gray-200 border-1 py-3 px-12 h-20'>
   
        <LayoutGrid size={36} className=' cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>
        <ChartPie className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110' />
        <CalendarDays className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>
        <Settings className='cursor-pointer transition-transform duration-250 hover:-translate-y-1 hover:scale-110'/>

    </div>
  )
}

export default Nav