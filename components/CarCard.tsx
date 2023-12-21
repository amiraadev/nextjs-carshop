"use client"
import { CarProps } from '@/types';
import Image from 'next/image'
import { useState } from 'react'
import { CustomButton } from '.';

interface CarCardProps {
    car:CarProps;
}

function CarCard({car}:CarCardProps) {
    const {city_mpg,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,carClass} = car
    const [first, setfirst] = useState("second")
  
  
    return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2>{make}{model}</h2>
      </div>
      <p>
        <span>Car Rent</span>
      </p>
    </div>
  )
}

export default CarCard
