import Link from "next/link";
import { HeroProps } from "./heroTypes";
import Image from "next/image";

export default function HeroSection({
	pagetitle,
	content,
	ctalinks,
}: HeroProps) {
	return (
		<section className="relative bg-gradient-to-br from-violet-900 via-indigo-800 to-cyan-700 text-center py-56 px-6 md:px-20 overflow-hidden">
			{/* Glowing Overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,1)_0%,_transparent_50%)] pointer-events-none"></div>
			<div className="absolute inset-0 z-0">
				<Image
					src="/Pocket-Therapist-Logo-Style-2024.jpg"
					alt="Chi&apso;Va - AI-Powered Therapy"
					layout="fill"
					objectFit="cover"
					quality={90}
					className="opacity-40"
					priority
				/>
			</div>
			{/* Content Container */}
			<div className="relative z-10 max-w-5xl mx-auto text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
					{pagetitle}
				</h1>

				<p className="mt-6 text-lg md:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
					{content}
				</p>

				{/* CTA Buttons */}
				<div className="mt-8 flex flex-wrap justify-center gap-4">
					{ctalinks.map(([href, label], index) => (
						<Link
							key={index}
							href={href}
						>
							<span className="inline-block px-6 py-3 text-lg font-medium rounded-lg bg-indigo-950 hover:bg-violet-600 text-white shadow-md transition-all duration-200 transform hover:scale-105">
								{label}
							</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
