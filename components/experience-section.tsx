"use client";

import { motion } from "motion/react";
import { ids } from "@/lib/ids";

const experiences = [
	{
		company: "Codelab.app",
		role: "Senior Full Stack Engineer",
		period: "06/2021 — 01/2026",
		description:
			"Directed the end-to-end development of mission-critical features, bridging the gap between high-scale backend infrastructure and modern frontend architecture. I led a strategic migration to Next.js App Router, driving a 40% improvement in First Contentful Paint while drastically elevating the internal developer experience. By re-architecting and optimizing Neo4j graph queries, I successfully slashed API latency by 25%, ensuring system stability and performance during peak high-volume traffic.",
		highlights: [
			"40% FCP Reduction",
			"25% Lower API Latency",
			"Neo4j Query Optimization",
			"React Server Components",
		],
	},
	{
		company: "Seriescode (ElevenOS)",
		role: "Full Stack Developer",
		period: "01/2021 — 06/2021",
		description:
			"Architected and managed global SaaS Wi-Fi portals for enterprise clients including Hilton and Marriott. Contributed to the critical security migration from legacy AngularJS to React.",
		highlights: ["Enterprise Wi-Fi Portals", "AngularJS to React Migration"],
	},
];

export const ExperienceSection = () => {
	return (
		<section
			id={ids.experienceSection}
			className="container mx-auto py-32 px-6"
		>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-5xl font-bold text-white mb-16 tracking-tighter">
					Professional Journey
				</h2>

				<div className="relative border-l border-white/10 ml-4">
					{experiences.map((exp, i) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.2 }}
							className="mb-16 ml-10 relative"
						>
							{/* The Timeline Node */}
							<div className="absolute -left-[51px] top-1 w-5 h-5 rounded-full bg-black border-2 border-white/20 group-hover:border-white/50 transition-colors" />
							<div className="absolute -left-[47px] top-[5px] w-3 h-3 rounded-full bg-orange-500/50 animate-pulse" />

							<span className="text-sm font-medium text-white/30 uppercase tracking-[0.2em] mb-2 block">
								{exp.period}
							</span>

							<h3 className="text-2xl font-bold text-white mb-1">
								{exp.role}{" "}
								<span className="text-white/40 font-light mx-2">@</span>{" "}
								{exp.company}
							</h3>

							<p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
								{exp.description}
							</p>

							<div className="flex flex-wrap gap-3">
								{exp.highlights.map((h) => (
									<span
										key={h}
										className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white/80 rounded-sm uppercase tracking-widest font-semibold"
									>
										{h}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
