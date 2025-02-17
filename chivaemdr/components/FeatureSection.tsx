import Image from "next/image";

interface Card {
	icon: string; // Icon class name
	title: string;
	description: string;
}

interface SectionProps {
	title: string;
	cards: Card[];
	isInvestorBanner?: boolean;
}

export default function FeatureSection({
	title,
	cards,
	isInvestorBanner = false,
}: SectionProps) {
	return (
		<section
			className={`${
				isInvestorBanner
					? "bg-gradient-to-r from-indigo-900 via-purple-800 to-cyan-700 text-white py-20 text-center"
					: "py-20 px-6 md:px-20 bg-slate-900 text-white"
			}`}
		>
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-4xl font-extrabold mb-6">{title}</h2>

				{/* Investor CTA */}
				{isInvestorBanner ? (
					<>
						<p className="text-lg mb-6">
							We are seeking early-stage investors and incubators.
						</p>
						<a
							href="/investors"
							className="inline-block px-6 py-3 text-lg font-medium rounded-lg bg-indigo-900 hover:bg-violet-600 text-white shadow-md transition-all duration-200 transform hover:scale-105"
						>
							Learn More
						</a>
					</>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{cards.map((card, index) => (
							<div
								key={index}
								className="bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105"
							>
								<i
									className={`${card.icon} text-5xl text-cyan-400 mb-4`}
								/>
								<h3 className="text-2xl font-semibold">
									{card.title}
								</h3>
								<p className="text-slate-300 mt-3">
									{card.description}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
