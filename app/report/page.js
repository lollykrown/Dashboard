import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Sidebar from '@/components/Sidebar';
import { SBarChart, CurlyLineChart } from '@/utils/charts';
import products from '../../utils/products'


export default function Report() {

  return (
    <main className="block lg:flex lg:flex-row space-x-4">
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
          <div className='col-span-2 lg:col-span-1 mt-2'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-5 text-[12px]'>Active Users</p>
                <p className='text-sm text-slate-500 font-bold'><span className='text-xl text-black'>27</span>/50</p>
                <br/>
              </div>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-5 text-[12px]'>Questions Answered</p>
                <p className='text-xl text-black font-bold'>3,298</p>
                <br/>
              </div>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-5 text-[12px]'>Av. Session Length</p>
                <p className='text-xl text-black font-bold'>2m 34s</p>
                <br/>
              </div>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-4 text-[12px]'>Starting Knowledge</p>
                <p className='text-xl text-black font-bold'>64%</p>
                <CurlyLineChart color={'#2563eb'}/>
              </div>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-4 text-[12px]'>Current Knowledge</p>
                <p className='text-xl text-black font-bold'>86%</p>
                <CurlyLineChart color={'#2563eb'}/>
              </div>
              <div className='bg-white rounded-xl px-3 pb-3 pt-2'>
                <p className='mb-4 text-[12px]'>Knowledge Gain</p>
                <p className='text-xl text-black font-bold'>+34%</p>
                <CurlyLineChart color={'#2563eb'} />
              </div>

            </div>
          </div>
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4 mt-2'>
            <div className='border-b-2 border-slate-200 mb-4'>
              <p className='text-sm pb-1'>Activity</p>
            </div>
            <SBarChart />
          </div>

          {/* 2nd section */}
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4'>
            <p className='text-sm font-bold mb-4'>Weakest Topics </p>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[19].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Food Safety</p>
                <progress className=''  value={74} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>74% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[16].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Compliance Basics Procedures </p>
                <progress className=''  value={52} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>52% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[19].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Company Networking</p>
                <progress className=''  value={36} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>36% Correct</p>
            </div>

          </div>
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4'>
            <p className='text-sm font-bold mb-4'>Strongest Topics </p>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[14].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Food Safety</p>
                <progress className='gr-pro'  value={74} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>74% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[11].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Compliance Basics Procedures </p>
                <progress className='gr-pro'  value={52} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>52% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[6].image} width={56} height={48}/>
              <div className='grow'>
                <p className='text-sm'>Company Networking</p>
                <progress className='gr-pro'  value={36} max={100}> </progress>
              </div>
              <p className='grow-0 self-center text-sm mt-3'>36% Correct</p>
            </div>

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


