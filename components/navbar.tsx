"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
	{ title: "Home", href: "/" },
	{ title: "Features", href: "/features" },
	{ title: "Pricing", href: "/pricing" },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
				<nav className="hidden md:flex items-center gap-10">
					{/* Increased gap */}
					{navItems.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="text-base font-medium text-white/80 transition-colors hover:text-white"
						>
							{item.title}
						</Link>
					))}
					<Button className="bg-white text-black hover:bg-zinc-200 px-6 py-5 text-base">
						Get Started
					</Button>
				</nav>

				{/* Mobile Nav */}
				<div className="md:hidden">
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
										className="text-xl font-semibold hover:text-zinc-400 transition-colors"
									>
										{item.title}
									</Link>
								))}
								<Button className="w-full bg-white text-black mt-4 py-6 text-lg">
									Get Started
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
