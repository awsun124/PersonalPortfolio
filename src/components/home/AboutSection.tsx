import { useState } from "react";
import HobbyIllustration, { type Hobby } from "./HobbyIllustration";
import kayakImg from "@/assets/kayak.png";
import saxophoneImg from "@/assets/saxophone.png";
import soccerImg from "@/assets/soccer-action.png";

const interests: { hobby: Hobby; image: string; alt: string; description: string }[] = [
  {
    hobby: "Soccer",
    image: soccerImg,
    alt: "Andy playing soccer",
    description:
      "I’ve been playing since I was five, and today I play for Duke Club Soccer. The field has always felt like a second home.",
  },
  {
    hobby: "Kayaking",
    image: kayakImg,
    alt: "Kayaking",
    description:
      "Kayaking is one of my favorite ways to explore somewhere new, from the coast of Myrtle Beach to the waters around Acadia National Park.",
  },
  {
    hobby: "Saxophone",
    image: saxophoneImg,
    alt: "Playing the saxophone",
    description:
      "I can play alto and tenor saxophone! Glazunov's Concerto is probably my favorite piece I have learned.",
  },
];

const AboutSection = () => {
  const [openCaption, setOpenCaption] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
  <section id="about" className="scroll-mt-32 pt-12 space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-slide-up">
      About
    </h2>
    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-slide-up stagger-2">
      Soccer, saxophone, and kayaking are just a few of my hobbies outside of classes and code. Sometimes, they even turn into projects! They keep me creative, curious, and open to new experiences.
    </p>
    <div>
      <p className="text-right text-sm tracking-wide text-muted-foreground mb-4">hover to go beyond the lines ↗</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const revealed = hoveredCard === index || openCaption === index;
          return (
            <button
              key={interest.hobby}
              type="button"
              aria-label={`${interest.hobby}: reveal photo and story`}
              aria-expanded={revealed}
              aria-controls={`interest-caption-${index}`}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches) setHoveredCard(index);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") { setHoveredCard(null); setOpenCaption(null); }
              }}
              onClick={() => { setOpenCaption((current) => current === index ? null : index); setHoveredCard(null); }}
              onKeyDown={(event) => {
                if (event.key === "Escape") { setOpenCaption(null); setHoveredCard(null); }
              }}
              data-revealed={revealed}
              className="hobby-card flex flex-col w-full min-w-0 rounded-2xl text-left"
            >
              <span className={`relative block w-full shrink-0 aspect-[5/4] overflow-hidden rounded-2xl border transition-colors duration-150 ${revealed ? "border-accent/70" : "border-border"}`}>
                <span className={`absolute inset-0 transition-opacity duration-300 ${revealed ? "opacity-0 delay-150" : "opacity-100 delay-0"}`}>
                  <HobbyIllustration hobby={interest.hobby} />
                </span>
                <img
                  src={interest.image}
                  alt={interest.alt}
                  loading="lazy"
                  aria-hidden={!revealed}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${revealed ? "opacity-100 delay-150" : "opacity-0 delay-0"}`}
                />
              </span>
              <span className="block w-full text-center text-sm tracking-[0.2em] uppercase text-muted-foreground mt-4">{interest.hobby}</span>
              <span
                id={`interest-caption-${index}`}
                aria-hidden={!revealed}
                className={`block mt-3 text-base leading-relaxed text-muted-foreground transition-opacity duration-300 ${revealed ? "opacity-100 delay-150" : "opacity-0 delay-0"}`}
              >
                {interest.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
