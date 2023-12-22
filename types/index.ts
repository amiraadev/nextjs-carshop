/** @format */

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;

}
export interface SearchManuFacturerProps {
	manufacturer: string;
	setManuFacturer: (manufacturer: string) => void;
}
export interface CarProps {
	city_mpg: number;
	carClass: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
