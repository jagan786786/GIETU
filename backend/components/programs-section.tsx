import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export default function ProgramsSection() {
  const programCategories = [
    { id: "undergraduate", label: "Undergraduate" },
    { id: "postgraduate", label: "Postgraduate" },
    { id: "phd", label: "PhD Programs" },
    { id: "diploma", label: "Diploma Courses" },
  ];

  const programs = {
    undergraduate: [
      {
        title: "Bachelor of Technology",
        duration: "4 years",
        departments: ["Computer Science", "Electrical", "Mechanical", "Civil"],
      },
      {
        title: "Bachelor of Business Administration",
        duration: "3 years",
        departments: ["Finance", "Marketing", "HR"],
      },
      {
        title: "Bachelor of Science",
        duration: "3 years",
        departments: ["Physics", "Chemistry", "Mathematics"],
      },
      {
        title: "Bachelor of Arts",
        duration: "3 years",
        departments: ["Economics", "Psychology", "English Literature"],
      },
    ],
    postgraduate: [
      {
        title: "Master of Technology",
        duration: "2 years",
        departments: ["AI & ML", "Data Science", "IoT"],
      },
      {
        title: "Master of Business Administration",
        duration: "2 years",
        departments: ["Finance", "Marketing", "Operations"],
      },
      {
        title: "Master of Science",
        duration: "2 years",
        departments: ["Applied Physics", "Biotechnology"],
      },
      {
        title: "Master of Arts",
        duration: "2 years",
        departments: ["Economics", "Public Policy"],
      },
    ],
    phd: [
      {
        title: "Doctor of Philosophy in Engineering",
        duration: "3-5 years",
        departments: ["Computer Science", "Electrical", "Mechanical"],
      },
      {
        title: "Doctor of Philosophy in Sciences",
        duration: "3-5 years",
        departments: ["Physics", "Chemistry", "Mathematics"],
      },
      {
        title: "Doctor of Philosophy in Management",
        duration: "3-5 years",
        departments: ["Finance", "Marketing", "Strategy"],
      },
      {
        title: "Doctor of Philosophy in Humanities",
        duration: "3-5 years",
        departments: ["Economics", "Psychology", "Literature"],
      },
    ],
    diploma: [
      {
        title: "Diploma in Engineering",
        duration: "3 years",
        departments: ["Computer Science", "Electrical", "Mechanical"],
      },
      {
        title: "Diploma in Business Management",
        duration: "1 year",
        departments: ["Finance", "Marketing", "HR"],
      },
      {
        title: "Certificate in Data Science",
        duration: "6 months",
        departments: ["Python", "Machine Learning", "Data Visualization"],
      },
      {
        title: "Certificate in Digital Marketing",
        duration: "6 months",
        departments: ["SEO", "Social Media", "Content Marketing"],
      },
    ],
  };

  return (
    <section id="programs" className="pt-50 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Explore our diverse range of programs designed to prepare you for
            success in your chosen field
          </p>
        </div>

        <Tabs defaultValue="undergraduate" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {programCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(programs).map(([category, programList]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programList.map((program, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-500 mb-2">
                        Duration: {program.duration}
                      </p>
                      <p className="text-sm font-medium mb-1">
                        Specializations:
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {program.departments.map((dept, i) => (
                          <li key={i}>• {dept}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild>
                  <a href={`/programs/${category}`}>
                    View All{" "}
                    {programCategories.find((c) => c.id === category)?.label}{" "}
                    Programs
                  </a>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
