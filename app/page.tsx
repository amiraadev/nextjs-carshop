/** @format */

import { CustomFilter, Hero, SearchBar,CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }:FilterProps) {
	const allCars = await fetchCars({
	  manufacturer: searchParams.manufacturer || "",
	  year: searchParams.year || 2022,
	  fuel: searchParams.fuel || "",
	  limit: searchParams.limit || 10,
	  model: searchParams.model || "",
	});
	// console.log(allCars);
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='mt-20 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<CustomFilter title='fuel' options={fuels} />
						<CustomFilter title='year' options={yearsOfProduction}/>
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						WE HAVE CARS
						<div className='home__cars-wrapper'>
							{allCars.map((car) => (
								<CarCard car={car} />
							))}
						</div>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-white text-xl font-bold'>Oops, No results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
