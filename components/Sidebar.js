'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SIDE_LINKS, DESIGNS } from '../constants'
import { usePathname } from 'next/navigation'

const NavLinks = ({ path, onNavigate }) => (
  <>
    <section className='px-3 py-2'>
      <p className='text-lg mb-3 text-white bg-btncolor-800 rounded my-2 p-2'>Designs</p>
      <ul className='text-slate-600'>
        {
          DESIGNS.map((link) => (
            <Link href={`/${link.name}`} key={link.id} onClick={onNavigate}>
              <li className={`${(link.name === 'e-commerce' && path === '/') || path.includes(link.name) ?
                'p-2 bg-btncolor-300 scale-105 text-btncolor-main flex justify-between rounded cursor-pointer' :
                'sidelinks'}`}>
                <div className='flex space-x-2 items-center capitalize'>
                  {link.icon}&nbsp;
                  {link.name}
                </div>
                {link.arrow}
              </li>
            </Link>
          ))
        }
      </ul>
    </section>
    <section className='px-3 py-2'>
      <p className='text-lg mb-3 text-white bg-btncolor-800 rounded my-2 p-2'>Menu</p>
      <ul className='text-slate-600'>
        {
          SIDE_LINKS.map((link) => (
            <Link href={`/${link.name}`} key={link.id} onClick={onNavigate}>
              <li className={`${path.includes(link.name) && link.name !== 'e-commerce' ?
                'p-2 bg-btncolor-300 scale-105 text-btncolor-main flex justify-between rounded cursor-pointer' :
                'sidelinks'}`}>
                <div className='flex space-x-2 items-center capitalize'>
                  {link.icon}&nbsp;
                  {link.name}
                </div>
                {link.arrow}
              </li>
            </Link>
          ))
        }
      </ul>
    </section>
  </>
)

const Sidebar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* mobile top bar */}
      <div className='lg:hidden flex items-center justify-between bg-white px-4 py-3 sticky top-0 z-40 shadow-sm'>
        <div className='flex items-center space-x-2'>
          <Image src='/lollykrown.svg' width={32} height={32} alt='Logo' />
          <h1 className='font-bold text-lg'>Lollykrown</h1>
        </div>
        <button aria-label='Open menu' onClick={() => setOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className='lg:hidden fixed inset-0 z-50'>
          <div className='absolute inset-0 bg-black/40' onClick={() => setOpen(false)}></div>
          <aside className='absolute left-0 top-0 h-full w-72 bg-white overflow-y-auto shadow-xl'>
            <header className='flex items-center justify-between p-4'>
              <div className='flex items-center space-x-2'>
                <Image src='/lollykrown.svg' width={32} height={32} alt='Logo' />
                <h1 className='font-bold text-lg'>Lollykrown</h1>
              </div>
              <button aria-label='Close menu' onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </header>
            <NavLinks path={path} onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* desktop sidebar */}
      <aside className='hidden lg:block basis-1/5 bg-white'>
        <header className='flex items-center space-x-2 p-2 m-2'>
          <Image src='/lollykrown.svg' width={40} height={40} alt='Logo' />
          <h1 className='font-bold text-lg md:text-xl'>Lollykrown</h1>
        </header>
        <NavLinks path={path} />
      </aside>
    </>
  )
}

export default Sidebar
