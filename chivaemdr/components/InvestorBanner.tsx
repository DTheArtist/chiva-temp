import Link from "next/link";

export default function InvestorBanner() {
	return (
		<section className="investor-banner">
			<h2>Join Our Pre-Seed Journey</h2>
			<p>
				We’re in the pre-seed stage, seeking strategic investors,
				incubators, and early-stage funds to help us scale.
			</p>
			<Link href="/investor">
				<span className="cta-button">Learn More</span>
			</Link>
		</section>
	);
}
