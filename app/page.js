'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ProgressBar, LineChart, Circle, BarChart, CurlyLineChart, RBarChart } from '../utils/charts'

import products from '../utils/products'
import Sidebar from '@/components/Sidebar';
import { Tabs, Tab } from '../utils/tabs'
import { TAB_DATA } from '@/constants';
import Table from '@/utils/table';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();


  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 px-3 py-2 grid grid-cols-3 gap-4 pr-6'>
        <input className='col-span-3 mt-1 w-full p-2' placeholder='search '/>
        
        {/* 1st section */}
        <div className=' bg-white flex pt-3 col-span-3 md:col-span-1 justify-center space-x-5'>
          <div className=' p-3 '>
            <p className='text-base'>Congratulations Kay 🎉</p>
            <p className='text-xs text-slate-500 '>Best seller of the month</p>
            <p className='text-xl mt-3 py-1 text-btncolor-main'>$48.9k</p>
            <button className='btn mb-2' onClick={() => router.push('/sales')}>view sales</button>
          </div>
          <Image className=''src='/thumbs.svg' width={116} height={148} />
        </div>
        <div className='col-span-3 md:col-span-2 px-3 bg-white md:flex md:flex-col justify-between py-4'>
          <div className='flex justify-between mt-2'>
            <p className='text-base'>Statistics</p>
            <p className='text-xs text-slate-400 '>Updated 1 month ago</p>
          </div>
          <div className='my-4 flex justify-between flex-wrap'>
            <div className='flex space-x-3 my-2'>
              <svg className="w-9 h-9 self-center bg-btncolor-300 p-1.5 rounded-full stroke-btncolor-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
              <div>
                <p className='text-base '>230k</p>
                <p className='text-xs text-slate-500 '>Sales</p>
              </div>
            </div>
            <div className='flex space-x-3 my-2'>
              <svg className="w-9 h-9 self-center bg-cyan-100 p-1.5 rounded-full stroke-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00CFE8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <div>
                <p className='text-base'>8,549k</p>
                <p className='text-xs text-slate-500 '>Customers</p>
              </div>
            </div>
            <div className='flex space-x-3 my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 self-center bg-red-200 p-1.5 rounded-full stroke-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <div>
                <p className='text-base'>1,423</p>
                <p className='text-xs text-slate-500 '>Products</p>
              </div>
            </div>
            <div className='flex space-x-3 mr-8 my-2'>
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
        {/* 2nd section */}
        <div className='col-span-3 md:col-span-1 grid grid-cols-2 lg:gap-4'>
            <div className=' bg-white px-3 py-2 mb-4 lg:mb-0' >
                  <p className='text-base mt-2 text-slate-500'>$82.5k</p>
                  <p className='text-xs text-slate-400 mb-3'>Expenses</p>
                  <div className=''>
                    <ProgressBar percent={69}/>
                    <p className='text-xs text-slate-400 mb-3 text-center'>
                      $21k Expenses more than last month</p>
                  </div>
            </div>
            <div className=' bg-white px-3 py-2 ml-4 lg:ml-0 mb-4 lg:mb-0'>
                <p className='text-base mt-2 text-slate-500'>Profit</p>
                <p className='text-xs text-slate-400 mb-3'>Last Month</p>
                <div className=''>
                  <div className='h-16 w-28'><LineChart /></div>
                  <div className='flex justify-between'>
                    <p className='text-xl'>624k</p>
                    <p className='text-xs text-green-main self-center'>+8.24%</p>
                  </div>
                </div>
            </div>
            <div className='col-span-3 md:col-span-2 bg-white px-3 py-2 flex justify-between'>
            <div>
              <p className='text-base mt-2 text-slate-500'>Generated Leads</p>
              <p className='text-xs text-slate-400 mb-3'>Monthly report</p>
              <p className='text-xl mt-3 py-1'>4,350</p>
              <div className='flex'>
                <svg className="w-4 h-4 self-end text-green-main" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
                <p className='text-xs text-green-main self-center'>15.8%</p>
              </div>
            </div>
            <Circle percent={184}/>
          </div>
        </div>

        <div className='col-span-3 md:col-span-2 md:grid md:grid-cols-3'>
          <div className='col-span-3 md:col-span-2 bg-white p-3 mb-2 md:mb-0 border-r-2'>
            <div className='flex justify-between mt-2 '>
              <p className='text-base'>Revenue Report</p>
              <div className='flex space-x-3'>
                <p className='text-xs text-slate-400'><span className='text-btncolor-main text-xl leading-none'>⦿ &nbsp;</span>Earnings</p>
                <p className='text-xs text-slate-400'><span className='text-[#FF9F43] text-xl leading-none'>⦿ &nbsp;</span>Expenses</p>
              </div>
            </div>
            <BarChart />
          </div>
          <div className='col-span-3 md:col-span-1 bg-white p-3 flex flex-col place-items-center justify-center'>
            <form className='my-2'>
              <input className='border border-btncolor-main focus:outline-none focus:border-btncolor-main
              rounded px-1 focus:border-2' type="number" min="2020" max="2024" step="1" placeholder="2022" />
            </form>
            <p className='text-xl mt-3 py-1 '>$25,825</p>
            <p className='text-xs text-slate-400 '>Budget: $56,800</p>
            <CurlyLineChart color={'#7367f0'}/>
            <CurlyLineChart color={'#DBDADE'}/>
            <button className='btn text-sm mt-2' onClick={() => router.push('/report')}>Increase budget</button>
          </div>
        </div>
        {/* 3rd section */}
        <div className=' bg-white p-3 col-span-3 md:col-span-1'>
          <div className=' bg-white flex justify-between'>
            <p className='text-base mt-2 text-slate-500'>Earning Reports</p>
            <Image className='self-end mb-1' src='/overflow.svg' width={18} height={18}/>
          </div>
          <p className='text-xs text-slate-400 mx-0 mb-3'>Weekly Earnings Overview</p>
          <div className='flex justify-between mb-1'>
            <div className='flex mt-2'>
              <svg className="w-7 h-7 self-center bg-btncolor-300 p-1.5  stroke-btncolor-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className='ml-2 '>
                <p className='text-xs  text-slate-600'>Net Profit</p>
                <p className='text-[11px] text-slate-400 mx-0'>12.4k Sales</p>
              </div>
            </div>
            <div className='flex self-center'>
              <p className=' text-xs mt-2 text-slate-500 mr-4'>$1,619</p>
              <svg className="w-4 h-4 self-end text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              <p className='ml-1 self-end text-[11px] text-slate-400 mx-0'>18.6%</p>
            </div>
          

          </div>
          <div className='flex justify-between mb-1'>
            <div className='flex mt-2'>
              <svg className="w-7 h-7 self-center bg-cyan-200 p-1.5  stroke-cyan-500"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className='ml-2 '>
                <p className='text-xs  text-slate-600'>Total Income</p>
                <p className='text-[11px] text-slate-400 mx-0'>Sales, Affiliation</p>
              </div>
            </div>
            <div className='flex self-center'>
              <p className=' text-xs mt-2 text-slate-500 mr-4'>$3,571</p>
              <svg className="w-4 h-4 self-end text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              <p className='ml-1 self-end text-[11px] text-slate-400 mx-0'>39.6%</p>
            </div>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex mt-2'>
              <svg className="w-7 h-7 self-center bg-stone-200 p-1.5  stroke-stone-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <div className='ml-2 '>
                <p className='text-xs  text-slate-600'>Total Expenses</p>
                <p className='text-[11px] text-slate-400 mx-0'>ADVT, Marketing</p>
              </div>
            </div>
            <div className='flex self-center'>
              <p className=' text-xs mt-2 text-slate-500 mr-4'>$430</p>
              <svg className="w-4 h-4 self-end text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              <p className='ml-1 self-end text-[11px] text-slate-400 mx-0'>52.8%</p>
            </div>
          

          </div>
          <RBarChart position={2}/>
        </div>
        <div className=' bg-white p-3 col-span-3 md:col-span-1'>
          <div className=' bg-white flex justify-between'>
            <p className='text-base mt-2 text-slate-500'>Popular Products</p>
            <Image className='self-end mb-1' src='/overflow.svg' width={18} height={18}/>
          </div>
          <p className='text-xs text-slate-400 mx-0 mb-3'>Total 10.4k Visitors</p>
          <div>
            {products.slice(0,7).map(p=>(
            <div className='flex justify-between my-4' key={p.id}>
              <div className='flex'>
                <Image className='h-8 w-8 mr-2' src={p.image} width={48} height ={48} />
                <div>
                  <p className='text-xs  text-slate-600'>{p.title.length>22?p.title.substring(0,12):p.title} </p>
                  <p className='text-[11px] text-slate-400 mx-0'>Item: {p.category}</p>
                </div>
              </div>
              <p className='text-md  text-slate-600 self-center'>${p.price}</p>
            </div>)
            )}
          </div>
        </div>
        <div className=' bg-white col-span-3 md:col-span-1'>
          <div className=' bg-white flex justify-between px-3 pt-3'>
            <p className='text-base mt-2 text-slate-500 '>Sales by Orders</p>
            <Image className='self-end mb-1' src='/overflow.svg' width={18} height={18}/>
          </div>
          <p className='text-xs text-slate-400 mx-0 mb-3 px-3'>62 deliveries in progress</p>

          <div>
            <Tabs>
              <Tab label="New">
                {
                  TAB_DATA.map((data, i)=> (
                    <div key={i}>
                      <div className='flex'>
                        <div className="px-4 flex flex-col">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className='border-dashed border-l-2 border-slate-300 max-w-px min-h-10 ml-3'></span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-btncolor-main">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                      <div>
                        <div className='mb-4'>
                          <p className='text-xs	text-emerald-500'>{data.sender.title}</p>
                          <p className='text-xs	text-slate-'>{data.sender.name}</p>
                          <p className='text-xs	text-slate-400'>{data.sender.address}</p>
                        </div>
                        <div className='mt-1'>
                          <p className='text-xs	text-btncolor-main'>{data.reciever.title}</p>
                          <p className='text-xs	text-slate-'>{data.reciever.name}</p>
                          <p className='text-xs	text-slate-400'>{data.reciever.address}</p>
                        </div>                    
                      </div>                  
                      </div>
                      <div className='border-slate-300 border-b-2 border-dashed my-3 mx-5'></div>
                  </div>
                  ))
                }
              </Tab>
              <Tab label="Preparing">
                {
                  TAB_DATA.slice(0,1).map((data, i)=> (
                    <div key={i}>
                      <div className='flex'>
                        <div className="px-4 flex flex-col">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className='border-dashed border-l-2 border-slate-300 max-w-px min-h-10 ml-3'></span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-btncolor-main">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                      <div>
                        <div className='mb-4'>
                          <p className='text-xs	text-emerald-500'>{data.sender.title}</p>
                          <p className='text-xs	text-slate-'>{data.sender.name}</p>
                          <p className='text-xs	text-slate-400'>{data.sender.address}</p>
                        </div>
                        <div className='mt-1'>
                          <p className='text-xs	text-btncolor-main'>{data.reciever.title}</p>
                          <p className='text-xs	text-slate-'>{data.reciever.name}</p>
                          <p className='text-xs	text-slate-400'>{data.reciever.address}</p>
                        </div>                    
                      </div>                  
                      </div>
                      <div className='border-slate-300 border-b-2 border-dashed my-3 mx-5'></div>
                  </div>
                  ))
                }
              </Tab>
              <Tab label="Shipping">
                {
                  TAB_DATA.map((data, i)=> (
                    <div key={i}>
                      <div className='flex'>
                        <div className="px-4 flex flex-col">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className='border-dashed border-l-2 border-slate-300 max-w-px min-h-10 ml-3'></span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-btncolor-main">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                      <div>
                        <div className='mb-4'>
                          <p className='text-xs	text-emerald-500'>{data.sender.title}</p>
                          <p className='text-xs	text-slate-'>{data.sender.name}</p>
                          <p className='text-xs	text-slate-400'>{data.sender.address}</p>
                        </div>
                        <div className='mt-1'>
                          <p className='text-xs	text-btncolor-main'>{data.reciever.title}</p>
                          <p className='text-xs	text-slate-'>{data.reciever.name}</p>
                          <p className='text-xs	text-slate-400'>{data.reciever.address}</p>
                        </div>                    
                      </div>                  
                      </div>
                      <div className='border-slate-300 border-b-2 border-dashed my-3 mx-5'></div>
                  </div>
                  ))
                }
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* 4th section */}
        <div className=' bg-white p-3 col-span-3 md:col-span-1 mb-4'>
          <div className=' bg-white flex justify-between'>
            <p className='text-base mt-2 text-slate-500'>Transactions </p>
            <Image className='self-end mb-1' src='/overflow.svg' width={18} height={18}/>
          </div>
          <p className='text-xs text-slate-400 mx-0 mb-3'>Total 58 transaction done in month</p>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg className="w-10 h-10 self-center  bg-btncolor-300 p-3 rounded-md stroke-btncolor-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Wallet</p>
                <p className='text-slate-400 text-[13px]'>Starbucks</p>
              </div>
            </div>
            <p className='self-center text-red-700'>-$75</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 self-center  bg-emerald-200 p-3 rounded-md stroke-emerald-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Cash Deposit</p>
                <p className='text-slate-400 text-[13px]'>Paga</p>
              </div>
            </div>
            <p className='self-center text-emerald-500'>+$975</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 self-center  bg-stone-200 p-3 rounded-md stroke-stone-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Master Card</p>
                <p className='text-slate-400 text-[13px]'>Ordered iPhone 13</p>
              </div>
            </div>
            <p className='self-center text-red-700'>-$699</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 self-center  bg-cyan-200 p-3 rounded-md stroke-cyan-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Bank Transaction</p>
                <p className='text-slate-400 text-[13px]'>Refund</p>
              </div>
            </div>
            <p className='self-center text-emerald-500'>+$175</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg className="w-10 h-10 self-center  bg-btncolor-300 p-3 rounded-md stroke-btncolor-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Wallet</p>
                <p className='text-slate-400 text-[13px]'>Starbucks</p>
              </div>
            </div>
            <p className='self-center text-red-700'>-$75</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 self-center  bg-stone-200 p-3 rounded-md stroke-stone-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Master Card</p>
                <p className='text-slate-400 text-[13px]'>Ordered iPhone 13</p>
              </div>
            </div>
            <p className='self-center text-red-700'>-$699</p>
          </div>
          <div className='flex justify-between mb-3'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 self-center  bg-cyan-200 p-3 rounded-md stroke-cyan-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className='mx-2'>
                <p className='text-[13px]'>Bank Transaction</p>
                <p className='text-slate-400 text-[13px]'>Refund</p>
              </div>
            </div>
            <p className='self-center text-emerald-500'>+$175</p>
          </div>
        </div>   
        <div className=' bg-white p-3 col-span-3 md:col-span-2 mb-4'>
          <Table />
        </div>     
      </div>
    </main>
  );
}


