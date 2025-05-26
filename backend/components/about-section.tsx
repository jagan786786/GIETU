import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Our University</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Founded in 1997, our university has grown into a premier institution dedicated to academic excellence,
            innovation, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/vision.jpg?height=600&width=800"
              alt="University campus aerial view"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission & Vision</h3>
            <p className="text-slate-600 mb-6">
              We strive to create a learning environment that fosters critical thinking, creativity, and ethical
              leadership. Our vision is to be a globally recognized institution that transforms lives through education,
              research, and innovation.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Ranked among top 50 universities nationwide",
                "NAAC 'A++' accredited institution",
                "ISO 9001:2015 certified for quality management",
                "Recognized by UGC and AICTE",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { name: "UGC", image: "/images/download (1).jpeg?height=60&width=60" },
                { name: "NAAC", image: "/images/download.jpeg?height=60&width=60" },
                { name: "AICTE", image: "/images/download (2).jpeg?height=60&width=60" },
                { name: "NBA", image: "/images/Vision.jpg?height=60&width=60" },
              ].map((badge, index) => (
                <div key={index} className="bg-white p-2 rounded-md shadow-sm">
                  <Image
                    src={badge.image || "/images/download (1).jpeg"}
                    alt={badge.name}
                    width={60}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
