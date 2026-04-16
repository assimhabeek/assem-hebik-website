"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"; // Standard shadcn card
import { ids } from "@/lib/ids";
import { cn } from "@/lib/utils";

interface Project {
	title: string;
	role: string;
	image?: string;
	description: string;
	tags: string[];
	className: string;
	github?: string;
	link: string;
}

const projects: Array<Project> = [
	{
		title: "ZeroDay kit",
		role: "Sole Architect",
		image: "/zeroday-kit.png",
		github: "https://github.com/assimhabeek/zeroday-kit",
		link: "",
		description:
			"The ZeroDay Kit is a high-velocity full-stack engine engineered to bridge the gap between development and production by fundamentally eliminating the traditional API layer. By utilizing oRPC for direct server-side data access, it enables seamless, type-safe communication that bypasses the friction of REST or GraphQL boilerplate. This architecture is paired with a sophisticated Terraform-driven infrastructure, transforming complex DevOps into a streamlined, single-step deployment process. Designed for engineers who prioritize architectural precision, it integrates automated CI/CD pipelines and performance-optimized data fetching to ensure that every project is inherently scalable, secure, and ready for high-traffic production environments from the very first commit.",
		tags: [
			"TanStack",
			"React",
			"TypeScript",
			"oRPC",
			"Terraform",
			"AWS",
			"AWS Fargate",
			"CircleCI",
			"Docker",
			"Zod",
			"Drizzle",
			"Postgres",
			"Tailwind",
			"Shadcn",
			"AI",
			"LLMs",
		],
		className: "md:col-span-2 md:row-span-2",
	},
	{
		title: "Carifex Fulfillment",
		github: "https://github.com/assimhabeek/carifex-fulfillment",
		role: "Sole Architect",
		link: "",
		description:
			"A Shopify tool that uses webhooks and matching algorithms to automate order preprocessing. It features an AG-Grid for advanced filtering and bulk inline edits and a workflow that tracks export states to eliminate duplicate fulfillment errors.",
		tags: [
			"Angular",
			"TypeScript",
			"RxJS",
			"AG-Grid",
			"Slim/PHP",
			"MySQL",
			"Webhooks",
			"Github Actions",
		],
		className: "md:col-span-2 md:row-span-1",
	},
	{
		title: "Codelab app",
		role: "Senior Full Stack Engineer",
		link: "https://codelab.app/",
		description:
			"A powerful visual builder for creating stunning web applications. Drag, drop, and publish in minutes.",
		tags: ["Next.js", "NestJs", "Neo4j", "GraphQl"],
		className: "md:col-span-1 md:row-span-1",
	},
	{
		title: "ElevenOS Portal Manager",
		role: "Full Stack Engineer",
		link: "https://www.elevensoftware.com/",
		description:
			"An enterprise multi-tenant hub for global cloud Wi-Fi management, orchestrating millions of guest authentications and complex PMS integrations for luxury hospitality brands worldwide.",
		tags: ["React", "Docker", "NodeJs", "AWS"],
		className: "md:col-span-1 md:row-span-1",
	},
];

export function ProjectsSection() {
	return (
		<section
			id={ids.projectsSection}
			/* 1. Changed h-screen to min-h-screen to prevent content cutoff on small screens */
			className="container px-4 py-20 min-h-screen mx-auto flex flex-col justify-center"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-dense">
				{projects.map((project, i) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						/* 2. Added h-full to ensure cards stretch to match their neighbors */
						className={cn("h-full", project.className)}
					>
						{/* 3. Added 'flex flex-col' to the Card to allow internal spacing control */}
						<Card className="group w-full h-full bg-card/20 backdrop-blur-md border border-white/5 p-0 flex flex-col overflow-hidden pointer-events cursor-pointer">
							{project.image && (
								/* 4. Responsive Image height: taller on mobile, fixed on desktop */
								<div className="relative w-full overflow-hidden h-[250px] md:h-[300px] lg:h-[350px]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
										className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
									/>
								</div>
							)}

							<CardHeader className="p-6">
								<div className="flex gap-2 mb-4 flex-wrap">
									{project.tags.map((tag) => (
										<Badge
											key={tag}
											className="bg-white/5 text-sm text-white/90 border-none backdrop-blur-sm px-2 py-0"
										>
											{tag}
										</Badge>
									))}
								</div>
								<CardTitle className="text-xl md:text-2xl font-bold text-white tracking-tight">
									{project.title}
								</CardTitle>
								<div className="text-small text-white/50 font-bold uppercase tracking-[0.2em] mt-2">
									Role:{" "}
									<span className="text-white/90 normal-case font-medium">
										{project.role}
									</span>
								</div>
							</CardHeader>

							{/* 5. flex-grow ensures this section pushes the footer to the bottom */}
							<CardContent className="p-6 pt-0 flex-grow">
								<CardDescription className="text-base text-white/80 leading-relaxed">
									{project.description}
								</CardDescription>
							</CardContent>

							<CardFooter className="p-4  flex bg-card/20 gap-3">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 justify-center flex items-center gap-2 px-4 py-2 bg-white text-black  font-bold uppercase rounded-full hover:bg-neutral-200 transition-colors"
								>
									Visit <ExternalLink size={12} />
								</Link>
								{project.github && (
									<Link
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 justify-center flex items-center gap-2 px-4 py-2 bg-black/95 border border-white/10 text-white  font-bold uppercase rounded-full hover:bg-white/10 transition-all"
									>
										Source <ExternalLink size={12} />
									</Link>
								)}
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
