import { About } from "./pages/about";
import Carousel from "./components/carousel";
import { Social } from "./components/social";

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
				<div className="space-y-10 p-6 rounded-lg flex flex-col fixed w-full px-40">
					<h1 className="text-7xl font-bold text-white">Welcome!</h1>
					<Carousel />
					<Social />
				</div>
			</div>

			<About />
		</>
	);
}
