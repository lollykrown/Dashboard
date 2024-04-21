import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Sidebar from '@/components/Sidebar';


export default function Admin() {

  return (
    <main className="flex flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
  
        <div className=' gap-4'>
          {/* 1st section */}
            <div className='grid grid-cols-6 gap-4 py-4 my-2'>
                <div className='bg-white rounded-lg h-11'></div>
                <div className='bg-white rounded-lg h-11'></div>
                <div className='bg-white rounded-lg h-11'></div>
                <div className='bg-white rounded-lg h-11'></div>
                <div className='bg-white rounded-lg h-11'></div>
                <div className='bg-white rounded-lg h-11'></div>
            </div>
          {/* 2nd section */}
          <div className='grid grid-cols-2 gap-4 my-2'>
                <div className='bg-white rounded-md h-80'></div>
                <div className='bg-white rounded-md h-80'></div>
            </div>     
          {/*3rd section */}
          <div className='grid grid-cols-2 gap-4 my-4'>
                <div className='bg-white rounded-md h-80'></div>
                <div className='bg-white rounded-md h-80'></div>
            </div>  
        </div>
    

        

      </div>
    </main>
  );
}


