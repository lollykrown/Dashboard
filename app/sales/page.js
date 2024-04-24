import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Sidebar from '@/components/Sidebar';


export default function Sales() {

  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
  
        <div className='grid grid-cols-7 gap-4 '>
          {/* 1st section */}
          <div className='bg-white col-span-4 h-60'>
          <div className='grid grid-cols-4 gap-2 content-end'>
              <div className='h-20 bg-orange-400'>
              </div>
              <div className='h-20 bg-orange-300'></div>
              <div className='h-20 bg-orange-300'></div>
              <div className='h-20 bg-orange-300'></div>
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-3  h-60'>
            gf
          </div>


          {/* 2nd section */}
          <div className='bg-white col-span-3 h-60'>

          </div>
          <div className='bg-white rounded-xl col-span-2  h-60'>
            gf
          </div>
          <div className='bg-white rounded-xl col-span-2  h-60'>
            gf
          </div>
          {/*3rd section */}
          <div className='bg-white col-span-3 h-60'>

          </div>
          <div className='bg-white rounded-xl col-span-2  h-60'>
            gf
          </div>
          <div className='bg-white rounded-xl col-span-2  h-60 mb-2'>
            gf
          </div>
        </div>
    

        

      </div>
    </main>
  );
}


