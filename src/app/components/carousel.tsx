"use client";
import { useEffect, useState } from "react";

export default function Carousel() {
	const titles = [
		"Full-Stack Developer",
		"Tech Lead",
		"Team Leader and Coach",
		"Founder and Brand Strategist",
		"Content Creator",
		"Public Relations",
	];

	const [currentTitle, setCurrentTitle] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-start gap-3 flex w-full justify-start">
			<p className="text-5xl font-bold text-white">I am</p>
			<div className="text-5xl font-bold text-yellow-500 overflow-hidden">
				<p
					key={currentTitle}
					className="animate-slide transition-opacity duration-500 ease-in-out"
				>
					{titles[currentTitle]}
				</p>
			</div>
		</div>
	);
}
