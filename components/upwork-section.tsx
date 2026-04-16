"use client";
import { ExternalLink } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { ids } from "@/lib/ids";

export interface Review {
	client: string;
	feedback: string;
	project: string;
}

export interface Stats {
	label: string;
	value: string;
	color: string;
}

const stats: Stats[] = [
	{
		label: "Max Retention",
		value: "5-Year Contracts", // Pointing out long-term stability
		color: "text-emerald-400",
	},
	{
		label: "Consistent Success",
		value: "7-Jobs Completed", // Pointing out long-term stability
		color: "text-red-400",
	},
	{
		label: "Billed Expertise",
		value: "2,000+ Hours",
		color: "text-blue-400",
	},
];

const reviews: Review[] = [
	{
		client: "Azzam | Founder & CEO of Carifex",
		feedback:
			"Where can I start with Assem.\n\nExceptional engineer. Took what was a complex build for a fulfillment solution originally on an excel document and converted into a software that now seamlessly works with the backend of our ecommerce store to fulfillment centre.\n\nHe is remarkable in every sense. Made countless corrections and revisions to ensure that it worked exactly like we needed it.\n\nNever did he say it couldn't be done, unless it didn't make sense from a coding perspective. And suggestions were made and implemented with his own initiative.\n\nTruly a great find.",
		project: "Carifex Fulfillment",
	},
	{
		client: "John Steele | CEO of Series Code",
		feedback:
			"Assem is one of the best engineers I've worked with. We've had the good fortune to work with him for the past year. While our paths are separating now, Assem is welcome back any time.",
		project: "Portal Manager",
	},
	{
		client: "Webber Wang | CEO of Codelab",
		feedback:
			"It’s been a pleasure working together, great code quality as always!",
		project: "Codelab.app",
	},
];

export const UpworkSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
		<section id={ids.upworkSection} className="py-24 relative">
			<div className="max-w-6xl mx-auto px-6">
				{/* Header Section */}
				<div className="mb-16 flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-white/5 pb-12">
					<div className="space-y-4">
						<h2 className="text-5xl font-extralight tracking-tighter text-white">
							Client{" "}
							<span className="text-muted-foreground italic">
								Testimonials on Upwork
							</span>
						</h2>
						<p className="text-muted-foreground max-w-md font-light text-sm">
							A track record defined by **5-year long-term partnerships**, 100%
							Job Success, and Top Rated Plus status, reflecting a sustained
							commitment to excellence.
						</p>
					</div>

					<div className="flex flex-row  h-full w-full flex-wrap gap-8 md:pl-8">
						{stats.map((stat) => (
							<div key={stat.label}>
								<div className={`text-xl font-mono ${stat.color}`}>
									{stat.value}
								</div>
								<div className="text-sm uppercase tracking-widest text-muted-foreground">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Bento Grid Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-12 gap-6"
				>
					{/* Featured Review */}
					<motion.div variants={itemVariants} className="md:col-span-7 h-full">
						<ReviewCard review={reviews[0]} isFeatured={true} />
					</motion.div>

					{/* Stacked Reviews */}
					<div className="md:col-span-5 flex flex-col gap-6">
						<motion.div variants={itemVariants} className="flex-1">
							<ReviewCard review={reviews[1]} isFeatured={false} />
						</motion.div>
						<motion.div variants={itemVariants} className="flex-1">
							<ReviewCard review={reviews[2]} isFeatured={false} />
						</motion.div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<div className="mt-12 flex justify-center">
					<Link
						href="https://www.upwork.com/freelancers/~015a96d156da00826b"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-row p-6 rounded-full border border-orange-500/20 bg-white/5 text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
					>
						View Profile <ExternalLink className="ml-2" />
					</Link>
				</div>
			</div>
		</section>
	);
};

interface ReviewCardProps {
	review: Review;
	isFeatured: boolean;
}
const ReviewCard = ({ review, isFeatured }: ReviewCardProps) => (
	<Card className="h-full flex flex-col border-white/5 bg-white/[0.02] backdrop-blur-md rounded-3xl overflow-hidden group hover:bg-white/[0.04] transition-all duration-500 cursor-pointer">
		<CardHeader className="pb-4 flex flex-row items-center justify-between">
			<div className="flex items-center gap-1">
				{Array.from({ length: 5 }, (_, i) => i + 1).map((_) => (
					<svg
						key={_}
						className="w-3.5 h-3.5 text-orange-500 fill-current"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				))}
			</div>
			<div className="text-xs font-mono text-orange-500/70 uppercase tracking-tighter border border-orange-500/20 px-2 py-0.5 rounded">
				Verified Project
			</div>
		</CardHeader>

		<CardContent className="flex-grow">
			<p
				className={`text-gray-300 italic font-light whitespace-pre-line leading-relaxed ${isFeatured ? "text-lg tracking-tight" : "text-sm"}`}
			>
				"{review.feedback}"
			</p>
		</CardContent>

		<CardFooter className="mt-auto pt-6 border-t border-white/5 bg-white/[0.01]">
			<div className="w-full flex flex-col gap-1">
				<div className="text-sm font-semibold text-white tracking-wide">
					{review.client.split("|")[0]}
				</div>
				<div className="text-sm uppercase tracking-widest text-muted-foreground">
					{review.client.split("|")[1]}{" "}
					<span className="mx-1 text-white/10">•</span> {review.project}
				</div>
			</div>
		</CardFooter>
	</Card>
);
