"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const Portrait = () => {
	return (
		<div className="fixed w-screen h-screen overflow-hidden">
			<motion.div
				className="w-full h-full"
				initial={{ scale: 1.3, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
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
