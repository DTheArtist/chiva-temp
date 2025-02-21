import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import CompanySection from "../../components/CompanySection";
import InvestorBanner from "../../components/InvestorBanner";
import Footer from "../../components/Footer";
import React from "react";
import Image from "next/image";
import TableauViz from "@/components/data-viz/tableau-viz";

export default function Pitch() {
	return (
		<div>
			<Navbar />
			<main>
				<HeroSection
					pagetitle=<>
						Chi'Va™: AI-Guided <br /> Mental Health Support
					</>
					content="Unlocking Lost Revenue for Behavioral Health Providers"
					// pass as array of tuples
					ctalinks={[
						["/pitch", "Product Pitch"],
						["/team", "Founding Team"],
					]}
				/>
				<h1>
					Percentage of Needs Met in Mental Health Care Due To Health
					Professional Shortage by U.S. Areas 2021
				</h1>
				<section className="bg-slate-50 flex-col justify-center items-center">
					<TableauViz vizUrl="https://www.aamcresearchinstitute.org/" />
				</section>
				<CompanySection />
				<InvestorBanner />
			</main>
			<Footer />
		</div>
	);
}
