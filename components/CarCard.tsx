"use client"
import { CarProps } from '@/types';
import Image from 'next/image'
import { useState } from 'react'
import { CustomButton } from '.';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
    car:CarProps;
}

function CarCard({car}:CarCardProps) {
    const {city_mpg,year,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,carClass} = car
    const carRent = calculateCarRent(city_mpg,year)
    
    const [first, setfirst] = useState("second")
  
  
    return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2>{make}{model}</h2>
      </div>
      <p className='flex mt-6 text-[32px]'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src="/hero.png"  alt="car model" fill priority className='object-contain' />
      </div>
      
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-50">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/steering-wheel.svg" alt="steering wheel" width={20} height={20}/>
                <p className='text-[14px] text-slate-950'>
                    {transmission==='a' ? 'Automatic':'Manual'}
                </p>
            </div> 
        </div>

      </div>
    </div>
  )
}

export default CarCard
