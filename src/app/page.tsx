// pages/index.js
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold text-gray-800">
					Welcome to My Portfolio
				</h1>
				<p className="text-lg text-gray-600">
					Full-Stack Developer | UI/UX Enthusiast
				</p>
				<div className="flex justify-center space-x-4 mt-4">
					<Link
						href="/about"
						className="px-4 py-2 bg-blue-500 text-white rounded-md"
					>
						About Me
					</Link>
					<Link
						href="/projects"
						className="px-4 py-2 bg-green-500 text-white rounded-md"
					>
						My Projects
					</Link>
				</div>
			</div>
		</div>
	);
}
