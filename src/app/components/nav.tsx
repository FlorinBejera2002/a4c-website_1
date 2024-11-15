"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { cn } from "../utils";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function NavBar() {
	const [{ y }] = useWindowScroll();

	return (
		<nav
			className={cn(
				" flex w-full items-center justify-center bg-transparent py-6 transition-all duration-500 z-9999",
				y !== null && y >= 25
					? "bg-gray-950/[.4] shadow-sm backdrop-blur-md"
					: "",
			)}
		>
			<div className="container flex justify-between items-center w-full">
				<Image src={logo} alt="Logo" className="w-6 text-center pl-2" />
				<div className=" flex justify-center w-full gap-5">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/projects">Projects</Link>
				</div>
			</div>
		</nav>
	);
}
