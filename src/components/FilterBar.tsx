import { Button } from "@/components/ui/button";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "retail", label: "Retail" },
  { id: "horeca", label: "HoReCa" },
  { id: "office", label: "Office" },
  { id: "residential", label: "Residential" },
];

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="w-full py-8 border-b border-border">
      <div className="container px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => onFilterChange(category.id)}
              className={
                activeFilter === category.id
                  ? "bg-primary hover:bg-primary/90 shadow-glow-after"
                  : "border-border hover:border-primary/50"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;