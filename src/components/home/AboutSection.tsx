import kayakImg from "@/assets/kayak.png";
import saxophoneImg from "@/assets/saxophone.png";
import soccerImg from "@/assets/soccer-action.png";

const interests = [
  {
    image: soccerImg,
    alt: "Andy playing soccer",
    description:
      "Soccer helps me thrive in team environments, where I've learned to communicate clearly, think creatively, and lead effectively.",
  },
  {
    image: kayakImg,
    alt: "Kayaking",
    description:
      "Kayaking has taught me to stay patient, adapt to challenges, and persevere through difficult conditions.",
  },
  {
    image: saxophoneImg,
    alt: "Playing the saxophone",
    description:
      "Saxophone reminds me that mastering anything takes consistent practice and a willingness to learn from mistakes.",
  },
];

const AboutSection = () => (
  <section id="about" className="scroll-mt-32 pt-12 space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white animate-slide-up">
      About
    </h2>
    <p className="text-slate-300 text-lg md:text-xl leading-relaxed animate-slide-up stagger-2">
      I'm passionate about using technology and data to understand real-world problems and build meaningful tools. Outside of academics, I enjoy playing soccer, kayaking, and playing the saxophone!
    </p>
    <div className="grid grid-cols-3 gap-4 animate-scale-in">
      {interests.map((interest) => (
        <article
          key={interest.alt}
          className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
        >
          <img
            src={interest.image}
            alt={interest.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-sm md:text-base text-center leading-relaxed">
              {interest.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AboutSection;
