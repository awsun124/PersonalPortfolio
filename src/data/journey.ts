export type JourneyMilestone = {
  id: number;
  date: string;
  title: string;
  description: string;
  links?: { href: string; label: string }[];
};

export const journey: JourneyMilestone[] = [
  {
    id: 1,
    date: "2020–2023",
    title: "Math → programming",
    description: "I first got into problem-solving through math competitions like MATHCOUNTS and AIME. That eventually led me to programming, where I learned Java, competed in ACSL, and helped build Carmates, a student carpooling app.",
    links: [{ href: "/project/carmates-app", label: "Carmates" }]
  },
  {
    id: 2,
    date: "2023–2025",
    title: "Exploring at NCSSM",
    description: "At the North Carolina School of Science and Mathematics (NCSSM), I started combining math and programming through Python and computational science research. Since I’ve always loved soccer, I studied whether a player’s movements could help predict penalty kick direction. I also spent a summer at Penn’s M&TSI working on BinBot, an AI-powered recycling sorter.",
    links: [
      { href: "/project/penalty-kick-prediction", label: "Penalty kick research" },
      { href: "/project/binbot-recycling", label: "BinBot" }
    ]
  },
  {
    id: 3,
    date: "Fall 2025–Spring 2026",
    title: "Starting at Duke",
    description: "At Duke, I chose to study Computer Science and Statistical Science to keep exploring the subjects I enjoyed most. I also worked with Suncast Media through Duke Impact Investing Group, using Python to analyze podcast data and getting my first experience working with real-world data outside the classroom.",
    links: [{ href: "/project/duke-impact-investing-suncast", label: "Suncast Media" }]
  },
  {
    id: 4,
    date: "Spring–Summer 2026",
    title: "Working in industry",
    description: "At SportsMEDIA Technology (SMT), I worked with APIs and helped test applications supporting Roland-Garros and Wimbledon. Later that summer at Aspida, I contributed to an AI chatbot and learned more about frontend development, backend integration, and building reliable AI-powered features.",
    links: [{ href: "/project/aspida-ai-chatbot", label: "Aspida AI chatbot" }]
  },
  {
    id: 5,
    date: "Summer 2026",
    title: "Getting into machine learning",
    description: "I wanted to better understand the machine learning behind the tools I was using, so I started learning PyTorch and working through Dive into Deep Learning. I turned that into Spectre, a music classification and recommendation project that let me learn by building something around a topic I already enjoyed.",
    links: [{ href: "/project/spectre-music-classifier", label: "Spectre" }]
  },
  {
    id: 6,
    date: "Now",
    title: "Still exploring",
    description: "I’m continuing my studies at Duke and taking courses in databases and machine learning. I’m still exploring what areas of computer science I enjoy most, and I want to keep building, trying new things, and learning from the people I work with."
  }
];
