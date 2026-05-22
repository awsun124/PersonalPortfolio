import Header from "@/components/Header";
import { ArrowLeft, Users, MapPin, MessageSquare, Camera, Shield } from "lucide-react";

const CarmatesProject = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        {/* Title & Date */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
            Carmates App: Smart Carpool Matching
          </h1>
          <p className="text-lg text-muted-foreground">2023</p>
        </header>

        {/* Summary */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          Carmates is a mobile application designed to help students coordinate carpools for after-school activities. The app connects students with others attending similar activities and allows them to organize rides through shared schedules, messaging, and location features. We competed in the Ready Set App challenge and advanced to the finalist stage (Top 8 out of ~60 teams), presenting our project at Lenovo headquarters.
        </p>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Overview</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Many students are unable to attend after-school clubs and activities because they simply don't have reliable transportation home. This issue disproportionately affects:
          </p>
          <ul className="space-y-3 mb-6 ml-1">
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Students whose parents work full-time and can't pick them up
            </li>
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Students in single-parent households with limited availability
            </li>
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              Students who live farther from school or don't have access to a car
            </li>
          </ul>
          <p className="text-foreground/80 leading-relaxed">
            Our project aimed to address this by creating a mobile app where students can find or host carpools based on their location and activity schedules.
          </p>
        </section>

        {/* Development */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Development</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We built Carmates combining multiple tools and services to create a functional prototype:
          </p>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Thunkable</h4>
                <p className="text-sm text-foreground/70">We used Thunkable as our primary development platform to build and deploy the mobile app.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Figma</h4>
                <p className="text-sm text-foreground/70">We designed the user interface in Figma.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Google Firebase</h4>
                <p className="text-sm text-foreground/70">We integrated Firebase to handle user authentication, providing a secure and reliable login system for the app.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">API Integration</h4>
                <p className="text-sm text-foreground/70">We built a distance detection system using an API to estimate how far users are from potential drivers and hosts, helping students find carpools that are geographically convenient.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-muted/30">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Cloudinary</h4>
                <p className="text-sm text-foreground/70">We used Cloudinary, enabling users to upload and store profile pictures within the app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Impact</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            After-school activities play a vital role in helping students pursue their interests, develop new skills, and connect with peers who share similar passions. But for too many students, getting home after these activities is a real barrier to participation.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Carmates addresses this challenge, making it easy for students to organize carpools with each other. The broader impact includes:
          </p>
          <ul className="space-y-3 ml-1">
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <strong>Reducing transportation barriers</strong> so more students can participate in clubs, sports, and extracurriculars
            </li>
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <strong>Saving time and money</strong> for families by sharing rides instead of making separate trips
            </li>
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <strong>Building community</strong> by connecting students and families who live near each other
            </li>
            <li className="flex items-start gap-3 text-foreground/80">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <strong>Promoting equity</strong> in access to extracurricular opportunities regardless of family circumstances
            </li>
          </ul>
        </section>

        {/* Finals Presentation */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Finals Presentation</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The slideshow we presented at the Ready Set App finals at Lenovo headquarters.
          </p>
          <div className="rounded-2xl border border-border overflow-hidden mb-4 bg-muted aspect-video">
            <object
              data="/documents/RSA_Finals_Presentation.pdf"
              type="application/pdf"
              className="w-full h-[600px] md:h-[800px]"
            >
              <p className="p-8 text-center text-muted-foreground">
                PDF preview is not available in your browser.{" "}
                <a href="/documents/RSA_Finals_Presentation.pdf" download className="text-primary underline">Download the presentation</a> to view it.
              </p>
            </object>
          </div>
          <a
            href="/documents/RSA_Finals_Presentation.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Download Presentation
          </a>
        </section>

      </main>
    </div>
  );
};

export default CarmatesProject;
