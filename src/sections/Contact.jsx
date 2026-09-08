import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Let's{" "}
            <span className="font-serif italic font-normal text-white">
              connect.
            </span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-fade-in animation-delay-200">
            I'm currently looking for software engineering internship
            opportunities. Feel free to reach out if you'd like to connect,
            discuss my projects, or learn more about my experience.
          </p>

          {/* LinkedIn CTA */}
          <div className="animate-fade-in animation-delay-300">
            <a
              href="https://linkedin.com/in/allangmrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(32,178,166,0.3)] hover:-translate-y-1"
            >
              <FaLinkedinIn className="w-5 h-5" />
              Connect on LinkedIn
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};