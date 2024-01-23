import ContactSection from "@/ui/home/ContactSection";
import AboutSection from "@/ui/home/AboutSection";
import SkillSection from "@/ui/home/SkillSection";
import EducationSection from "@/ui/home/EducationSection";
import LearningJournalSection from "@/ui/home/LearningJournalSection";
import ProjectSection from "@/ui/home/ProjectSection";

export default function Home() {
  return (
    <main className="grid gap-12">
      <SkillSection />
      <AboutSection />

      <EducationSection />

      <LearningJournalSection />
      <ProjectSection />
    </main>
  );
}
