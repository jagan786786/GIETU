import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function SportsSection() {
  const sportsFacilities = [
    { name: "Olympic-sized Swimming Pool", image: "/placeholder.svg?height=300&width=400" },
    { name: "Indoor Sports Complex", image: "/placeholder.svg?height=300&width=400" },
    { name: "Football Stadium", image: "/placeholder.svg?height=300&width=400" },
    { name: "Cricket Ground", image: "/placeholder.svg?height=300&width=400" },
    { name: "Tennis Courts", image: "/placeholder.svg?height=300&width=400" },
    { name: "Basketball Courts", image: "/placeholder.svg?height=300&width=400" },
  ]

  const sportsAchievements = [
    "National Champions in Inter-University Cricket Tournament 2023",
    "Silver Medal in National Swimming Championship 2022",
    "Gold Medal in State-level Basketball Tournament 2023",
    "Winners of Regional Football League 2022",
  ]

  return (
    <section id="sports" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sports Facilities</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We believe in the holistic development of our students through sports and physical activities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sportsFacilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{facility.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800 text-white rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Trophy className="h-8 w-8 mr-4" />
            <h3 className="text-2xl font-bold">Sports Achievements</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sportsAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-slate-700 rounded-full p-2 mr-3">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                </div>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
