// import { revenue } from '@/app/lib/placeholder-data'
import { fetchRevenue } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import React from 'react'

export default async function Dashboard() {
  const revenue = await fetchRevenue();
  return (
    <>
    <div className='text-7xl text-center'>Dashboard</div>
    <RevenueChart revenue={revenue}/>
    </>
  )
}
