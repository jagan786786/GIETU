import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Linkedin, Mail } from "lucide-react"

export default function FacultySection() {
  const facultyMembers = [
    {
      name: "Dr. Kakita Murali Gopal",
      position: "Dean, School of Engineering",
      image: "/images/163719.jpeg?height=400&width=400",
      specialization: "Artificial Intelligence",
      education: "PhD, Stanford University",
      publications: 45,
    },
    {
      name: "Dr. Sachikant Dash",
      position: "Head, Department of Computer Science",
      image: "/images/263231.jpg?height=400&width=400",
      specialization: "Machine Learning",
      education: "PhD, MIT",
      publications: 38,
    },
    {
      name: "Dr. Ranjit Panigrahi",
      position: "Professor, School of Business",
      image: "/images/images.jpeg?height=400&width=400",
      specialization: "Finance & Economics",
      education: "PhD, Harvard University",
      publications: 32,
    },
    {
      name: "Dr. Bhabani Shankar Panda",
      position: "Professor, School of Sciences",
      image: "/images/images (1).jpeg?height=400&width=400",
      specialization: "Quantum Physics",
      education: "PhD, Caltech",
      publications: 52,
    },
    {
      name: "Prof. Archana Pattnaik",
      position: "Head, Department of Arts",
      image: "/images/175927.jpg?height=400&width=400",
      specialization: "Modern Literature",
      education: "PhD, GIET University",
      publications: 28,
    },
  ]

  return (
    <section id="faculty" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Distinguished Faculty</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Learn from world-class professors who are leaders in their fields
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {facultyMembers.map((faculty, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="overflow-hidden h-full">
                  <div className="aspect-square relative">
                    <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{faculty.name}</h3>
                    <p className="text-slate-600 mb-3">{faculty.position}</p>

                    <div className="space-y-2 text-sm mb-4">
                      <p>
                        <span className="font-medium">Specialization:</span> {faculty.specialization}
                      </p>
                      <p>
                        <span className="font-medium">Education:</span> {faculty.education}
                      </p>
                      <p>
                        <span className="font-medium">Publications:</span> {faculty.publications}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="w-full">
                        <Mail className="h-4 w-4 mr-2" /> Contact
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Linkedin className="h-4 w-4 mr-2" /> Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="mt-8 text-center">
          <Button>View All Faculty Members</Button>
        </div>
      </div>
    </section>
  )
}
