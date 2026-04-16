"use client";

import { motion, type Variants } from "motion/react";
import { ids } from "@/lib/ids";

const categories = [
	{
		title: "Frontend Development",
		description:
			"Crafting fluid, type-safe interfaces with a focus on state management and sub-second rendering.",
		skills: [
			"React",
			"Angular",
			"Next.js",
			"Tanstack",
			"TypeScript",
			"Server Components",
			"TailwindCSS",
			"Mobx",
			"Redux",
			"Styled components",
			"TanStack Query",
			"Graphql",
		],
		accent: "from-blue-500/20",
	},
	{
		title: "Backend Development",
		description:
			"Architecting secure, event-driven server logic and real-time communication protocols.",
		skills: [
			"NestJS",
			"Node.js",
			"Express",
			"RBAC",
			"JWT Auth",
			"WebSockets",
			"OpenAPI",
			"oRPC",
		],
		accent: "from-indigo-500/20",
	},
	{
		title: "Infrastructure & DevOps",
		description:
			"Deploying resilient, cloud-native environments using modern CI/CD and Infrastructure as Code.",
		skills: ["AWS", "Terraform", "Docker", "CircleCI", "Github Actions"],
		accent: "from-violet-500/20",
	},
	{
		title: "Databases",
		description:
			"Designing high-performance schemas across relational, document, and graph-based architectures.",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Redis"],
		accent: "from-red-500/20",
	},
	{
		title: "Quality Engineering",
		description:
			"Ensuring codebase stability through rigorous unit, integration, and end-to-end testing suites.",
		skills: ["Jest", "Cypress", "Playwright", "Unit", "Integration", "E2E"],
		accent: "from-amber-500/20",
	},
	{
		title: "AI-Augmented Workflow",
		description:
			"Accelerating delivery cycles by leveraging advanced agentic coding tools and AI assistants.",
		skills: ["Claude Code", "Copilot", "Windsurf"],
		accent: "from-emerald-500/20",
	},
];

export const SkillSection = () => {
	// Parent Container Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1, // This triggers children one by one
			},
		},
	};

	// Child Card Variants
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section
			id={ids.skillSection}
			className="container min-h-screen mx-auto py-24 px-6 flex flex-col justify-center"
		>
			<div className="max-w-6xl mx-auto w-full">
				{/* Header Animation */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">
						Technical Skills
					</h1>
					<p className="text-white/80 mb-12 text-lg max-w-2xl mx-auto">
						The technologies I use to bridge the gap between concept and
						production.
					</p>
				</motion.div>

				{/* Grid Animation */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{categories.map((cat) => (
						<motion.div
							key={cat.title}
							variants={itemVariants} // Inherits from container stagger
							whileHover={{ y: -8 }} // High-end interactive feel
							className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all hover:border-white/10"
						>
							{/* Animated Background Glow */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${cat.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							/>

							<div className="relative z-10">
								<h3 className="text-xl font-semibold text-white mb-3">
									{cat.title}
								</h3>
								<p className="text-sm text-white/50 mb-6 leading-relaxed">
									{cat.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{cat.skills.map((skill) => (
										<span
											key={skill}
											className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/90 uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white transition-colors"
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
