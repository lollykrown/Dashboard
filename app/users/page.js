'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import users from '@/utils/users'

export default function Users() {
  const [query, setQuery] = useState('');

  const filtered = users.filter(u =>
    `${u.name.firstname} ${u.name.lastname} ${u.email} ${u.username}`
      .toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      <Sidebar />
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <div className='flex justify-between items-center my-2'>
          <h1 className='text-xl font-bold'>Users</h1>
          <p className='text-xs text-slate-400'>{filtered.length} of {users.length} users</p>
        </div>
        <input
          className='w-full p-2 rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-btncolor-main'
          placeholder='Search users by name, email or username…'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className='bg-white rounded-xl overflow-x-auto mb-4'>
          <table className='w-full min-w-[640px]'>
            <thead>
              <tr className='text-left text-xs text-slate-400 border-b border-slate-100'>
                <th className='p-4 font-normal'>User</th>
                <th className='p-4 font-normal'>Username</th>
                <th className='p-4 font-normal'>Phone</th>
                <th className='p-4 font-normal'>City</th>
                <th className='p-4 font-normal'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-50'>
              {filtered.map(user => (
                <tr key={user.id} className='hover:bg-slate-50'>
                  <td className='p-4'>
                    <div className='flex items-center'>
                      <Image className='mr-3 rounded-full' src='/thomas.png' width={36} height={36} alt='person' />
                      <div>
                        <p className='text-sm capitalize'>{`${user.name.firstname} ${user.name.lastname}`}</p>
                        <p className='text-xs text-slate-400'>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-4 text-sm text-slate-600'>{user.username}</td>
                  <td className='p-4 text-sm text-slate-600'>{user.phone}</td>
                  <td className='p-4 text-sm text-slate-600 capitalize'>{user.address.city}</td>
                  <td className='p-4'>
                    <span className={`text-xs px-2 py-1 rounded-full ${user.id % 3 === 0 ?
                      'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-main'}`}>
                      {user.id % 3 === 0 ? 'Inactive' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className='p-6 text-center text-sm text-slate-400'>No users match your search.</p>}
        </div>
      </div>
    </main>
  );
}
