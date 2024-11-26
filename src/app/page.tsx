import { FaPhone } from "react-icons/fa";
import { About } from "./pages/about";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

export default function Home() {
	return (
		<>
			<div
				className="h-screen w-full bg-fixed md:flex md:justify-center overflow-x-hidden"
				style={{
					backgroundImage: "url('/hero-image.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="md:space-y-10 p-6 rounded-lg flex flex-col fixed w-full md:px-40 py-52">
					<h1 className="md:text-5xl font-bold text-white ">
						Adult Family Home Edmonds
					</h1>
					<p className="text-2xl max-w-2xl text-[#fdf9f1] font-bold font-serif">
						Hebron AFH is an Adult Family Home in Edmonds, WA 98026 servicing
						Snohomish County. Read more about the differences between an adult
						family home versus a traditional nursing home.
					</p>
					<Link
						href="tel:425-776-7657"
						className="flex items-center text-xl w-fit gap-4 text-white font-serif rounded-full bg-[#004d5a] py-2 px-6 shadow-lg"
					>
						<FaPhone />
						425-776-7657
					</Link>
				</div>
			</div>

			<About />
		</>
	);
}
