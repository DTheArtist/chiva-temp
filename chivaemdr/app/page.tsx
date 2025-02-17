import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection
				pagetitle="What is Chi'Va™?"
				content="AI-Powered Platform for Behavioral Health Service Efficacy"
				// pass as array of tuples
				ctalinks={[
					["/pitch", "Product Pitch"],
					["/team", "Founding Team"],
				]}
			/>
			<main>
				{/* About Chi'Va Section */}
				<FeatureSection
					title="About Chi'Va™"
					cards={[
						{
							icon: "fi fi-tr-microchip-ai",
							title: "Leveraging Cutting-Edge AI/ML",
							description:
								"Chi'Va™ leverages AI/ML technologies to transform behavioral health services, providing real-time, scalable solutions to improve care efficiency.",
						},
					]}
				/>

				{/* Key Features Section */}
				<FeatureSection
					title="Key Features"
					cards={[
						{
							icon: "fi fi-tr-effect",
							title: "Bilateral Stimulation",
							description:
								"Guided EMDR therapy at your fingertips, using scientifically validated techniques.",
						},
						{
							icon: "fi fi-tr-brain-circuit",
							title: "Cognitive Reframing",
							description:
								"Replace negative beliefs with healthier ones through guided exercises.",
						},
						{
							icon: "fi fi-tr-treatment",
							title: "Therapist-Ready Reports",
							description:
								"Receive session summaries to share with your therapist for better insights.",
						},
					]}
				/>

				{/* Investor Banner */}
				<FeatureSection
					title="Chi'Va is in Pre-Seed: Get In Early"
					cards={[]}
					isInvestorBanner
				/>
			</main>
			<Footer />
		</div>
	);
}
