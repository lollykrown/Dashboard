'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar';

const NOTIFICATIONS = [
  { id: 1, type: 'order', title: 'New order received', detail: 'Order #3210 — Disney Princess Pink Bag 18', time: '2 min ago', unread: true },
  { id: 2, type: 'payment', title: 'Payment successful', detail: '$975 deposited via Paga', time: '25 min ago', unread: true },
  { id: 3, type: 'user', title: 'New customer registered', detail: 'kate hale just created an account', time: '1 hour ago', unread: true },
  { id: 4, type: 'alert', title: 'Low stock warning', detail: 'Apple Smartwatches — only 4 units left', time: '3 hours ago', unread: false },
  { id: 5, type: 'order', title: 'Order shipped', detail: 'Order #3198 is on its way to Lagos', time: '5 hours ago', unread: false },
  { id: 6, type: 'payment', title: 'Refund issued', detail: '$175 refunded to bank account', time: 'Yesterday', unread: false },
  { id: 7, type: 'alert', title: 'Weekly report ready', detail: 'Your sales report for last week is available', time: 'Yesterday', unread: false },
  { id: 8, type: 'user', title: 'Profile updated', detail: 'don romer changed their shipping address', time: '2 days ago', unread: false },
];

const ICONS = {
  order: (
    <span className='w-10 h-10 rounded-full bg-btncolor-300 flex items-center justify-center shrink-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-btncolor-800">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    </span>
  ),
  payment: (
    <span className='w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-emerald-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </span>
  ),
  user: (
    <span className='w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center shrink-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-cyan-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </span>
  ),
  alert: (
    <span className='w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </span>
  ),
};

export default function Notifications() {

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      <Sidebar />
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <div className='flex justify-between items-center my-2'>
          <h1 className='text-xl font-bold'>Notifications</h1>
          <p className='text-sm text-btncolor-main cursor-pointer hover:underline'>Mark all as read</p>
        </div>
        <div className='bg-white rounded-xl divide-y divide-slate-100 mb-4'>
          {NOTIFICATIONS.map(n => (
            <div key={n.id} className={`flex items-start p-4 hover:bg-slate-50 cursor-pointer ${n.unread ? 'bg-btncolor-100/60' : ''}`}>
              {ICONS[n.type]}
              <div className='ml-3 grow'>
                <p className='text-sm font-medium text-slate-700'>{n.title}</p>
                <p className='text-xs text-slate-400'>{n.detail}</p>
              </div>
              <div className='text-right shrink-0'>
                <p className='text-[11px] text-slate-400'>{n.time}</p>
                {n.unread && <span className='inline-block w-2 h-2 rounded-full bg-btncolor-main mt-1'></span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
