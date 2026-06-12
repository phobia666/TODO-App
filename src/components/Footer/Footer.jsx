import React from 'react'
import Nav from '../Header/Nav'

const Footer = () => {
  return (
    <div className='bg-[#7F56D9] pt-10 px-6 md:px-10 lg:px-16 mt-10 text-white'>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

        
        <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold text-2xl'>TODO App</h2>
            <p className='font-light text-lg'>
                A simple task manager that helps you organize your daily activities.
                You can add, complete, and delete tasks to stay productive.
            </p>
        </div>
        </div>



        <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold text-2xl'>Product</h2>
            <div>
                <p className='font-light text-lg'>Features</p>
                <p className='font-light text-lg'>Changelog</p>
                <p className='font-light text-lg'>Roadmap</p>
            </div>
        </div>
        </div>




        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-3'>
            <h2 className='font-semibold text-2xl'>Support</h2>
            <div>
                <p className='font-light text-lg'>Help Centre</p>
                <p className='font-light text-lg'>Contact Us</p>
                <p className='font-light text-lg'>FAQs</p>
            </div>
            </div>
        </div>



        <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold text-2xl'>Legal</h2>
            <div>
                <p className='font-light text-lg'>Privacy Policy</p>
                <p className='font-light text-lg'>Terms of Service</p>
                <p className='font-light text-lg'>Cookie Policy</p>
            </div>
        </div>
        </div>


    </div>

    <div className='flex items-center justify-center py-5 mt-8 border-t border-white/20'>
        <p className='font-light text-sm md:text-lg text-center'>
            Made with ❤️ by Abhyanshu
        </p>
    </div>

    <div className='lg:hidden w-fit fixed inset-0 z-50 flex items-end py-5 left-1/2 -translate-x-1/2 '>
        <Nav />
    </div>
    
    
</div>
  )
}

export default Footer