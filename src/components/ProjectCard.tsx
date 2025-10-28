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
    <div className="flex flex-col items-center">
      <Card className="group overflow-hidden bg-card border-border shadow-card hover:shadow-glow-after transition-all duration-300">
        <BeforeAfterSlider 
          beforeImage={project.beforeImg}
          afterImage={project.afterImg}
          beforeAlt={`${project.title} - Before`}
          afterAlt={`${project.title} - After`}
        />
        
        <div className="p-6 text-center">
          <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-base text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {project.location}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;