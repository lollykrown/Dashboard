'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar';
import { AnalyticsAreaChart, SBarChart, PieChart, ProgressBar } from '@/utils/charts';

const CHANNELS = [
  { name: 'Organic Search', visitors: '12,480', share: 42, color: '#7367f0' },
  { name: 'Direct', visitors: '7,610', share: 26, color: '#28c76f' },
  { name: 'Social Media', visitors: '5,220', share: 18, color: '#00CFE8' },
  { name: 'Referral', visitors: '2,540', share: 9, color: '#FF9F43' },
  { name: 'Email', visitors: '1,420', share: 5, color: '#EA5455' },
];

export default function Analytics() {

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      <Sidebar />
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <h1 className='text-xl font-bold my-2'>Analytics</h1>

        <div className='grid grid-cols-4 gap-4 mb-4'>
          <div className='bg-white rounded-xl p-4 col-span-2 lg:col-span-1'>
            <p className='text-xs text-slate-400'>Page Views</p>
            <p className='text-xl font-bold'>71.2k</p>
            <p className='text-xs text-green-main'>+18.4%</p>
          </div>
          <div className='bg-white rounded-xl p-4 col-span-2 lg:col-span-1'>
            <p className='text-xs text-slate-400'>Sessions</p>
            <p className='text-xl font-bold'>44.6k</p>
            <p className='text-xs text-green-main'>+11.2%</p>
          </div>
          <div className='bg-white rounded-xl p-4 col-span-2 lg:col-span-1'>
            <p className='text-xs text-slate-400'>Bounce Rate</p>
            <p className='text-xl font-bold'>38.1%</p>
            <p className='text-xs text-red-500'>+2.3%</p>
          </div>
          <div className='bg-white rounded-xl p-4 col-span-2 lg:col-span-1'>
            <p className='text-xs text-slate-400'>Avg. Session</p>
            <p className='text-xl font-bold'>3m 42s</p>
            <p className='text-xs text-green-main'>+0.8%</p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-4'>
            <p className='font-bold mb-2'>Traffic Overview</p>
            <AnalyticsAreaChart />
          </div>
          <div className='bg-white rounded-xl col-span-3 md:col-span-1 p-4'>
            <p className='font-bold mb-3'>Traffic by Channel</p>
            {CHANNELS.map(c => (
              <div key={c.name} className='mb-3'>
                <div className='flex justify-between text-xs mb-1'>
                  <span className='text-slate-600'>{c.name}</span>
                  <span className='text-slate-400'>{c.visitors} · {c.share}%</span>
                </div>
                <div className='h-1.5 rounded-full bg-slate-100'>
                  <div className='h-1.5 rounded-full' style={{ width: `${c.share}%`, backgroundColor: c.color }}></div>
                </div>
              </div>
            ))}
            <div className='mt-6 border-t border-slate-100 pt-4'>
              <p className='text-xs text-slate-400 mb-2 text-center'>Conversion goal</p>
              <ProgressBar percent={73} />
            </div>
          </div>
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-4 mb-4'>
            <p className='font-bold mb-2'>Weekly Activity</p>
            <SBarChart />
          </div>
          <div className='bg-white rounded-xl col-span-3 md:col-span-1 p-4 mb-4'>
            <p className='font-bold mb-2'>Devices</p>
            <PieChart title='' labels={['Mobile', 'Desktop', 'Tablet']} values={[58, 34, 8]} />
          </div>
        </div>
      </div>
    </main>
  );
}
