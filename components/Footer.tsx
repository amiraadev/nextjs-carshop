import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
Link
const Footer = () => {
  return (
    <footer className='flex flex-col text-slate-200 mt-5 border-t border-gray-700'>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
           src='/logo-green-car-2.png'
           alt='logo image'
           width={80}
           height={18}
           />
           <p className='text-base text-slate-500'>
                Car Hub 
               <br/>
               All rights reserved &copy;
           </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer