export interface CardProps {
	title: string;
	flaticon: string;
	content: string;
}

export default function Card({ title, flaticon, content }: CardProps) {
	return (
		<div className=" bg-background p-4 rounded-lg shadow-md">
			<i className={flaticon}></i>
			<h3 className="text-violet-400 mt-10">{title}</h3>
			<p className="text-zinc-200">{content}</p>
		</div>
	);
}
