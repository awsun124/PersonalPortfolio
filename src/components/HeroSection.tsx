import profileImg from "@/assets/profile.png";
import soccerImg from "@/assets/soccer-action.png";
import kayakImg from "@/assets/kayak.png";
import saxophoneImg from "@/assets/saxophone.png";

const HeroSection = () => {
  return (
    <div className="my-12 animate-fade-in space-y-6">
      <section className="relative rounded-[2.5rem] overflow-hidden bg-muted">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
          {/* Text content */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Hi, I'm Andy
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              I am a student at Duke University, studying Computer Science and Statistics.
            </p>
          </div>

          {/* Profile picture */}
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0 animate-scale-in">
            <img
              src={profileImg}
              alt="Andy Sun"
className="w-full h-full object-cover object-[55%_40%]"
            />
          </div>
        </div>
      </section>

      <div id="about" className="pt-12 space-y-8">
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-slide-up stagger-2">
          I'm passionate about using technology and data to understand real-world problems and build meaningful tools. Outside of academics, I enjoy playing soccer, kayaking, and playing the saxophone!
        </p>
        <div className="grid grid-cols-3 gap-4 animate-scale-in">
          <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={soccerImg}
              alt="Andy playing soccer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm md:text-base text-center leading-relaxed">Soccer helps me thrive in team environments, where I've learned to communicate clearly, think creatively, and lead effectively.</p>
            </div>
          </div>
          <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={kayakImg}
              alt="Kayaking"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm md:text-base text-center leading-relaxed">Kayaking has taught me to stay patient, adapt to challenges, and persevere through difficult conditions.</p>
            </div>
          </div>
          <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={saxophoneImg}
              alt="Playing the saxophone"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm md:text-base text-center leading-relaxed">Saxophone reminds me that mastering anything takes consistent practice and a willingness to learn from mistakes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;