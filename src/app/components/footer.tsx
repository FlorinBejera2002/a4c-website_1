import Image from "next/image";
import logo from "../../../public/logo-website-1.webp";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="flex items-center py-6 text-[#d1ccc2] text-sm px-20 w-full bg-gray-950">
			<Link href="/" className="flex items-center gap-4 w-full">
				<Image
					src={logo}
					alt="Logo"
					className="w-12 h-12 rounded-full text-center"
				/>
				<h3 className="text-xl font-bold text-[#d1ccc2]">HEBRON AFH</h3>
			</Link>{" "}
			<p className="text-[#d1ccc2] text-sm flex flex-col items-end gap-2 w-full">
				© 2024 HEBRON AFH. All rights reserved.
			</p>
		</div>
	);
};
