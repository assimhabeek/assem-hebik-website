import Image from "next/image";

export const TitleSection = () => {
	return (
		<section className="container relative h-screen mx-auto">
			<div className="absolute w-full bottom-0 pl-2 pr-1 pb-24">
				<p className="text-base text-right md:text-2xl text-gray-300 antialiased leading-relaxed">
					I build SaaS products that truly matter
				</p>
				<Image
					src="/assem-hebik-title.svg"
					alt="Assem Hebik"
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
				<p className="text-base text-right md:text-2xl text-gray-300 antialiased leading-relaxed">
					Full Stack Engineer
				</p>
			</div>
		</section>
	);
};
