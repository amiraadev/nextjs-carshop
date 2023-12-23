"use client"
import { customFilterProps } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState,Fragment } from 'react'
Transition
function CustomFilter({title,options}:customFilterProps) {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn"></Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
