"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import Image from "next/image";

const slideUp: HTMLMotionProps<"div"> = {
	initial: { y: 40, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: {
		delay: 0.4,
		duration: 1,
		ease: [0.16, 1, 0.3, 1],
	},
};

const slideLeft: HTMLMotionProps<"div"> = {
	initial: { x: 60, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		delay: 0.6, // Slightly longer delay to sequence after your title
		duration: 0.9, // A touch slower for a more "elegant" slide
		ease: [0.22, 1, 0.36, 1], // Very smooth deceleration
	},
};

export const TitleSection = () => {
	return (
		<section className="container relative h-screen mx-auto overflow-hidden">
			<motion.div
				className="absolute w-full bottom-0 pl-2 pr-1 pb-24"
				{...slideUp}
			>
				<motion.div {...slideLeft}>
					<p className="text-base text-right md:text-2xl text-gray-300 antialiased leading-relaxed">
						I build SaaS products that truly matter
					</p>
				</motion.div>
				<Image
					src="/assem-hebik-title.svg"
					alt="Assem Hebik"
					width={0}
					height={0}
					loading="lazy"
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
				<p className="text-base text-right md:text-2xl text-gray-300 antialiased leading-relaxed">
					Full Stack Engineer
				</p>
			</motion.div>
		</section>
	);
};
