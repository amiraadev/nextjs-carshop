/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best cars",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='relative bg-black text-zinc-300'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
