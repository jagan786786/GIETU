import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

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
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
  {
    name: "Prof. Archana Pattnaik",
    position: "Head, Department of Arts",
    image: "/images/175927.jpg?height=400&width=400",
    specialization: "Modern Literature",
    education: "PhD, GIET University",
    publications: 28,
  },
];

export default function AllFacultyPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
          All Faculty Members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="aspect-square relative">
                <Image
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{faculty.name}</h3>
                <p className="text-slate-600 mb-3">{faculty.position}</p>

                <div className="space-y-1 text-sm mb-4">
                  <p>
                    <span className="font-medium">Specialization:</span>{" "}
                    {faculty.specialization}
                  </p>
                  <p>
                    <span className="font-medium">Education:</span>{" "}
                    {faculty.education}
                  </p>
                  <p>
                    <span className="font-medium">Publications:</span>{" "}
                    {faculty.publications}
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="bg-slate-900 text-white hover:bg-white"
            asChild
          >
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
