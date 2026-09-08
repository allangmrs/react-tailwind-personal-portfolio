import { Code2, BrainCircuit, BookOpen, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code with a focus on good practices and thoughtful software design.",
  },
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description:
      "Applying algorithms, data structures, and analytical thinking to solve challenging problems.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Constantly expanding my skills through academic studies, personal projects, and hands-on experimentation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with others, sharing knowledge, and learning from different perspectives to build better software.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Driven by curiosity,
              <span className="font-serif italic font-normal text-white">
                {" "}
                built on solid foundations.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science undergraduate at UNIFEI, driven by
                curiosity and a genuine interest in understanding how software
                works. My academic journey has given me a strong foundation in
                programming, algorithms, and data structures, while personal and
                collaborative projects have helped me turn that knowledge into
                practical experience.
              </p>

              <p>
                I enjoy building software that challenges me to think beyond the
                code. My projects include a course recommendation system based
                on graph algorithms and games developed with Unity, where I've
                explored modular architecture, reusable systems, and
                problem-solving. These experiences have strengthened my interest
                in software engineering and motivated me to keep improving the
                way I design and build applications.
              </p>

              <p>
                I'm currently expanding my skills in C#/.NET and React, with a
                growing interest in backend development. I value clean code,
                collaboration, and continuous learning, and I'm always looking
                for opportunities to apply what I learn, take on new challenges,
                and grow as a software engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Great software starts with curiosity, solid foundations, and a
                willingness to keep learning. I believe in writing code that not
                only works, but is also clear, maintainable, and built to last."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
