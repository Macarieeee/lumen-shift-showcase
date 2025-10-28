import { MapPin, TrendingDown, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
          </div>
          <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.summary}
        </p>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingDown className="w-3 h-3" />
              Energy
            </div>
            <p className="text-sm font-semibold text-primary">
              {project.energySavings}%
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Lightbulb className="w-3 h-3" />
              CRI
            </div>
            <p className="text-sm font-semibold">
              {project.cri}
            </p>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">
              Lux Avg
            </div>
            <p className="text-sm font-semibold">
              {project.luxAvg}
            </p>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full border-border hover:border-primary hover:text-primary"
        >
          View Full Case Study
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;