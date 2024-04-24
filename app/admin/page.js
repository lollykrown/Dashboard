'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Sidebar from '@/components/Sidebar';
import { Lines, PieChart, SBarChart} from '@/utils/charts';
import { CheckedTable } from '@/utils/table';

export default function Admin() {

  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
  
        <div className=' gap-4'>
          {/* 1st section */}
            <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-4 py-4 my-2'>
                <div className='bg-white rounded-lg px-4 py-5 flex justify-start '>
                  <svg className="w-12 h-12 p-3 bg-slate-200 text-purple-600 rounded-3xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                  <div className='ml-2'>
                    <p className='text-sm text-slate-500'>Earnings</p>
                    <p className='text-lg font-bold'>$350.4</p>
                  </div>                  
                </div>
                <div className='bg-white rounded-lg px-4 py-5 flex justify-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className='w-12 h-12 p-3 bg-slate-200 text-purple-600 rounded-3xl'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  <div className='ml-2'>
                    <p className='text-sm text-slate-500'>Spent this month</p>
                    <p className='text-lg font-bold'>$642.39</p>
                  </div>                  
                </div>
                <div className='bg-white rounded-lg px-4 py-2'>
                  <p className='text-sm text-slate-500'>Sales</p>
                  <p className='text-lg font-bold'>$642.39</p>
                  <small className='text-s text-slate-500'><span className='text-green-500'>+23% </span>since last month</small>
                </div>
                <div className='bg-white rounded-lg px-4 py-5 flex justify-start md:justify-around'>
                  <div className='ml-2'>
                    <p className='text-sm text-slate-500'>Your balance</p>
                    <p className='text-lg font-bold'>$1,000</p>
                  </div>  
                  <div className='flex'>
                    <Image src='/us.png' width={50} height={50} />  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>              
                </div>  
                <div className='bg-white rounded-lg px-4 py-5 flex justify-start md:justify-around'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className='w-12 h-12 p-3 bg-sky-400 text-white rounded-3xl'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <div className='ml-2'>
                    <p className='text-sm text-slate-500'>New Tasks</p>
                    <p className='text-lg font-bold'>154</p>
                  </div>                  
                </div>              
                <div className='bg-white rounded-lg px-4 py-5 flex justify-start md:justify-around'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 p-3 bg-slate-200 text-violet-600 rounded-3xl">
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                    <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                  </svg>

                  <div className='ml-2'>
                    <p className='text-sm text-slate-500'>Total Projects</p>
                    <p className='text-lg font-bold'>2935</p>
                  </div>                  
                </div>              

            </div>
          {/* 2nd section */}
          <div className='grid grid-cols-2 gap-4 my-2'>
                <div className='bg-white rounded-md col-span-2 lg:col-span-1 grid grid-cols-4 p-3'>
                  <div className='col-span-1'>
                    <p className='bg-slate-200 text-slate-500 px-2 py-1 text-xs w-max mb-4'>This month</p>
                    <p className='font-bold text-2xl'>$37.5</p>
                    <p className=' text-xs'>Total spent</p>
                    <p className='text-green-600 text-xs mt-3'>On Track</p>

                  </div>
                  <div className='col-span-3 px-3 pb-3 pt-5'>
                    <Lines />
                  </div>
                </div>
                <div className='bg-white rounded-md col-span-2 lg:col-span-1'>
                  <SBarChart />
                </div>
            </div>     
          {/*3rd section */}
          <div className='grid grid-cols-2 gap-4 my-4'>
                <div className='bg-white rounded-md col-span-2 lg:col-span-1 '>
                  <CheckedTable />
                </div>
                <div className='bg-white rounded-md col-span-2 p-3 lg:col-span-1'>
                  <PieChart />
                </div>
            </div>  
        </div>
    

        

      </div>
    </main>
  );
}


