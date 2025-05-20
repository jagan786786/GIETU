import Link from "next/link";
import { Award, BookOpen, Users, MapPin, Trophy, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import FacultySection from "@/components/faculty-section";
import AchievementsSection from "@/components/achievements-section";
import CampusLifeSection from "@/components/campus-life-section";
import SportsSection from "@/components/sports-section";
import CulturalSection from "@/components/cultural-section";
import AdmissionSection from "@/components/admission-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Quick Links */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                icon: <BookOpen className="h-6 w-6" />,
                label: "Programs",
                href: "#programs",
              },
              {
                icon: <Users className="h-6 w-6" />,
                label: "Faculty",
                href: "#faculty",
              },
              {
                icon: <Award className="h-6 w-6" />,
                label: "Achievements",
                href: "#achievements",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                label: "Campus",
                href: "#campus",
              },
              {
                icon: <Trophy className="h-6 w-6" />,
                label: "Sports",
                href: "#sports",
              },
              {
                icon: <Music className="h-6 w-6" />,
                label: "Cultural",
                href: "#cultural",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-slate-100 p-3 rounded-full mb-2">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ProgramsSection />
      <AdmissionSection />
      <FacultySection />
      <AchievementsSection />
      <CampusLifeSection />
      <SportsSection />
      <CulturalSection />

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Begin Your Academic Journey Today
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-slate-300">
            Join our vibrant community of learners and innovators. Applications
            for the upcoming academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Schedule a Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
