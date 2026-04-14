import Image from "next/image";
import type { PropsWithChildren } from "react";

export const WebsiteBackground = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Image
				src="/portrait.png"
				alt="Assem Hebik Portrait"
				title="Assem Hebik Portrait"
				fill
				className="absolute inset-0 pointer-events-none object-cover"
				sizes="100vw"
			/>
			<div className="absolute inset-0 blur-xl bg-yellow-600 opacity-10 mix-blend-color-dodge" />
			<div className="max-w-screen-2xl h-screen w-full mx-auto">{children}</div>
		</>
	);
};
