"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useScroll } from "@/hooks/useScroll.hook";
import { ids } from "@/lib/ids";
import { cn } from "@/lib/utils";

const navItems = [
	{ title: "Home", href: `/#${ids.heroSection}` },
	{ title: "Projects", href: `/#${ids.projectsSection}` },
	{ title: "Testimonials", href: `/#${ids.upworkSection}` },
	{ title: "Skills", href: `/#${ids.skillSection}` },
	{ title: "My Career", href: `/#${ids.experienceSection}` },
	{ title: "Education", href: `/#${ids.educationSection}` },
];

export function Navbar() {
	const isScrolled = useScroll();

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full transition-all duration-500 bg-transparent py-5",
				isScrolled && "backdrop-blur-md border-b border-white/10 py-3",
			)}
		>
			<div className="container mx-auto flex h-14 items-center justify-between px-4">
				<Link
					href="/"
					className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
				>
					<Image
						src="/assem-hebik-title.svg"
						alt="Assem Hebik"
						width={0}
						height={0}
						style={{ width: "auto", height: "24px" }} // Slightly larger logo to match bigger text
					/>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden xl:flex items-center gap-10">
					{/* Increased gap */}
					{navItems.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="relative text-base font-medium text-white/70 transition-colors hover:text-white group"
						>
							{item.title}
							<span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full" />
						</Link>
					))}
					<Link
						className="bg-white text-black rounded-xl hover:bg-zinc-200 px-6 py-2 text-base"
						href={`/#${ids.contactSection}`}
					>
						Connect
					</Link>
				</nav>

				{/* Mobile Nav */}
				<div className="xl:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="text-white hover:bg-white/10"
							>
								<Menu className="h-12 w-12" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="bg-black/80 text-white border-zinc-800 p-8"
						>
							<SheetTitle className="text-white text-xl border-b border-zinc-800 pb-4">
								Menu
							</SheetTitle>

							<div className="flex flex-col gap-8 mt-10">
								{/* Increased gap for mobile list */}
								{navItems.map((item) => (
									<Link
										key={item.title}
										href={item.href}
										className="group relative text-xl font-semibold text-white transition-colors hover:text-white/80"
									>
										{item.title}
										<span className="absolute -bottom-1 left-1/2 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />{" "}
									</Link>
								))}
								<Link
									className="w-full bg-white text-black rounded-xl text-center p-2 text-lg"
									href={`/#${ids.contactSection}`}
								>
									Connect
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
