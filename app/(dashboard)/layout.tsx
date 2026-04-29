// import Link from 'next/link';
import React from 'react'
import DashboardNavbar from '../helper/dashboardNavbar';


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex p-3.5'>
      <div className='w-60'>
        <DashboardNavbar/>
      </div>
      
      <div className='bg-amber-500'>{children}</div>
      
    </main>
  )
}