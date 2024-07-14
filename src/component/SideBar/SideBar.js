import React from 'react'
import SideBarRoutes from './SideBarRoutes';


const SideBar = () => {
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-white shadow-sm'>
        <div className='p-6'>
            <img src={'/images/logo.png'} className='h-[50px] w-[120px]'/>
        </div>

        <div className='flex flex-col w-full'>
           <SideBarRoutes/>
        </div>
    </div>
  )
}




export default SideBar;

