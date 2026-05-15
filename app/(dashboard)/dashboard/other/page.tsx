import TextAnimation from '@/components/animation/textAnimation'
import React from 'react'

export default function Other() {
 
  return (
    <>
    <div className='text-8xl'>Other text</div>
    <TextAnimation>    
        <span className="word">Dashboard</span>
        <span className="word">Customers</span>
        <span className="word">Invoices</span>
    </TextAnimation> 
    </>
  )
}
