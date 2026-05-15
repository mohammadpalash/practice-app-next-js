import React from 'react'
// import HomeNavbar from '../helper/homeNavbar'

export default function HomeRootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* <HomeNavbar/> */}
    <main>{children}</main>
    <h1 className='text-7xl'>This is footer</h1>
    </>
  )
}
