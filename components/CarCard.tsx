/** @format */

"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CarDetails, CustomButton } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

interface CarCardProps {
	car: CarProps;
}

function CarCard({ car }: CarCardProps) {
	const {
		city_mpg,
		year,
		combination_mpg,
		cylinders,
		displacement,
		drive,
		fuel_type,
		highway_mpg,
		make,
		model,
		transmission,
		carClass,
	} = car;
	const carRent = calculateCarRent(city_mpg, year);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='car-card group'>
			<div className='car-card__content'>
				<h2>
					{make}
					{model}
				</h2>
			</div>
			<p className='flex mt-6 text-[32px]'>
				<span className='self-start text-[14px] font-semibold'>$</span>
				{carRent}
				<span className='self-end text-[14px] font-medium'>/day</span>
			</p>

			<div className='relative w-full h-40 my-3 object-contain'>
				<Image
					src={generateCarImageUrl(car)}
					alt='car model'
					fill
					priority
					className='object-contain'
				/>
			</div>

			<div className='relative flex w-full mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray-50'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src='/steering-wheel.svg'
							alt='steering wheel'
							width={20}
							height={20}
						/>
						<p className='text-[14px] text-slate-950'>
							{transmission === "a" ? "Automatic" : "Manual"}
						</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src='/tire.svg'
							alt='steering wheel'
							width={20}
							height={20}
						/>
						<p className='text-[14px] text-slate-950'>{drive.toUpperCase()}</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src='/gas.svg'
							alt='gas'
							width={20}
							height={20}
						/>
						<p className='text-[14px] text-slate-950'>
                           {city_mpg} MPG
						</p>
					</div>
				</div>
 
                <div className="car-card__btn-container">
                    <CustomButton 
                      title="View More"
                      containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                      textStyles="text-white text-[14px] leading-[17px] font-semibold font-bold"
                      rightIcon="/right-arrow.svg"
                      handleClick={() => setIsOpen(true)}
                    />
                </div>
			</div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
		</div>
	);
}

export default CarCard;
