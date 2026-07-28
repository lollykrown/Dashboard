'use client'
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar';
import users from '@/utils/users'
import products from '@/utils/products'

const STATUSES = ['Paid', 'Pending', 'Overdue'];
const STATUS_STYLES = {
  Paid: 'bg-green-100 text-green-main',
  Pending: 'bg-orange-100 text-orange-500',
  Overdue: 'bg-red-100 text-red-500',
};

const INVOICES = users.map((u, i) => ({
  id: `INV-${String(3200 + i).padStart(4, '0')}`,
  client: `${u.name.firstname} ${u.name.lastname}`,
  email: u.email,
  item: products[i % products.length].title,
  amount: (products[i % products.length].price * ((i % 3) + 1)).toFixed(2),
  date: `2024-0${(i % 6) + 1}-1${i % 9}`,
  status: STATUSES[i % 3],
}));

export default function Invoices() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? INVOICES : INVOICES.filter(inv => inv.status === filter);
  const total = INVOICES.reduce((sum, inv) => sum + Number(inv.amount), 0);
  const paid = INVOICES.filter(i => i.status === 'Paid').reduce((sum, inv) => sum + Number(inv.amount), 0);
  const pending = total - paid;

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      <Sidebar />
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <div className='flex justify-between items-center my-2'>
          <h1 className='text-xl font-bold'>Invoices</h1>
          <button className='btn text-sm'>+ New invoice</button>
        </div>

        <div className='grid grid-cols-3 gap-4 mb-4'>
          <div className='bg-white rounded-xl p-4 col-span-3 sm:col-span-1'>
            <p className='text-xs text-slate-400'>Total invoiced</p>
            <p className='text-xl font-bold'>${total.toFixed(2)}</p>
          </div>
          <div className='bg-white rounded-xl p-4 col-span-3 sm:col-span-1'>
            <p className='text-xs text-slate-400'>Paid</p>
            <p className='text-xl font-bold text-green-main'>${paid.toFixed(2)}</p>
          </div>
          <div className='bg-white rounded-xl p-4 col-span-3 sm:col-span-1'>
            <p className='text-xs text-slate-400'>Outstanding</p>
            <p className='text-xl font-bold text-orange-500'>${pending.toFixed(2)}</p>
          </div>
        </div>

        <div className='flex space-x-2 mb-3'>
          {['All', ...STATUSES].map(s => (
            <button key={s}
              onClick={() => setFilter(s)}
              className={`text-xs px-3 py-1.5 rounded-full ${filter === s ?
                'bg-btncolor-main text-white' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>
              {s}
            </button>
          ))}
        </div>

        <div className='bg-white rounded-xl overflow-x-auto mb-4'>
          <table className='w-full min-w-[720px]'>
            <thead>
              <tr className='text-left text-xs text-slate-400 border-b border-slate-100'>
                <th className='p-4 font-normal'>Invoice</th>
                <th className='p-4 font-normal'>Client</th>
                <th className='p-4 font-normal'>Item</th>
                <th className='p-4 font-normal'>Date</th>
                <th className='p-4 font-normal text-right'>Amount</th>
                <th className='p-4 font-normal'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-50'>
              {filtered.map(inv => (
                <tr key={inv.id} className='hover:bg-slate-50 cursor-pointer'>
                  <td className='p-4 text-sm text-btncolor-main font-medium'>{inv.id}</td>
                  <td className='p-4'>
                    <p className='text-sm capitalize'>{inv.client}</p>
                    <p className='text-xs text-slate-400'>{inv.email}</p>
                  </td>
                  <td className='p-4 text-sm text-slate-600'>{inv.item.length > 28 ? `${inv.item.substring(0, 28)}…` : inv.item}</td>
                  <td className='p-4 text-sm text-slate-600'>{inv.date}</td>
                  <td className='p-4 text-sm text-slate-700 text-right font-medium'>${inv.amount}</td>
                  <td className='p-4'>
                    <span className={`text-xs px-2 py-1 rounded-full ${STATUS_STYLES[inv.status]}`}>{inv.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
