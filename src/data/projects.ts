export type ProjectSummary = {
  id: string;
  title: string;
  category: string;
  year: string;
};

export const projects: ProjectSummary[] = [
  {
    id: "aspida-ai-chatbot",
    title: "Intelligent Information Assistant",
    category: "AI Systems",
    year: "2026",
  },
  {
    id: "duke-impact-investing-suncast",
    title: "Automated Data Integration System",
    category: "Data Systems & Analytics",
    year: "2026",
  },
  {
    id: "spectre-music-classifier",
    title: "Spectre Music Genre Classifier",
    category: "Machine Learning",
    year: "2026",
  },
  {
    id: "penalty-kick-prediction",
    title: "Predicting Penalty Kick Direction",
    category: "Machine Learning",
    year: "2025",
  },
  {
    id: "binbot-recycling",
    title: "BinBot Recycling Sorter",
    category: "Computer Vision",
    year: "2024",
  },
  {
    id: "carmates-app",
    title: "Carmates App",
    category: "App Development",
    year: "2023",
  },
];
