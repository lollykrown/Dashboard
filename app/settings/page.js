'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`w-11 h-6 rounded-full transition-colors relative ${enabled ? 'bg-btncolor-main' : 'bg-slate-300'}`}
    aria-pressed={enabled}
  >
    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${enabled ? 'left-[22px]' : 'left-0.5'}`}></span>
  </button>
);

export default function Settings() {
  const [profile, setProfile] = useState({ name: 'Lollykrown', email: 'hello@lollykrown.dev', company: 'Lollykrown Designs' });
  const [prefs, setPrefs] = useState({ emailNotifs: true, orderAlerts: true, weeklyReport: false, darkMode: false });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <main className="block lg:flex lg:flex-row lg:space-x-4">
      <Sidebar />
      <div className='basis-4/5 px-3 lg:pl-2 py-2 lg:pr-4'>
        <h1 className='text-xl font-bold my-2'>Settings</h1>
        <div className='grid grid-cols-3 gap-4'>
          {/* profile */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-5'>
            <p className='font-bold mb-4'>Profile</p>
            <div className='flex items-center mb-5'>
              <Image className='rounded-full mr-4' src='/thomas.png' width={64} height={64} alt='avatar' />
              <div>
                <button className='btn text-sm'>Upload new photo</button>
                <p className='text-xs text-slate-400 mt-1'>JPG or PNG, max 800KB</p>
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='text-xs text-slate-500 block mb-1'>Full name</label>
                <input className='w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:border-btncolor-main'
                  value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
              </div>
              <div>
                <label className='text-xs text-slate-500 block mb-1'>Email address</label>
                <input className='w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:border-btncolor-main'
                  type='email' value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} />
              </div>
              <div>
                <label className='text-xs text-slate-500 block mb-1'>Company</label>
                <input className='w-full border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:border-btncolor-main'
                  value={profile.company} onChange={e => setProfile({ ...profile, company: e.target.value })} />
              </div>
              <div className='flex items-center space-x-3'>
                <button className='btn text-sm' onClick={handleSave}>Save changes</button>
                {saved && <p className='text-sm text-green-main'>Saved ✓</p>}
              </div>
            </div>
          </div>
          {/* preferences */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-1 p-5 self-start'>
            <p className='font-bold mb-4'>Preferences</p>
            <div className='space-y-4'>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm'>Email notifications</p>
                  <p className='text-xs text-slate-400'>Product and account updates</p>
                </div>
                <Toggle enabled={prefs.emailNotifs} onChange={() => setPrefs({ ...prefs, emailNotifs: !prefs.emailNotifs })} />
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm'>Order alerts</p>
                  <p className='text-xs text-slate-400'>Notify me on new orders</p>
                </div>
                <Toggle enabled={prefs.orderAlerts} onChange={() => setPrefs({ ...prefs, orderAlerts: !prefs.orderAlerts })} />
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm'>Weekly report</p>
                  <p className='text-xs text-slate-400'>Summary every Monday</p>
                </div>
                <Toggle enabled={prefs.weeklyReport} onChange={() => setPrefs({ ...prefs, weeklyReport: !prefs.weeklyReport })} />
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm'>Dark mode</p>
                  <p className='text-xs text-slate-400'>Coming soon</p>
                </div>
                <Toggle enabled={prefs.darkMode} onChange={() => setPrefs({ ...prefs, darkMode: !prefs.darkMode })} />
              </div>
            </div>
          </div>
          {/* danger zone */}
          <div className='bg-white rounded-xl col-span-3 md:col-span-2 p-5 mb-4'>
            <p className='font-bold mb-1 text-red-600'>Danger zone</p>
            <p className='text-xs text-slate-400 mb-3'>Deleting your account is permanent and cannot be undone.</p>
            <button className='border border-red-300 text-red-600 text-sm px-4 py-1.5 rounded-lg hover:bg-red-50'>Delete account</button>
          </div>
        </div>
      </div>
    </main>
  );
}
