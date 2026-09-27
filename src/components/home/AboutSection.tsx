import kayakImg from "@/assets/kayak.png";
import saxophoneImg from "@/assets/saxophone.png";
import soccerImg from "@/assets/soccer-action.png";

const interests = [
  {
    image: soccerImg,
    alt: "Andy playing soccer",
    description:
      "I’ve been playing since I was five, and today I play for Duke Club Soccer. The field has always felt like a second home.",
  },
  {
    image: kayakImg,
    alt: "Kayaking",
    description:
      "Kayaking is one of my favorite ways to explore somewhere new, from the coast of Myrtle Beach to the waters around Acadia National Park.",
  },
  {
    image: saxophoneImg,
    alt: "Playing the saxophone",
    description:
      "I played alto and tenor saxophone throughout middle and high school. Glazunov’s Concerto is still my favorite piece I’ve performed.",
  },
];

const AboutSection = () => {
  const [openCaption, setOpenCaption] = useState<number | null>(null);

  return (
  <section id="about" className="scroll-mt-32 pt-12 space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-slide-up">
      About
    </h2>
    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-slide-up stagger-2">
      Soccer, saxophone, and kayaking fill the time between classes and code. Sometimes curiosity turns those interests into a project. They also keep me creative, curious, and open to new experiences.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-scale-in">
      {interests.map((interest, index) => (
        <button
          key={interest.alt}
          type="button"
          aria-label={interest.alt}
          aria-expanded={openCaption === index}
          aria-controls={`interest-caption-${index}`}
          onClick={() => setOpenCaption((current) => current === index ? null : index)}
          onKeyDown={(event) => { if (event.key === "Escape") setOpenCaption(null); }}
          className="interest-photo group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
        >
          <img
            src={interest.image}
            alt={interest.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span
            id={`interest-caption-${index}`}
            className={`interest-caption absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center p-4 ${openCaption === index ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            <span className="text-white text-sm md:text-base text-center leading-relaxed">
              {interest.description}
            </span>
          </span>
        </button>
      ))}
    </div>
  </section>
  );
};

export default AboutSection;
import { useState } from "react";
