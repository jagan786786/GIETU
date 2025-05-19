import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/view.jpg?height=1080&width=1920"
          alt="University campus"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Empowering Future Leaders</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-100">
            Discover a world-class education that prepares you for success in a global society
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
