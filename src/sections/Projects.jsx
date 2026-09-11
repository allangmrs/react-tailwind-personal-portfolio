import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Course Recommendation System",
    description:
      "An academic course recommendation system that uses graph algorithms to analyze curriculum dependencies, scheduling conflicts, and course priorities. Developed in Python as part of a university project.",
    image: "/projects/course-recommendation.png",
    tags: ["Python", "Graph Algorithms", "Data Structures"],
    link: "",
    github: "",
  },
  {
    title: "Sell-a-Spell",
    description:
      "A Unity roguelike developed for SoloDev 2026, featuring modular combat, dialogue, quest, and scene transition systems. Built with a focus on reusable components and software architecture.",
    image: "/projects/sell-a-spell.png",
    tags: ["Unity", "C#", "Software Architecture", "Game Development"],
    link: "",
    github: "",
  },
  {
    title: "Agent Disco",
    description:
      "A game jam project built with Unity and C#, featuring challenging obstacles and polished gameplay. Ranked #28 in Enjoyment and #84 Overall at Brackeys Game Jam 2025.2.",
    image: "",
    tags: ["Unity", "C#", "Game Development"],
    link: "#",
    github: "#",
  },
  {
    title: "Eddie's Bizarre Adventure",
    description:
      "A challenging 2D platformer created for Brackeys Game Jam 2026.2, featuring deceptive obstacles, a fairy companion, and custom dialogue, camera, and scene transition systems.",
    image: "/projects/brackeys-2026.png",
    tags: ["Unity", "C#", "Game Development", "DOTween"],
    link: "",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3l mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p>
            Here is my selection of some of the most interesting projects. Each
            project showcases my skills, creativity, and dedication to
            delivering high-quality software solutions.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/*Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-l group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/allangmrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
            View GitHub
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
