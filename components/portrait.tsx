import Image from "next/image";

export const Portrait = () => {
	return (
		<div className="w-screen h-screen">
			<div className="relative w-full h-full bg-[var(--background)] bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#010101_70%)] bg-cover bg-center bg-no-repeat bg-fixed">
				<Image
					src="/portrait.png"
					alt="Assem Hebik Portrait"
					title="Assem Hebik Portrait"
					fill
					className="absolute inset-0 pointer-events-none object-cover"
					sizes="100vw"
				/>
				<div className="absolute inset-0 blur-xl bg-yellow-600 opacity-10 mix-blend-color-dodge" />
			</div>
		</div>
	);
};
