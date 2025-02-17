"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-indigo-900 text-white py-4 px-6">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Brand Section */}
				<div className="flex items-center space-x-3">
					<Link
						href="/"
						className="text-2xl font-bold tracking-wide"
					>
						Chi'Va
					</Link>
					<span className="text-sm text-indigo-300 hidden md:inline">
						Investor Relations
					</span>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white text-3xl focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X /> : <Menu />}
				</button>

				{/* Navigation Links */}
				<div
					className={`md:flex md:space-x-6 absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-indigo-900 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className="space-y-4 md:space-y-0 md:flex md:space-x-6">
						{[
							{ href: "/", label: "Home" },
							{ href: "/about", label: "About" },
							{ href: "/investor", label: "Investors" },
							{ href: "/pitch", label: "Pitch" },
							{ href: "/team", label: "Team" },
							{ href: "/contact", label: "Contact" },
							{ href: "/updates", label: "Updates" },
							{
								href: "https://updates.chivaemdr.com/default-guide/progress-traction/chiva-building-a-foundation-of-compliance-and-trust",
								label: "Documentation",
							},
						].map(({ href, label }, index) => (
							<li key={index}>
								<Link
									href={href}
									className="block py-2 md:py-0 px-6 md:px-0 text-lg font-medium hover:text-cyan-300 transition-all duration-200"
									onClick={() => setIsOpen(false)} // Close menu on mobile link click
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
