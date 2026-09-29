import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { journey } from "@/data/journey";
import "./JourneySection.css";

const JourneySection = () => {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="journey" aria-labelledby="journey-title" className="scroll-mt-32 py-12">
      <h2 id="journey-title" className="text-3xl md:text-4xl font-bold tracking-tight">
        My Journey So Far
      </h2>
      <p className="text-sm text-muted-foreground mt-3 mb-8">
        Tap a chapter to open it. On desktop, hover for a preview or click to keep it open.
      </p>
      <ol className="journey-timeline">
        {journey.map((milestone) => {
          const open = pinned === milestone.id || hovered === milestone.id;
          const panelId = `journey-panel-${milestone.id}`;
          const titleId = `journey-title-${milestone.id}`;

          return (
            <li key={milestone.id} className="journey-stop" data-open={open}>
              <span className="journey-dot" aria-hidden="true" />
              <article
                className="journey-card"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches) {
                    setHovered(milestone.id);
                  }
                }}
                onPointerLeave={() => setHovered(null)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setPinned(null);
                    setHovered(null);
                    event.currentTarget.querySelector("button")?.focus();
                  }
                }}
              >
                <h3>
                  <button
                    type="button"
                    className="journey-toggle"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => {
                      setPinned((current) => current === milestone.id ? null : milestone.id);
                      setHovered(null);
                    }}
                  >
                    <span className="block min-w-0">
                      <span className="block text-xs tracking-widest uppercase text-accent mb-2">{milestone.date}</span>
                      <span id={titleId} className="block text-lg sm:text-xl font-semibold leading-snug">{milestone.title}</span>
                    </span>
                    <Plus aria-hidden="true" className={`journey-plus w-4 h-4 shrink-0 mt-1 ${open ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={titleId} aria-hidden={!open} className="journey-details">
                  <div className="journey-details-inner">
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {milestone.description.split("Dive into Deep Learning").map((part, index) => (
                          <span key={index}>
                            {index > 0 && <em>Dive into Deep Learning</em>}
                            {part}
                          </span>
                        ))}
                      </p>
                      {milestone.links && (
                        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                          {milestone.links.map((link) => (
                            <Link key={link.href} to={link.href} tabIndex={open ? 0 : -1} className="inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4">
                              {link.label} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
        <li className="journey-continuation" aria-hidden="true"><ArrowDown className="w-4 h-4" /></li>
      </ol>
    </section>
  );
};

export default JourneySection;
