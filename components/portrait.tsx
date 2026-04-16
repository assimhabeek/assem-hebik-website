"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export const Portrait = () => {
	const { scrollY } = useScroll();

	const blurValue = useTransform(
		scrollY,
		[0, 100, 600],
		["blur(0px)", "blur(15px)", "blur(20px)"],
	);

	// You can do the same for opacity if you want it to stay solid at first
	const opacityValue = useTransform(scrollY, [0, 100, 600], [1, 1, 0.4]);

	return (
		<div className="fixed w-screen h-screen overflow-hidden -z-10">
			<motion.div
				className="w-full h-full"
				initial={{ scale: 1.3, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				style={{
					filter: blurValue,
					opacity: opacityValue,
				}}
				transition={{
					duration: 1.5,
					ease: [0.22, 1, 0.36, 1],
					opacity: { duration: 1.2 },
				}}
			>
				<div className="relative w-full h-full bg-portrait-gradient bg-cover bg-center bg-no-repeat bg-fixed aspect-video">
					<Image
						src="/portrait.png"
						alt="Assem Hebik Portrait"
						title="Assem Hebik Portrait"
						fill
						className="absolute inset-0 pointer-events-none object-cover"
						priority
						sizes="100vw"
					/>
					<div className="absolute inset-0 blur-xl bg-yellow-600 opacity-10 mix-blend-color-dodge" />
				</div>
			</motion.div>
		</div>
	);
};
