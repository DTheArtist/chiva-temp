"use client" 
import React, { useEffect, useRef } from "react";

interface TableauVizProps {
	vizUrl: string;
	width?: number;
	height?: number;
}

const TableauViz: React.FC<TableauVizProps> = ({
	vizUrl,
	width = 1000,
	height = 727,
}) => {
	const vizContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Ensure this code runs only in the browser
		if (typeof window !== "undefined" && vizContainerRef.current) {
			const divElement = vizContainerRef.current;

			// Create the <object> element for the Tableau visualization
			const vizElement = document.createElement("object");
			vizElement.className = "tableauViz";
			vizElement.style.display = "none";

			// Set the required parameters for the Tableau visualization
			const params = [
				{
					name: "host_url",
					value: "https%3A%2F%2Fpublic.tableau.com%2F",
				},
				{ name: "embed_code_version", value: "3" },
				{ name: "site_root", value: "" },
				{ name: "name", value: "20230705Figure1/Figure1" },
				{ name: "tabs", value: "no" },
				{ name: "toolbar", value: "yes" },
				{
					name: "static_image",
					value: "https://public.tableau.com/static/images/20/20230705Figure1/Figure1/1.png",
				},
				{ name: "animate_transition", value: "yes" },
				{ name: "display_static_image", value: "yes" },
				{ name: "display_spinner", value: "yes" },
				{ name: "display_overlay", value: "yes" },
				{ name: "display_count", value: "yes" },
				{ name: "language", value: "en-US" },
			];

			params.forEach((param) => {
				const paramElement = document.createElement("param");
				paramElement.name = param.name;
				paramElement.value = param.value;
				vizElement.appendChild(paramElement);
			});

			// Append the <object> element to the container
			divElement.appendChild(vizElement);

			// Adjust the size of the Tableau visualization
			const updateVizSize = () => {
				if (divElement.offsetWidth > 800) {
					vizElement.style.width = "100%";
					vizElement.style.maxWidth = `${width}px`;
					vizElement.style.height = `${
						divElement.offsetWidth * 0.75
					}px`;
					vizElement.style.maxHeight = "854px";
				} else if (divElement.offsetWidth > 500) {
					vizElement.style.width = "100%";
					vizElement.style.maxWidth = `${width}px`;
					vizElement.style.height = `${
						divElement.offsetWidth * 0.75
					}px`;
					vizElement.style.maxHeight = "854px";
				} else {
					vizElement.style.width = "100%";
					vizElement.style.height = `${height}px`;
				}
			};

			// Update the size on initial load and window resize
			updateVizSize();
			window.addEventListener("resize", updateVizSize);

			// Inject the Tableau script if it hasn't been injected already
			if (!document.getElementById("tableau-script")) {
				const scriptElement = document.createElement("script");
				scriptElement.src =
					"https://public.tableau.com/javascripts/api/viz_v1.js";
				scriptElement.id = "tableau-script";
				document.body.appendChild(scriptElement);
			}

			// Cleanup event listener on component unmount
			return () => {
				window.removeEventListener("resize", updateVizSize);
			};
		}
	}, [width, height]);

	return (
		<div
			ref={vizContainerRef}
			id="viz1740088152025"
			style={{ position: "relative" }}
		>
			<noscript>
				<a href={vizUrl}>
					<img
						alt="Figure 1"
						src="https://public.tableau.com/static/images/20/20230705Figure1/Figure1/1_rss.png"
						style={{ border: "none" }}
					/>
				</a>
			</noscript>
		</div>
	);
};

export default TableauViz;
