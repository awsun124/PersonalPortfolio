export type JourneyMilestone = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  link?: { href: string; label: string };
};

export const journey: JourneyMilestone[] = [
  {
    id: 1,
    date: "2020–2021",
    title: "It started with math.",
    subtitle: "MATHCOUNTS",
    description: "Math was my first real academic interest. I competed in MATHCOUNTS during the 2020–2021 school year and also qualified for AIME for the first time, before I had ever taken a computer science class. I loved the problem-solving side of math, and that interest would eventually lead me toward programming."
  },
  {
    id: 2,
    date: "2021–2022",
    title: "I discovered programming.",
    subtitle: "Intro to Computer Science · Java · ACSL",
    description: "I took my first computer science course and started programming in Java. That same year, I competed in the American Computer Science League (ACSL) for the first time and reached the finals. It was my first real introduction to thinking computationally instead of just mathematically."
  },
  {
    id: 3,
    date: "2022–2023",
    title: "From learning to building.",
    subtitle: "AP Computer Science A · ACSL · Carmates",
    description: "I continued learning Java through AP Computer Science A and returned to ACSL, reaching the finals for a second year. More importantly, I started using CS to actually build things. As part of a team, I helped create Carmates, a carpool-matching app for students. We reached the Top 8 out of roughly 60 teams in the North Carolina Ready Set App Challenge and presented our project at Lenovo headquarters.",
    link: {
      href: "/project/carmates-app",
      label: "Carmates"
    }
  },
  {
    id: 4,
    date: "2023–2024",
    title: "A new environment.",
    subtitle: "NCSSM · Python · Computational Science",
    description: "I moved to the North Carolina School of Science and Mathematics (NCSSM), where I started exploring computing beyond what I had done before. Cryptography gave me my first experience with Python, while Numerical Analysis connected computation back to my interest in math. I also joined Research in Computational Science and began exploring whether data could predict the direction of soccer penalty kicks."
  },
  {
    id: 5,
    date: "2023–2025",
    title: "When soccer met computation.",
    subtitle: "Research in Computational Science",
    description: "For my computational science research, I combined one of my oldest interests, soccer, with data and computation. I analyzed professional penalty kicks, extracted biomechanical features from images, and used them to build a logistic regression model for predicting kick direction. The final model reached 85% accuracy.",
    link: {
      href: "/project/penalty-kick-prediction",
      label: "Penalty kick research"
    }
  },
  {
    id: 6,
    date: "Summer 2024",
    title: "Building beyond software.",
    subtitle: "Penn M&TSI · BinBot",
    description: "At Penn's Management & Technology Summer Institute, I got to explore technology from both the engineering and business sides. My team built BinBot, a recycling sorter that integrated AI to identify and sort waste, and developed a business plan around the product.",
    link: {
      href: "/project/binbot-recycling",
      label: "BinBot"
    }
  },
  {
    id: 7,
    date: "2024–2025",
    title: "One chapter ends, another begins.",
    subtitle: "NCSSM → Duke",
    description: "I finished my computational science research, graduated from NCSSM, and got into Duke. I decided to study Computer Science and Statistical Science, bringing together the two areas that had gradually become the center of what I wanted to explore."
  },
  {
    id: 8,
    date: "2025–2026",
    title: "Going deeper.",
    subtitle: "Duke · Computer Science + Statistical Science",
    description: "At Duke, I started going deeper into the foundations behind the things I had been building. I took courses including Data Structures & Algorithms and Probability while continuing to explore where software, data, and statistics intersect."
  },
  {
    id: 9,
    date: "2025–2026",
    title: "Using data outside the classroom.",
    subtitle: "Duke Impact Investing Group · Data Analytics",
    description: "I joined Duke Impact Investing Group as a Data Analyst, where I work across data analytics, automation, and technical consulting. In Spring 2026, I worked with Suncast Media, using Python to analyze a dataset of more than 900 podcast episodes and helping build tools and workflows around their data.",
    link: {
      href: "/project/duke-impact-investing-suncast",
      label: "Suncast"
    }
  },
  {
    id: 10,
    date: "Spring 2026",
    title: "My first internship.",
    subtitle: "SMT · Product Development",
    description: "At SMT, I got my first experience working on software in a professional environment. I worked with REST APIs using Postman and Swagger and performed regression testing across more than 100 test cases for applications supporting Roland-Garros and Wimbledon. It was my first look at how software gets tested and maintained beyond personal and school projects."
  },
  {
    id: 11,
    date: "Summer 2026",
    title: "Building AI in production.",
    subtitle: "Aspida · Software Engineering",
    description: "During my summer 2026 internship at Aspida, I worked on an AI-powered chatbot prototype, contributing to React/TypeScript frontend features and backend API integration. I also worked with intent classification, knowledge retrieval, source citations, and application logging and metrics to support debugging and evaluation.",
    link: {
      href: "/project/aspida-ai-chatbot",
      label: "Aspida"
    }
  },
  {
    id: 12,
    date: "Summer 2026",
    title: "Down the ML rabbit hole.",
    subtitle: "Dive into Deep Learning · Spectre",
    description: "I wanted to understand machine learning beyond simply using AI tools, so I started reading Dive into Deep Learning and experimenting on my own. That curiosity eventually became Spectre, a music classification and recommendation project I built using PyTorch. I trained a CNN on Mel spectrograms and used learned embeddings and cosine similarity to recommend similar music.",
    link: {
      href: "/project/spectre-music-classifier",
      label: "Spectre"
    }
  },
  {
    id: 13,
    date: "NOW",
    title: "Still exploring.",
    subtitle: "Duke · Databases · Machine Learning · What's next?",
    description: "I'm currently continuing my Computer Science and Statistical Science studies at Duke, taking courses including Database Systems and Elements of Machine Learning. I'm especially interested in continuing to explore software engineering, machine learning, and AI and seeing where those interests take me next."
  }
];
