import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Sidebar from '@/components/Sidebar';
import { GoogleLineChart, GoogleTable, MapChart } from '@/utils/charts';


export default function Sales() {

  return (
    <main className="block lg:flex lg:flex-row space-x-4">
      {/* left navigation */}
      <Sidebar />

      {/* main content/dashboard */}
      <div className='basis-4/5 pl-2 py-2 pr-4'>
  
        <div className='grid grid-cols-7 gap-4 '>
          {/* 1st section */}
          <div className='bg-white col-span-7 md:col-span-4'>
          <div className='grid grid-cols-4 gap-2'>
              <div className='h-20 bg-orange-400'>
              </div>
              <div className='h-20 bg-orange-300'></div>
              <div className='h-20 bg-orange-300'></div>
              <div className='h-20 bg-orange-300'></div>
            </div>
          </div>
          <div className='bg-white col-span-7 rounded-xl md:col-span-3 py-3'>
            <p className='font-bold ps-5'>Visitor Insights</p>
            <GoogleLineChart/>
          </div>


          {/* 2nd section */}
          <div className='bg-white col-span-7 md:col-span-3 h-60'>

          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2  h-60'>
            gf
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2  h-60'>
            gf
          </div>
          {/*3rd section */}
          <div className='bg-white col-span-7 md:col-span-3 p-3'>
            <p className='font-bold mb-4'>Top Products</p>
            <GoogleTable/>
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 p-3'>
            <p className='font-bold mb-4'>Sales Mapping by Country</p>
            <MapChart />
          </div>
          <div className='bg-white rounded-xl col-span-7 md:col-span-2 '>
            gf
          </div>
        </div>
    

        

      </div>
    </main>
  );
}


