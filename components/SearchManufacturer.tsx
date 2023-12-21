/** @format */
"use client";
import { manufacturers } from "@/constants";
import { SearchManufactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

function SearchManufacturer({
	manufacturer,
	setManufacturer,
}: SearchManufactureProps) {
	const [query, setQuery] = useState("second");
	const filteredManufacturers =
		query === ""
			? manufacturers
			: manufacturers.filter((item) =>
					item.toLowerCase().replace(/\s+/g, " ").includes(query.toLowerCase().replace(/\s+/g, " "))
			  );

	return (
		<div className='search-manufacturer'>
			<Combobox>
				<div className='relative w-full'>
					<Combobox.Button className='absolute top-[14px]'>
						<Image
							src='/car-logo.svg'
							alt='car logo'
							width={20}
							height={20}
							className='ml-4'
						/>
					</Combobox.Button>
					<Combobox.Input
						className='search-manufacturer__input'
						placeholder='Volkswagen'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}></Combobox.Input>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery("")}></Transition>
					<Combobox.Options></Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
}

export default SearchManufacturer;
