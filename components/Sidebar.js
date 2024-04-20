import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SIDE_LINKS, DESIGNS } from '../constants'


const Sidebar = () => {
  return (
    <aside className='hidden lg:block basis-1/5 bg-white '>
        <header className='flex items-center space-x-2 p-2 m-2'>
          <Image className='' src='/lollykrown.svg' width={40} height={40} alt='Logo'/>
          <h1 className='font-bold text-lg md:text-xl'>Lollykrown</h1>
        </header>
        <section className='px-3 py-2'>
        <p className='text-lg mb-3 text-white bg-btncolor-800 rounded my-2 p-2'>Designs</p>
          <ul className='text-slate-600'>
            {
              DESIGNS.map((link)=> (
                <Link href={`/${link.name ==='e-commerce'?'/':link.name}`}  key={link.id}>
                <li className='sidelinks'>
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
              SIDE_LINKS.map((link)=> (
                <Link href={`/${link.name ==='dashboard'?'/':link.name}`}  key={link.id}>
                <li className='sidelinks'>
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
      </aside>
  )
}

export default Sidebar