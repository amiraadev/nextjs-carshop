/** @format */

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
	return (
		<header className='w-full absolut z-10'>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
				<Link href='/' className='flex justify-center items-center'>
					<Image src='/logo-green-car-2.png' alt='car hub logo' width={80} height={18}  />
				</Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full"
        />
			</nav>
		</header>
	);
};

export default Navbar;
