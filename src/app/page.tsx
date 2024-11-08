import Link from "next/link";
import { About } from "./pages/about";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div
				className="min-h-screen w-full bg-fixed flex items-center justify-center"
				style={{
					backgroundImage: "url('/hero-image.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="text-center space-y-4 p-6 rounded-lg flex flex-col items-center fixed">
					<h1 className="text-7xl font-bold text-white">Welcome!</h1>
					<p className="text-5xl font-semibold text-white">I am </p>
					<div className="flex justify-center w-fit gap-8 mt-4 rounded-full bg-white py-2 px-4 shadow-lg bg-opacity-40">
						<Link href="/about" className="hover:text-blue-500">
							<FaFacebook className="w-6 h-6" />
						</Link>
						<Link href="/projects" className="hover:text-purple-500">
							<FaInstagram className="w-6 h-6" />
						</Link>
						<Link href="/projects" className="hover:text-black">
							<FaGithub className="w-6 h-6" />
						</Link>
						<Link href="/projects" className="hover:text-blue-500">
							<FaLinkedin className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</div>

			<About />
		</>
	);
}
