import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SIDE_LINKS } from '../constants'
import { ProgressBar, LineChart, Circle, BarChart } from '../components/charts'

import Chart from 'chart.js/auto';

export default function Home() {
  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <aside className='hidden lg:block basis-1/5 bg-white '>
        <header className='flex items-center space-x-2 p-2 m-2'>
          <Image className='' src='/lollykrown.svg' width={40} height={40} alt='Logo'/>
          <h1 className='font-bold text-lg md:text-xl'>Lollykrown</h1>
        </header>
        <section className='px-3 py-2'>
          <ul className='text-slate-600'>
            {
              SIDE_LINKS.map((link)=> (
                <li className='sidelinks' key={link.id}>
                  <div className='flex space-x-2 items-center capitalize'>
                    {link.icon}
                    <Link href={`/${link.name ==='dashboard'?'/':link.name}`}>{link.name}</Link> 
                  </div>   
                    {link.arrow}
                </li>
              ))
            }
   
          </ul>

        </section>
      </aside>

      {/* main content/dashboard */}
      <section className='basis-4/5 px-3 py-2 grid grid-cols-2 md:grid-cols-3 gap-4'>
        <input className='col-span-3 mt-1 w-full p-2' placeholder='search '/>
        
        <div className=' bg-white flex pt-3'>
          <div className=' p-3 '>
            <p className='text-base'>Congratulations Kay 🎉</p>
            <p className='text-xs text-slate-500 '>Best seller of the month</p>
            <p className='text-xl mt-3 py-1 text-btncolor-main'>$48.9k</p>
            <button className='btn'>view sales</button>
          </div>
          <Image  src='/thumbs.svg' width={116} height={148} />
        </div>
        <div className='md:col-span-2 px-3 bg-white flex flex-col justify-between py-4'>
          <div className='flex justify-between mt-2'>
            <p className='text-base'>Statistics</p>
            <p className='text-xs text-slate-400 '>Updated 1 month ago</p>
          </div>
          <div className='my-4 flex justify-between'>
            <div className='flex space-x-3'>
              <svg className="w-9 h-9 self-center bg-btncolor-300 p-1.5 rounded-full stroke-btncolor-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
              <div>
                <p className='text-base '>230k</p>
                <p className='text-xs text-slate-500 '>Sales</p>
              </div>
            </div>
            <div className='flex space-x-3'>
              <svg className="w-9 h-9 self-center bg-cyan-100 p-1.5 rounded-full stroke-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00CFE8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <div>
                <p className='text-base'>8,549k</p>
                <p className='text-xs text-slate-500 '>Customers</p>
              </div>
            </div>
            <div className='flex space-x-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 self-center bg-red-200 p-1.5 rounded-full stroke-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <div>
                <p className='text-base'>1,423</p>
                <p className='text-xs text-slate-500 '>Products</p>
              </div>
            </div>
            <div className='flex space-x-3 mr-8'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 self-center bg-emerald-100 p-1.5 rounded-full stroke-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div>
                <p className='text-base'>$9745</p>
                <p className='text-xs text-slate-500 '>Revenue</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=''>
          <div className='grid grid-cols-2 gap-4'>
            <div className=' bg-white px-3 py-2'>
                  <p className='text-base mt-2 text-slate-500'>$82.5k</p>
                  <p className='text-xs text-slate-400 mb-3'>Expenses</p>
                  <div className=''>
                    <ProgressBar percent={69}/>
                    <p className='text-xs text-slate-400 mb-3 text-center'>
                      $21k Expenses more than last month</p>
                  </div>
            </div>
            <div className=' bg-white px-3 py-2'>
                <p className='text-base mt-2 text-slate-500'>Profit</p>
                <p className='text-xs text-slate-400 mb-3'>Expenses</p>
                <div className=''>
                  <div className='h-16 w-28'><LineChart /></div>
                  <div className='flex justify-between'>
                    <p className='text-xl'>624k</p>
                    <p className='text-xs text-green-main self-center'>+8.24%</p>
                  </div>
                </div>
            </div>

            <div className='col-span-2 bg-white px-3 py-2 flex justify-between'>
            <div>
              <p className='text-base mt-2 text-slate-500'>Generated Leads</p>
              <p className='text-xs text-slate-400 mb-3'>Monthly report</p>
              <p className='text-xl mt-3 py-1'>4,350</p>
              <p className='text-xs text-green-main self-center'>&#94;15.8%</p>
            </div>
            <Circle percent={184}/>
          </div>
        </div>

        </div>
        <div className='col-span-2 grid grid-cols-3 gap-1'>
          <div className='col-span-2 bg-white p-3'>
            <div className='flex justify-between mt-2 '>
              <p className='text-base'>Revenue Report</p>
              <div className='flex space-x-3'>
                <p className='text-xs text-slate-400'><span className='text-btncolor-main text-xl leading-none'>⦿ &nbsp;</span>Earnings</p>
                <p className='text-xs text-slate-400'><span className='text-[#FF9F43] text-xl leading-none'>⦿ &nbsp;</span>Expenses</p>
              </div>
            </div>
            <BarChart />
          </div>
          <div className='bg-white p-3'>
            fghgfgb
          </div>
        </div>

      </section>
    </main>
  );
}


