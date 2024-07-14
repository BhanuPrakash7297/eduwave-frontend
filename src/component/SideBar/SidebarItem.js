import { dividerClasses } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SidebarItem = ({href,icon:Icon,label}) => {
       
    const pathname=useLocation().pathname;
    const navigate=useNavigate();
    const isActive=(
         pathname===href || pathname.startsWith(`${href}/`)
    )

    const onClick=()=>{
        navigate(href);
    }

    console.log(isActive)

  return (
    <button onClick={onClick} type='button' className={`flex items-center gap-x-2 text-slate-500 text-sm
    font-[500] pl-6 transition-all hover:text-slate-600
    hover:bg-slate-300/20 ${isActive?'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700':''}`}>
        <div className='flex items-center gap-x-2 py-4'>
        <Icon size={22} className={`text-slate-500 ${isActive?'text-sky-700':''}`}/>
        {label}
        </div>
        <div className={`ml-auto opacity-0 border-2 border-sky-700 h-full transition-all ${isActive?'opacity-100':''}`}>

        </div>
    </button>
  )
}

export default SidebarItem;



