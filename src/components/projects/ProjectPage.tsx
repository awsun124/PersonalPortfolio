import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useLayoutEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

type ProjectPageProps = {
  title: string;
  year: string;
  children: ReactNode;
  headerClassName?: string;
  titleClassName?: string;
};

const ProjectPage = ({
  title,
  year,
  children,
  headerClassName = "mb-10",
  titleClassName = "text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3",
}: ProjectPageProps) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
  <div className="project-background min-h-screen animate-fade-in">
    <Navbar />
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <a
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </a>

      <header className={headerClassName}>
        <h1 className={titleClassName}>{title}</h1>
        <p className="text-lg text-muted-foreground">{year}</p>
      </header>

      {children}
    </main>
  </div>
  );
};

export default ProjectPage;
