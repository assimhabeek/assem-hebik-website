"use client";

import { ExternalLink, Mail, MessageSquare, Phone } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ids } from "@/lib/ids";
import { cn } from "@/lib/utils";

const GithubIcon = ({
	size = 128,
	color = "currentColor",
	title = "GitHub Profile",
	...props
}) => {
	const id = "github-icon";
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-labelledby={id}
			{...props}
		>
			<title id={id}>{title}</title>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	);
};

const LinkedInIcon = ({
	size = 128,
	color = "currentColor",
	title = "LinkedIn Profile",
	...props
}) => {
	const id = "linkedin-icon";
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={color}
			role="img"
			aria-labelledby={id}
			{...props}
		>
			<title id={id}>{title}</title>
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
		</svg>
	);
};
const UpworkIcon = ({ size = 128, title = "Upwork Profile", ...props }) => {
	const id = "upwork-icon";
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 25.5 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			role="img"
			aria-labelledby={id}
			{...props}
		>
			<title id={id}>{title}</title>
			<path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
		</svg>
	);
};

const direct = [
	{
		name: "Email",
		value: "assimhabe@egmail.com",
		href: "mailto:assimhabe@egmail.com",
		icon: <Mail className="w-4 h-4" />,
	},
	{
		name: "WhatsApp",
		value: "+213 669 78 88 62",
		href: "https://wa.me/21366978862",
		icon: <MessageSquare className="w-4 h-4" />,
	},
	{
		name: "Phone",
		value: "+213 669 78 88 62",
		href: "tel:+21366978862",
		icon: <Phone className="w-4 h-4" />,
	},
];

const socials = [
	{
		name: "Upwork",
		href: "https://www.upwork.com/freelancers/~015a96d156da00826b",
		className: "hover:text-green-500 hover:border-green-500/50 transition-all",
		icon: <UpworkIcon />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/assem-hebik/",
		icon: <LinkedInIcon />,
		className: "hover:text-[#0077B5] hover:border-[#0077B5]/50",
	},
	{
		name: "GitHub",
		href: "https://github.com/assimhabeek/",
		icon: <GithubIcon />,
		className: "text-white/20 hover:text-white/100 hover:border-white/50",
	},
];

export const ContactSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<section id={ids.contactSection} className="py-24 relative">
			<div className="max-w-6xl mx-auto px-6">
				{/* Main Section Header */}
				<div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-12">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="h-px w-8 bg-orange-500/50" />
							<span className="text-base font-mono text-orange-500 uppercase tracking-[0.4em]">
								Available for Hire
							</span>
						</div>
						<h2 className="text-6xl font-extralight tracking-tighter text-white">
							Contact{" "}
							<span className="text-muted-foreground italic">& Links</span>
						</h2>
					</div>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-12 gap-6"
				>
					{/* Platform Identity Grid - Forces equal size cards */}
					<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
						{socials.map((social) => (
							<motion.div
								key={social.name}
								variants={itemVariants}
								className={
									"h-full w-full flex flex-row items-center justify-center"
								}
							>
								<Link
									href={social.href}
									className={cn(
										"w-full h-full border border-white/10 p-8 rounded-lg flex flex-col items-center",
										social.className,
									)}
								>
									<ExternalLink className="w-6 h-6" />
									<div className="mt-16">{social.icon}</div>
									<h4 className="group-hover font-light mt-20 text-lg text-center tracking-tight">
										{social.name}
									</h4>
								</Link>
							</motion.div>
						))}
					</div>

					{/* Direct Communication Ledger */}
					<motion.div
						variants={itemVariants}
						className="lg:col-span-4 flex flex-col gap-3"
					>
						{direct.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] transition-all group h-full"
							>
								<div className="flex items-center gap-4">
									<div className="p-2.5 rounded-xl bg-white/5 text-gray-500 group-hover:text-white transition-all duration-300">
										{item.icon}
									</div>
									<div>
										<p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
											{item.name}
										</p>
										<p className="text-sm text-gray-300 font-mono tracking-tighter mt-0.5">
											{item.value}
										</p>
									</div>
								</div>
							</Link>
						))}
					</motion.div>
				</motion.div>

				{/* Global Signature */}
				<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="text-sm text-gray-200 uppercase tracking-[0.4em] flex items-center gap-4">
						<span>Constantine, Algeria</span>
						<span className="h-1 w-1 rounded-full bg-white/10" />
						<span>GMT +1</span>
					</div>
					<div className="flex gap-8 text-base text-gray-600 uppercase tracking-widest font-mono">
						<span className="text-white/40">v.2026.04</span>
						<span className="text-orange-500/40">Powered By : Aseem Hebik</span>
					</div>
				</div>
			</div>
		</section>
	);
};
