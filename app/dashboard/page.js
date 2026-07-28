'use client'
import React from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import ProductImage from '@/components/ProductImage';
import { BarChart, Lines, PieChart, CurlyLineChart } from '@/utils/charts';
import products from '@/utils/products'
import users from '@/utils/users'

const STATS = [
  { label: 'Total Revenue', value: '$56,945', change: '+12.5%', up: true },
  { label: 'Total Orders', value: '2,340', change: '+8.2%', up: true },
  { label: 'Active Customers', value: '8,549', change: '+3.1%', up: true },
  { label: 'Refunds', value: '$1,204', change: '-2.4%', up: false },
];

export default function Dashboard() {

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <div className='flex justify-between items-center my-2'>
          <h1 className='text-xl font-bold'>Dashboard</h1>
          <p className='text-xs text-slate-400'>Overview of your store</p>
        </div>

        {/* stat cards */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
          {STATS.map(s => (
            <div key={s.label} className='bg-white rounded-xl p-4'>
              <p className='text-xs text-slate-400'>{s.label}</p>
              <p className='text-xl font-bold my-1'>{s.value}</p>
              <p className={`text-xs ${s.up ? 'text-green-main' : 'text-red-500'}`}>{s.change} vs last month</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {/* revenue chart */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-4'>
            <div className='flex justify-between'>
              <p className='font-bold'>Revenue Report</p>
              <div className='flex space-x-3'>
                <p className='text-xs text-slate-400'><span className='text-btncolor-main text-xl leading-none'>⦿ &nbsp;</span>Earnings</p>
                <p className='text-xs text-slate-400'><span className='text-[#FF9F43] text-xl leading-none'>⦿ &nbsp;</span>Expenses</p>
              </div>
            </div>
            <BarChart />
          </div>
          {/* sales breakdown */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-1 p-4'>
            <p className='font-bold mb-2'>Sales by Category</p>
            <PieChart title='' labels={['Clothing', 'Electronics', 'Jewelery']} values={[45, 35, 20]} />
          </div>
          {/* spend trend */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-4'>
            <p className='font-bold mb-2'>Total Spent</p>
            <Lines />
          </div>
          {/* recent customers */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-1 p-4'>
            <p className='font-bold mb-3'>Recent Customers</p>
            {users.slice(0, 5).map(user => (
              <div className='flex justify-between my-3' key={user.id}>
                <div className='flex'>
                  <Image className='mr-2 rounded-full' src='/thomas.png' width={36} height={36} alt='person' />
                  <div>
                    <p className='text-sm capitalize'>{`${user.name.firstname} ${user.name.lastname}`}</p>
                    <p className='text-slate-400 text-xs'>{user.email}</p>
                  </div>
                </div>
                <CurlyLineChart color={user.id % 2 === 0 ? '#28c76f' : '#7367f0'} />
              </div>
            ))}
          </div>
          {/* top products */}
          <div className='bg-white rounded-xl col-span-3 p-4 mb-4'>
            <p className='font-bold mb-3'>Best Selling Products</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              {products.slice(0, 6).map(p => (
                <div key={p.id} className='text-center'>
                  <ProductImage className='h-20 w-20 mx-auto object-contain mb-2' src={p.image} width={80} height={80} alt='product' />
                  <p className='text-xs text-slate-600'>{p.title.length > 24 ? `${p.title.substring(0, 24)}…` : p.title}</p>
                  <p className='text-sm font-semibold text-btncolor-main'>${p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
