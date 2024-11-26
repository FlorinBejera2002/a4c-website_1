import Link from "next/link";
import { FaBath, FaBed, FaPhone } from "react-icons/fa";

export const About = () => {
	return (
		<>
			<div
				className=" h-screen flex flex-col  relative bg-white z-10 md:px-40 gap-16"
				id="about"
			>
				<h2 className="text-xl font-bold text-[#004d5a] pt-10 border-b pb-2 max-w-40 border-[#004d5a]">
					about us
				</h2>
				<div className="md:flex justify-between w-full">
					<div className="flex flex-col gap-6 max-w-3xl">
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl text-[#004d5a] font-serif font-bold">
								Who We Are
							</h3>

							<p className="text-xl text-[#004d5a] font-serif">
								Hebron AFH is a trusted <b>Adult Family Home</b> located in
								Edmonds, WA, proudly serving the residents of Snohomish County.
								With a commitment to providing personalized and compassionate
								care, we strive to create a warm, welcoming environment for all
								our residents.
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<h3 className="text-3xl text-[#004d5a] font-serif font-bold">
								Our Mission
							</h3>

							<p className="text-xl text-[#004d5a] font-serif">
								Our mission is to offer a home-like setting where residents feel
								safe, valued, and cared for. We focus on maintaining the
								dignity, independence, and well-being of each individual by
								tailoring our services to meet their unique needs.
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<h3 className="text-3xl text-[#004d5a] font-serif font-bold">
								Services We Offer
							</h3>
							<ul className="text-xl text-[#004d5a] font-serif">
								Comprehensive care for residents with:
								<li className="pl-10 font-semibold">- Dementia</li>
								<li className="pl-10 font-semibold">
									- Mental Health Conditions
								</li>
								<li className="pl-10 font-semibold">
									- Developmental Disabilities
								</li>
							</ul>
							<p className="text-xl text-[#004d5a] font-serif">
								Assistance with daily activities
							</p>
							<p className="text-xl text-[#004d5a] font-serif">
								Medication management
							</p>
							<p className="text-xl text-[#004d5a] font-serif">
								Personalized meal plans and nutritional support
							</p>
							<p className="text-xl text-[#004d5a] font-serif">
								Recreational activities to promote mental and physical health
							</p>
							<p className="text-xl text-[#004d5a] font-serif">
								24-hour monitoring and care from trained professionals
							</p>
						</div>
					</div>
					<div className="flex flex-col w-fit gap-1 max-w-lg">
						<div className=" flex flex-col gap-8 mt-28  p-10 items-center bg-[#d1ccc2] bg-opacity-50 text-center rounded-tr-md rounded-tl-md">
							<h3 className="text-4xl text-[#004d5a] font-bold  font-serif">
								23426 84th Ave W, Edmonds, WA 98026, USA
							</h3>

							<p className=" text-2xl text-[#004d5a] font-serif">
								24 Hour Care
							</p>
							<p className=" text-2xl text-[#004d5a] font-serif">
								Visiting Hours: <b>9:00am – 8:00pm</b>
							</p>

							<Link
								href="tel:425-776-7657"
								className="flex items-center text-xl w-fit gap-4 text-white font-serif rounded-full bg-[#004d5a] py-2 px-6 shadow-sm "
							>
								<FaPhone />
								425-776-7657
							</Link>
						</div>
						<div className="flex gap-1 w-full">
							<div className="bg-[#d1ccc2] px-16 py-5  bg-opacity-50 rounded-bl-md flex justify-center w-1/2">
								<FaBed className="w-20 text-[#004d5a] h-12" />
							</div>
							<div className="bg-[#d1ccc2] px-16 py-5  bg-opacity-50 rounded-br-md flex justify-center w-1/2">
								<FaBath className="w-20 text-[#004d5a] h-12" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
