"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ids } from "@/lib/ids";

const education = [
	{
		degree: "Master of Science in Information & Communication Technologies",
		institution: "University of Constantine 2 - Abdelhamid Mehri",
		ranking: "Graduated 2nd in Batch",
		description:
			"Advanced specialization in systems architecture and high-performance networking.",
		skills: ["Systems Architecture", "Network Design", "Software Engineering"],
	},
	{
		degree: "Licence in Information Technologies",
		institution: "University of Constantine 2 - Abdelhamid Mehri",
		ranking: "Graduated 1st in Batch (Valedictorian)",
		description:
			"Foundational mastery of algorithmic complexity, data structures, and core computing principles.",
		skills: ["Algorithms", "Data Structures", "Computer Science"],
	},
];

export const AcademicFoundation = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.3 },
		},
	};

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section
			id={ids.educationSection}
			className="relative py-24 overflow-hidden"
		>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-5xl font-extralight tracking-tighter text-white">
						Academic{" "}
						<span className="text-gray-500 font-serif italic">Foundation</span>
					</h2>
					<div className="h-[1px] w-24 bg-gradient-to-r from-orange-500 to-transparent mt-4" />
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid gap-6"
				>
					{education.map((edu) => (
						<motion.div
							key={edu.degree}
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-colors hover:bg-white/[0.05] hover:border-white/10"
						>
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
								<div>
									<div className="flex items-center gap-3 mb-3">
										<span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm uppercase tracking-[0.2em] text-orange-400 font-bold">
											{edu.ranking}
										</span>
									</div>

									<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-orange-400 transition-colors">
										{edu.degree}
									</h3>

									<Link
										href="https://www.univ-constantine2.dz/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-white transition-colors text-lg inline-flex items-center gap-2"
									>
										{edu.institution}
										<svg
											className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											role="img" // 1. Set the role to image
											aria-labelledby="external-link-title" // 2. Link to the title ID
										>
											<title id="external-link-title">
												Visit university website
											</title>{" "}
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>{" "}
									</Link>

									<p className="mt-4 text-gray-500 max-w-2xl leading-relaxed font-light">
										{edu.description}
									</p>
								</div>

								<div className="flex flex-wrap gap-2 md:justify-end max-w-xs">
									{edu.skills.map((skill) => (
										<span
											key={skill}
											className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/5 bg-white/5 text-gray-400 backdrop-blur-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
