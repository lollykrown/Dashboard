import React from 'react'
import { FaHome } from "react-icons/fa";
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center bg-slate-400 h-screen flex-col'>
        <h1 className='text-4xl text-center mb-3'>The requested page is currently not available</h1>
        <Link href='/'><p className='text-4xl flex hover:text-white'><FaHome />&nbsp;Go Home</p></Link> 
    </div>
  )
}

export default NotFound