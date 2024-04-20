import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Sidebar from '@/components/Sidebar';


export default function Home() {

  return (
    <main className="flex flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
        <div className='grid grid-cols-3 gap-2 my-2'>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>Timeframe: All-time </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>Timeframe: All-time </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>Timeframe: All-time </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>

        </div>
        <div className='grid grid-cols-2 gap-4 '>
          {/* 1st section */}
          <div className='col-span-2 lg:col-span-1 '>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              <div className='bg-white rounded-xl p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
              <div className='bg-white rounded p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
              <div className='bg-white rounded p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
              <div className='bg-white rounded-xl p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
              <div className='bg-white rounded p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
              <div className='bg-white rounded p-3'>
                <p>Active Users</p><br/><br/>
                <p>27/50</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-2 md:col-span-1'>
gf
          </div>

          {/* 2nd section */}
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1'>
          </div>
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1'>
          </div>

          {/*3rd section */}
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1'>
          </div>
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1'>
          </div>
        </div>
        

      </div>
    </main>
  );
}


