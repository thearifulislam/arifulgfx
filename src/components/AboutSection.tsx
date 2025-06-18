import { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import aboutpic from "../assets/profile/aboutsection.png";
import cv from "../assets/resume/Ariful islam.pdf";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(target * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={countRef} className="text-4xl font-bold theme-color-primary">
      {count}+
    </div>
  );
};

const AboutSection = () => {
  const stats = [
    { number: 100, label: "Projects Completed" },
    { number: 50, label: "Industries Covered" },
    { number: 4, label: "Years Experience" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_var(--color-primary-light)_0%,_transparent_100%)] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--color-secondary-light)_0%,_transparent_100%)] opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Container */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Main Image with Frame */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-100" />
                <div className="relative bg-white p-4 rounded-3xl shadow-lg transform rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-100">
                  <img
                    src={aboutpic}
                    alt="Ariful Islam"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-dashed border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </div>

          {/* Content Container */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-5xl font-bold">
                  About <span className="theme-color-primary">Me</span>
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-1 w-12 theme-bg-primary rounded-full" />
                  <div className="h-1 w-6 theme-bg-primary/60 rounded-full" />
                  <div className="h-1 w-3 theme-bg-primary/30 rounded-full" />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Hi, I'm Ariful — a passionate Graphic Designer with 4+ years of
                  experience in brand identity design. I specialize in building
                  powerful visual identities that not only capture attention but
                  also align perfectly with a brand's purpose and values.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My mission is to help brands grow and thrive in the digital space
                  by designing visuals that speak their language and resonate with
                  their audience. Over the years, I've honed my skills in blending
                  creativity with strategy to deliver impactful design solutions.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute inset-0 theme-bg-primary/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                    <div className="relative p-6 bg-white/80 backdrop-blur rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
                      <Counter target={stat.number} />
                      <div className="text-gray-600 font-medium mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gray-900/20 rounded-full blur-lg transition-all duration-300 group-hover:blur-xl" />
                  <div className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#1f2937] text-white rounded-full font-medium">
                    Download CV
                    <Download className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-y-0.5" />
                  </div>
                </a>

                <div
                  className="text-3xl theme-color-primary"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontWeight: 600,
                  }}
                >
                  — Ariful Islam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
