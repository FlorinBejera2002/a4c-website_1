// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="p-4 bg-gray-800 text-white">
			<div className="container mx-auto flex justify-center w-full gap-5">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
			</div>
		</nav>
	);
}
