import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#7F56D9] w-full rounded-t-4xl pt-10 px-15 mt-10 text-white'>
        <div className='flex items-centre justify-between'>
            <div className='flex flex-col justify-center gap-3 w-1/4'>
                <h2 className='font-semibold text-2xl'>TODO App</h2>
                <p className='font-light text-lg'>A simple task manager that helps you organize your daily activities. You can add, complete, and delete tasks to stay productive.</p>
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='font-semibold text-2xl'>Product</h2>
                <div>
                    <p className='font-light text-lg'>Features</p>
                    <p className='font-light text-lg'>Changelog</p>
                    <p className='font-light text-lg'>Roadmap</p>
                </div>
                
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='font-semibold text-2xl'>Support</h2>
                <div>
                    <p className='font-light text-lg'>Help Centre</p>
                    <p className='font-light text-lg'>Contact Us</p>
                    <p className='font-light text-lg'>FAQs</p>
                </div>
                
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='font-semibold text-2xl'>Legal</h2>
                <div>
                    <p className='font-light text-lg'>Privacy Policy</p>
                    <p className='font-light text-lg'>Terms of service</p>
                    <p className='font-light text-lg'>Cookie Policy</p>
                </div>
                
            </div>
        </div>

        <div className='flex items-center justify-center py-5'>
            <p className='font-light text-lg'>
                made with love ❤️ by Abhyanshu
            </p>
        </div>
        

        
    </div>
  )
}

export default Footer