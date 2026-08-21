import type { LucideIcon } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureListProps = {
  features: Feature[];
};

const FeatureList = ({ features }: FeatureListProps) => (
  <div className="grid gap-4">
    {features.map(({ title, description, icon: Icon }) => (
      <article
        key={title}
        className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    ))}
  </div>
);

export default FeatureList;
