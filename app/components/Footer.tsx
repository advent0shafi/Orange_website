import React from 'react'
import FooterContent from './FooterContent'

export default function Footer() {
  return (
    <div 
        className='relative md:h-[450px] h-[598px] bg-black'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative md:h-[calc(100vh+450px)] h-[calc(100vh+598px)] -top-[100vh]'>
            <div className='h-[450px] sticky md:top-[calc(100vh-450px)] top-[calc(100vh-598px)]'>
                <FooterContent />
            </div>
        </div>
    </div>
  )
}
