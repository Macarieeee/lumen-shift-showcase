import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProjectGrid />
      <CTASection />
    </main>
  );
};

export default Index;