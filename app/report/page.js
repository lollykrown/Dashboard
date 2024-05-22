import Image from 'next/image';
import React from 'react'

import Sidebar from '@/components/Sidebar';
import { SBarChart, CurlyLineChart } from '@/utils/charts';
import products from '@/utils/products'
import users from '@/utils/users'


export default function Report() {

  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-bold'>Reports</h1>
          <div className='flex self-end'>
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <p className='text-sm text-slate-500 mx-1 cursor-pointer hover:font-semibold'>Download</p>
          </div>
        </div>
        <hr className='my-4'/>
        <div className='grid grid-cols-3 gap-2 my-2'>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>Timeframe: All-time </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>People: All </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='flex justify-between bg-white rounded-lg px-3 py-2 flex-grow-1'>
            <p>Topic: All </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </div>

        </div>
        <div className='grid grid-cols-2 gap-4 '>
          {/* 1st section */}
          <div className='col-span-2 md:col-span-1 mt-2 grid grid-cols-2 md:grid-cols-3 gap-4'>
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
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4 mt-2'>
            <div className='border-b-2 border-slate-200 mb-4'>
              <p className='text-sm pb-1'>Activity</p>
            </div>
            <SBarChart />
          </div>

          {/* 2nd section */}
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4'>
            <p className='text-sm font-bold mb-4 text-slate-500'>Weakest Topics </p>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[19].image} width={56} height={48} alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Food Safety</p>
                <progress className=''  value={54} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>54% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[16].image} width={56} height={48} alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Compliance Basics Procedures </p>
                <progress className=''  value={52} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>52% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[19].image} width={56} height={48}  alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Company Networking</p>
                <progress className=''  value={36} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>36% Correct</p>
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-2 md:col-span-1 p-4'>
            <p className='text-sm font-bold mb-4 text-slate-500'>Strongest Topics </p>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[14].image} width={56} height={48}  alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Food Safety</p>
                <progress className='gr-pro'  value={95} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>95% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[11].image} width={56} height={48}  alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Compliance Basics Procedures </p>
                <progress className='gr-pro'  value={92} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>92% Correct</p>
            </div>
            <div className='flex my-2 py-1'>
                <Image className='grow-0 h-12 w-14 mr-2' src={products[6].image} width={56} height={48}  alt='product item'/>
              <div className='grow'>
                <p className='text-sm'>Company Networking</p>
                <progress className='gr-pro'  value={89} max={100}> </progress>
              </div>
              <p className='grow-0 self-end text-[12px] my-2'>89% Correct</p>
            </div>

          </div>

          {/*3rd section */}
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1 py-4 px-5'>
            <p className='text-sm font-bold mb-4 text-slate-500'>Users Leaderboard </p>
            {users.slice(0,5).map(user => (
              <div className='flex justify-between my-4' key={user.id}>
                <div className='flex'>
                  <Image className=' mr-2' src='/thomas.png' width={40} height={40} alt='person'/>
                  <div>
                    <p className='text-sm capitalize'>{`${user.name.firstname} ${user.name.lastname}`}</p>
                    <p className='text-slate-500 text-[12px]'>637 Points - 89% Correct </p>
                  </div>                
                </div>
                <div className='flex self-center'>
                  <p className='font-bold mr-2 text-md text-slate-600'>{user.id}</p>
                  {user.id%2===0?<svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                  </svg>:
                  <svg className="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                  </svg>}
              
                </div>
              </div>
            ))}
          </div>
          <div className='bg-white rounded-xl h-80 col-span-2 md:col-span-1 py-4 px-5'>
          <p className='text-sm font-bold mb-4 text-slate-500'>Groups Leaderboard </p>
            {users.slice(0,5).map(user => (
              <div className='flex justify-between my-4' key={user.id}>
                <div>
                  <p className='text-sm capitalize'>{`${user.name.firstname} Facility`}</p>
                  <p className='text-slate-500 text-[12px]'>652 Points / User - 97% Correct</p>
                </div>                
                <div className='flex self-center'>
                  <p className='font-bold mr-2 text-md text-slate-600'>{user.id}</p>
                  {user.id%2===0?<svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                  </svg>:
                  <svg className="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                  </svg>}
              
                </div>
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </main>
  );
}

