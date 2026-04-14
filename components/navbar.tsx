export const Navbar = () => {
	return (
		<nav className="relative flex justify-between items-center p-4">
			<h1 className="text-3xl font-bold">Assem Hebik</h1>
			<ul className="flex gap-4">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
