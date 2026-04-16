import { ContactSection } from "@/components/contact-section";
import { AcademicFoundation } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Portrait } from "@/components/portrait";
import { ProjectsSection } from "@/components/projects-section";
import { SkillSection } from "@/components/skill-section";
import { UpworkSection } from "@/components/upwork-section";

const Page = () => {
	return (
		<>
			<Portrait />
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<UpworkSection />
			<SkillSection />
			<ExperienceSection />
			<AcademicFoundation />
			<ContactSection />
		</>
	);
};

export default Page;
