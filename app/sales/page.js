'use client'
import React from 'react'

import Sidebar from '@/components/Sidebar';
import {
  GoogleLineChart, MapChart, TotalRevenueChart,
  CustomerSatisfactionChart, TargetRealityChart, VolumeServiceChart
} from '@/utils/charts';

const SALES_CARDS = [
  {
    id: 1,
    value: '$1k',
    title: 'Total Sales',
    change: '+8% from yesterday',
    bg: 'bg-[#FFE2E5]',
    iconBg: 'bg-[#FA5A7D]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
      </svg>
    ),
  },
  {
    id: 2,
    value: '300',
    title: 'Total Order',
    change: '+5% from yesterday',
    bg: 'bg-[#FFF4DE]',
    iconBg: 'bg-[#FF947A]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm-2.25 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm-2.25 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    value: '5',
    title: 'Product Sold',
    change: '+1.2% from yesterday',
    bg: 'bg-[#DCFCE7]',
    iconBg: 'bg-[#3CD856]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
  },
  {
    id: 4,
    value: '8',
    title: 'New Customers',
    change: '+0.5% from yesterday',
    bg: 'bg-[#F3E8FF]',
    iconBg: 'bg-[#BF83FF]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
      </svg>
    ),
  },
];

const TOP_PRODUCTS = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: '#0095FF', track: '#CDE7FF' },
  { id: '02', name: 'Disney Princess Pink Bag 18', popularity: 29, color: '#00E096', track: '#8CFAC7' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: '#884DFF', track: '#C5A8FF' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: '#FF8F0D', track: '#FFD5A4' },
];

const COUNTRY_SALES = [
  { country: 'Canada', percent: 85, color: '#FFA800' },
  { country: 'Brazil', percent: 61, color: '#F64E60' },
  { country: 'Nigeria', percent: 74, color: '#6993FF' },
  { country: 'Germany', percent: 52, color: '#00AB9A' },
];

export default function Sales() {

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>

        <div className='grid grid-cols-7 gap-4'>
          {/* 1st section */}
          <div className='bg-white rounded-xl col-span-7 md:col-span-4 p-5'>
            <div className='flex justify-between mb-4'>
              <div>
                <p className='font-bold text-lg'>Today&apos;s Sales</p>
                <p className='text-xs text-slate-400'>Sales Summary</p>
              </div>
              <button className='flex items-center self-start border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-50'>
                <svg className="w-3.5 h-3.5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
                Export
              </button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
              {SALES_CARDS.map(card => (
                <div key={card.id} className={`${card.bg} rounded-2xl p-3`}>
                  <div className={`${card.iconBg} w-9 h-9 rounded-full flex items-center justify-center mb-2`}>
                    {card.icon}
                  </div>
                  <p className='font-bold text-lg'>{card.value}</p>
                  <p className='text-sm text-slate-600 mb-1'>{card.title}</p>
                  <p className='text-[11px] text-blue-600'>{card.change}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-white col-span-7 rounded-xl md:col-span-3 py-3'>
            <p className='font-bold ps-5'>Visitor Insights</p>
            <GoogleLineChart/>
          </div>


          {/* 2nd section */}
          <div className='bg-white rounded-xl col-span-7 md:col-span-3 p-4'>
            <p className='font-bold mb-3'>Total Revenue</p>
            <TotalRevenueChart />
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 p-4 flex flex-col'>
            <p className='font-bold mb-3'>Customer Satisfaction</p>
            <CustomerSatisfactionChart />
            <div className='flex justify-around border-t border-slate-100 pt-3 mt-auto'>
              <div className='text-center'>
                <p className='text-xs text-slate-400'><span className='text-[#0095FF] text-base leading-none'>⦿</span> Last Month</p>
                <p className='text-sm font-semibold'>$3,004</p>
              </div>
              <div className='border-l border-slate-200'></div>
              <div className='text-center'>
                <p className='text-xs text-slate-400'><span className='text-[#07E098] text-base leading-none'>⦿</span> This Month</p>
                <p className='text-sm font-semibold'>$4,504</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 p-4 flex flex-col'>
            <p className='font-bold mb-3'>Target vs Reality</p>
            <TargetRealityChart />
            <div className='mt-auto pt-3 space-y-2'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <span className='w-7 h-7 rounded-lg bg-[#E2FFF3] flex items-center justify-center mr-2'>
                    <svg className="w-4 h-4 text-[#4AB58E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.5 18a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM8.25 9.75A3.75 3.75 0 0 1 12 6h.75a.75.75 0 0 1 0 1.5H12a2.25 2.25 0 0 0 0 4.5h.75a.75.75 0 0 1 0 1.5H12a3.75 3.75 0 0 1-3.75-3.75Z" />
                      <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1.5A1.5 1.5 0 0 0 4.5 6v12A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5H6Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className='text-xs font-medium'>Reality Sales</p>
                    <p className='text-[11px] text-slate-400'>Global</p>
                  </div>
                </div>
                <p className='text-sm font-semibold text-[#4AB58E]'>8.823</p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <span className='w-7 h-7 rounded-lg bg-[#FFF4DE] flex items-center justify-center mr-2'>
                    <svg className="w-4 h-4 text-[#FFA412]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className='text-xs font-medium'>Target Sales</p>
                    <p className='text-[11px] text-slate-400'>Commercial</p>
                  </div>
                </div>
                <p className='text-sm font-semibold text-[#FFA412]'>12.122</p>
              </div>
            </div>
          </div>

          {/*3rd section */}
          <div className='bg-white rounded-xl col-span-7 md:col-span-3 p-4'>
            <p className='font-bold mb-4'>Top Products</p>
            <table className='w-full'>
              <thead>
                <tr className='text-left text-xs text-slate-400 border-b border-slate-100'>
                  <th className='pb-2 font-normal'>#</th>
                  <th className='pb-2 font-normal'>Name</th>
                  <th className='pb-2 font-normal w-1/3'>Popularity</th>
                  <th className='pb-2 font-normal text-right'>Sales</th>
                </tr>
              </thead>
              <tbody>
                {TOP_PRODUCTS.map(p => (
                  <tr key={p.id} className='text-sm'>
                    <td className='py-3 text-slate-500'>{p.id}</td>
                    <td className='py-3 pr-3 text-slate-600'>{p.name}</td>
                    <td className='py-3 pr-3'>
                      <div className='h-1 rounded-full w-full' style={{backgroundColor: p.track}}>
                        <div className='h-1 rounded-full' style={{width: `${p.popularity}%`, backgroundColor: p.color}}></div>
                      </div>
                    </td>
                    <td className='py-3 text-right'>
                      <span className='text-xs border rounded px-2 py-0.5' style={{color: p.color, borderColor: p.color, backgroundColor: `${p.color}1A`}}>
                        {p.popularity}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 p-4'>
            <p className='font-bold mb-4'>Sales Mapping by Country</p>
            <MapChart />
            <div className='mt-3 space-y-2'>
              {COUNTRY_SALES.map(c => (
                <div key={c.country} className='flex items-center text-xs text-slate-500'>
                  <span className='w-2.5 h-2.5 rounded-full mr-2' style={{backgroundColor: c.color}}></span>
                  <span className='grow'>{c.country}</span>
                  <span>{c.percent}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 p-4 flex flex-col'>
            <p className='font-bold mb-3'>Volume vs Service Level</p>
            <VolumeServiceChart />
            <div className='flex justify-around border-t border-slate-100 pt-3 mt-auto'>
              <div className='text-center'>
                <p className='text-xs text-slate-400'><span className='text-[#0095FF] text-base leading-none'>⦿</span> Volume</p>
                <p className='text-sm font-semibold'>1,135</p>
              </div>
              <div className='border-l border-slate-200'></div>
              <div className='text-center'>
                <p className='text-xs text-slate-400'><span className='text-[#00E096] text-base leading-none'>⦿</span> Services</p>
                <p className='text-sm font-semibold'>635</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
