import { Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Want to{" "}
              <span className="bg-gradient-after bg-clip-text text-transparent">
                transform
              </span>{" "}
              your space too?
            </h2>
            <p className="text-xl text-muted-foreground">
              Send your layout or photos – we'll reply within 24 hours
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-card animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="text-sm font-medium mb-2 block">
                  Project Type
                </label>
                <Input 
                  id="project"
                  placeholder="e.g., Restaurant, Office, Retail" 
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Tell us about your space
                </label>
                <Textarea 
                  id="message"
                  placeholder="Describe your current lighting challenges and what you'd like to achieve..." 
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>We typically respond within 24 hours</span>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 shadow-glow-after transition-all duration-300 hover:scale-105"
              >
                Get Custom Proposal
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Or reach us directly
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="mailto:hello@lumina.design" className="hover:text-primary transition-colors">
                hello@lumina.design
              </a>
              <a href="tel:+40123456789" className="hover:text-primary transition-colors">
                +40 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;