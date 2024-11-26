"use client";

import Image from "next/image";
import logo from "../../../public/logo-website-1.webp";
import { cn } from "../utils";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function NavBar() {
	const [{ y }] = useWindowScroll();

	// Function to scroll to the top
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Function to scroll to the "About Us" section
	const scrollToAbout = () => {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className={cn(
				" flex w-full items-center justify-center bg-blur py-6 transition-all duration-500 z-9999 fixed z-20",
				y !== null && y >= 25
					? "bg-gray-950/[.4] shadow-sm backdrop-blur-md z-20"
					: "",
			)}
		>
			<div className="container flex justify-between items-center w-full">
				{/* Logo */}
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={scrollToTop}
					className="flex items-center gap-4 w-full cursor-pointer"
				>
					<Image
						src={logo}
						alt="Logo"
						className="w-12 h-12 rounded-full text-center"
					/>
					<h3 className="text-xl font-bold text-[#d1ccc2]">HEBRON AFH</h3>
				</button>

				{/* Navigation buttons */}
				<div className=" flex justify-end w-full gap-5 md:pr-44 text-xl font-serif">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={scrollToTop}
						className="cursor-pointer text-[#d1ccc2]"
					>
						Home
					</button>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={scrollToAbout}
						className="cursor-pointer text-[#d1ccc2]"
					>
						About Us
					</button>
				</div>
			</div>
		</nav>
	);
}
