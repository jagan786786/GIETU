import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Palette, Theater, Mic } from "lucide-react"

export default function CulturalSection() {
  const culturalEvents = [
    {
      name: "Annual Cultural Festival",
      image: "/placeholder.svg?height=400&width=600",
      description: "A week-long celebration of art, music, dance, and theater",
    },
    {
      name: "Inter-University Dance Competition",
      image: "/placeholder.svg?height=400&width=600",
      description: "Showcasing diverse dance forms from across the country",
    },
    {
      name: "Music Concert Series",
      image: "/placeholder.svg?height=400&width=600",
      description: "Featuring student bands and professional musicians",
    },
    {
      name: "Theater Productions",
      image: "/placeholder.svg?height=400&width=600",
      description: "Original plays and classic performances by our drama club",
    },
  ]

  const culturalClubs = [
    { icon: <Music className="h-5 w-5" />, name: "Music Club", members: 120 },
    { icon: <Palette className="h-5 w-5" />, name: "Fine Arts Society", members: 85 },
    { icon: <Theater className="h-5 w-5" />, name: "Drama Club", members: 75 },
    { icon: <Mic className="h-5 w-5" />, name: "Debate Society", members: 60 },
  ]

  return (
    <section id="cultural" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cultural Life</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Experience a vibrant cultural environment that celebrates creativity and diversity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cultural Events</h3>
            <p className="text-slate-600 mb-6">
              Our university hosts numerous cultural events throughout the academic year, providing students with
              opportunities to showcase their talents and engage with diverse art forms.
            </p>

            <div className="space-y-6">
              {culturalEvents.slice(0, 2).map((event, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover w-full sm:w-48 h-32"
                  />
                  <div>
                    <h4 className="font-medium">{event.name}</h4>
                    <p className="text-sm text-slate-500">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {culturalEvents.slice(2, 4).map((event, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full sm:w-48 h-32"
                />
                <div>
                  <h4 className="font-medium">{event.name}</h4>
                  <p className="text-sm text-slate-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6">Student Cultural Clubs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {culturalClubs.map((club, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-slate-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    {club.icon}
                  </div>
                  <h4 className="font-medium">{club.name}</h4>
                  <p className="text-sm text-slate-500">{club.members} members</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
