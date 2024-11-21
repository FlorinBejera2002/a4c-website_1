export const Projects = () => {
	return (
		<>
			<div className=" h-[900px] flex flex-col  relative bg-white z-10 px-40 gap-16">
				<h2 className="text-xl font-bold text-gray-800 pt-10 border-b pb-2 max-w-40 border-black">
					projects
				</h2>
				<div className="grid md:grid-cols-2 w-full gap-8">
					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold  font-serif">
							ERP System for Moving Companies
						</h3>
						<p className=" text-lg text-gray-600 font-serif">
							<b>Company: </b> Ametras
						</p>
						<p className=" text-lg text-gray-600 font-serif">
							<b>Description:</b> Designed and developed an ERP solution
							tailored to streamline operations for moving companies. This
							system improved efficiency, reduced operational costs, and
							enhanced customer satisfaction.
						</p>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							Advanced Tools at Bluematrix
						</h3>
						<p className=" font-serif  text-lg text-gray-600">
							<b>PDF Converter:</b> Built a robust tool to convert complex
							documents into standardized PDFs, ensuring compatibility and ease
							of use for clients.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							<b>Excel Add-in:</b> Designed and implemented a seamless Excel
							Add-in for advanced data manipulation and reporting.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							<b>Shibboleth SSO Integration:</b> Played a pivotal role in
							transitioning the system to Shibboleth SSO, enhancing security and
							user authentication processes.
						</p>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							Epilot 360: Modernizing the Ivy Monolith
						</h3>
						<p className=" font-serif  text-lg text-gray-600">
							<b>Company:</b> epilot
						</p>

						<div>
							<p className=" font-serif font-bold  text-lg text-gray-700">
								Description:
							</p>
							<p className=" font-serif  text-lg text-gray-600 pl-5">
								Led the transition of the <b>Ivy Monolith</b> to{" "}
								<b>epilot 360</b>, a scalable and modern platform designed for
								flexibility and automation.
							</p>
							<p className=" font-serif  text-lg text-gray-600 pl-5">
								Developed key features, including <b>workflows</b>,
								<b>webhooks</b>, <b>notes</b>, and process automation, which
								drastically improved user experience and operational efficiency.
							</p>
							<p className=" font-serif  text-lg text-gray-600 pl-5">
								<b>Leadership:</b> Built and led the <b>Alpha Team</b>, creating
								trust, synergy, and fostering a high-performance environment.
							</p>
						</div>
					</div>

					<div className="shadow-md flex flex-col gap-4 p-5">
						<h3 className="text-xl text-accent font-semibold font-serif">
							What I’m Proud Of
						</h3>
						<p className=" font-serif  text-lg text-gray-600">
							Successfully transitioned through roles from{" "}
							<b>Senior Developer</b> to <b>Tech Lead</b>, and eventually{" "}
							<b>Senior Tech Lead Principal</b>.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							Made significant contributions to the energy sector, designing
							robust software solutions tailored to its unique challenges.
						</p>
						<p className=" font-serif  text-lg text-gray-600">
							Founded <b>new ark</b>, a visionary company that helps clients
							navigate to success with innovative approaches and world-class
							tools.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
