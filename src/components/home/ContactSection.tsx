const ContactSection = () => (
  <div className="relative my-20">
    <section
      id="contact"
      className="space-panel relative z-10 rounded-[2.5rem] p-12 md:p-16 text-center animate-scale-in"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Contact Me
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed">
          Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/andy-sun-7b75a9266"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-blue-950/40"
          >
            LinkedIn
          </a>
          <a
            href="mailto:awsun1230@gmail.com"
            className="px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:scale-105 transition-all"
          >
            Email: awsun1230@gmail.com
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ContactSection;
