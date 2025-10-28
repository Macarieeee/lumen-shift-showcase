import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import BeforeAfterSlider from "./BeforeAfterSlider";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  summary: string;
  energySavings: number;
  cri: number;
  luxAvg: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border shadow-card hover:shadow-glow-after transition-all duration-300 hover:-translate-y-1">
      <BeforeAfterSlider 
        beforeImage={project.beforeImg}
        afterImage={project.afterImg}
        beforeAlt={`${project.title} - Before`}
        afterAlt={`${project.title} - After`}
      />
      
      <div className="p-4">
        <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {project.location}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;