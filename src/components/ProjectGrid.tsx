import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import FilterBar from "./FilterBar";

// Import images
import cafeBeforeImg from "@/assets/projects/cafe-before.jpg";
import cafeAfterImg from "@/assets/projects/cafe-after.jpg";
import retailBeforeImg from "@/assets/projects/retail-before.jpg";
import retailAfterImg from "@/assets/projects/retail-after.jpg";
import officeBeforeImg from "@/assets/projects/office-before.jpg";
import officeAfterImg from "@/assets/projects/office-after.jpg";
import restaurantBeforeImg from "@/assets/projects/restaurant-before.jpg";
import restaurantAfterImg from "@/assets/projects/restaurant-after.jpg";

const projects: Project[] = [
  {
    id: "1",
    title: "Coffee Shop – Romană Square",
    category: "HoReCa",
    location: "Bucharest",
    beforeImg: cafeBeforeImg,
    afterImg: cafeAfterImg,
    summary: "Warm ambiance, better product highlight, 32% energy savings with track lights CRI 95, 3000K.",
    energySavings: 32,
    cri: 95,
    luxAvg: 420,
  },
  {
    id: "2",
    title: "Boutique Fashion Store",
    category: "retail",
    location: "Old Town",
    beforeImg: retailBeforeImg,
    afterImg: retailAfterImg,
    summary: "Accent lighting creates premium atmosphere, product colors pop with CRI 95, 38% energy reduction.",
    energySavings: 38,
    cri: 95,
    luxAvg: 550,
  },
  {
    id: "3",
    title: "Tech Startup Office",
    category: "office",
    location: "Business District",
    beforeImg: officeBeforeImg,
    afterImg: officeAfterImg,
    summary: "Balanced task & ambient lighting with DALI dimming scenes, improved productivity, 28% lower consumption.",
    energySavings: 28,
    cri: 90,
    luxAvg: 480,
  },
  {
    id: "4",
    title: "Fine Dining Restaurant",
    category: "HoReCa",
    location: "Historic Center",
    beforeImg: restaurantBeforeImg,
    afterImg: restaurantAfterImg,
    summary: "2700K ambient with table accent spots creates intimate atmosphere, perfect food presentation.",
    energySavings: 35,
    cri: 95,
    luxAvg: 320,
  },
  {
    id: "5",
    title: "Co-working Space",
    category: "office",
    location: "Creative Quarter",
    beforeImg: officeBeforeImg,
    afterImg: officeAfterImg,
    summary: "Flexible lighting zones with smart controls, optimal 4000K work temperature throughout.",
    energySavings: 42,
    cri: 90,
    luxAvg: 500,
  },
  {
    id: "6",
    title: "Luxury Retail Showroom",
    category: "retail",
    location: "Premium Mall",
    beforeImg: retailBeforeImg,
    afterImg: retailAfterImg,
    summary: "Museum-quality lighting with narrow beam accents, creates exclusive shopping experience.",
    energySavings: 31,
    cri: 98,
    luxAvg: 600,
  },
];

const ProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Lighting{" "}
            <span className="bg-gradient-after bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore how we've revolutionized spaces through strategic lighting design
          </p>
        </div>

        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-fade-in-up">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;