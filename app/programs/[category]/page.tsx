import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const programData = {
  undergraduate: [
    {
      title: "B. Tech in Computer Science & Engineering",
      duration: "4 years",
      departments: ["AI", "Machine Learning", "Cybersecurity"],
    },
    {
      title:
        "B. Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
      duration: "4 years",
      departments: ["AI", "Deep Learning", "NLP"],
    },
    {
      title: "B. Tech in Computer Science and Engineering (IoT)",
      duration: "4 years",
      departments: ["Embedded Systems", "IoT Security", "Sensor Networks"],
    },
    {
      title: "B. Tech in Computer Science and Engineering (Data Science)",
      duration: "4 years",
      departments: ["Big Data", "Machine Learning", "Data Mining"],
    },
    {
      title: "B. Tech in Computer Science and Technology",
      duration: "4 years",
      departments: ["Programming", "Networks", "Software Engineering"],
    },
    {
      title: "B. Tech in Agricultural Engineering",
      duration: "4 years",
      departments: ["Farm Machinery", "Irrigation", "Soil Science"],
    },
    {
      title: "B. Tech in Mechanical Engineering",
      duration: "4 years",
      departments: ["Thermodynamics", "CAD/CAM", "Robotics"],
    },
    {
      title: "B. Tech in Biotechnology",
      duration: "4 years",
      departments: ["Genetics", "Molecular Biology", "Bioinformatics"],
    },
    {
      title: "B. Tech in Chemical Engineering",
      duration: "4 years",
      departments: ["Process Engineering", "Polymer Science", "Thermodynamics"],
    },
    {
      title: "B. Tech in Civil Engineering",
      duration: "4 years",
      departments: ["Structural Engineering", "Transportation", "Hydraulics"],
    },
    {
      title: "B. Tech in Electrical Engineering",
      duration: "4 years",
      departments: ["Power Systems", "Control Systems", "Electric Machines"],
    },
    {
      title: "B. Tech in Electrical and Electronics Engineering",
      duration: "4 years",
      departments: ["Microcontrollers", "VLSI", "Embedded Systems"],
    },
    {
      title: "B. Tech in Electronics and Communication Engineering",
      duration: "4 years",
      departments: ["Signal Processing", "Communication Systems", "VLSI"],
    },
    {
      title: "B. Tech in Electronics Engineering (VLSI Design and Technology)",
      duration: "4 years",
      departments: ["VLSI", "Digital Design", "Semiconductor Devices"],
    },
    {
      title:
        "B. Tech in Electronics & Communication (Advanced Communication Technology)",
      duration: "4 years",
      departments: ["5G Networks", "Wireless Communication", "Optical Fiber"],
    },
    {
      title: "B.Sc. (Hons.) Agriculture",
      duration: "4 years",
      departments: ["Agronomy", "Horticulture", "Soil Science"],
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 years",
      departments: ["Marketing", "Finance", "HR"],
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 years",
      departments: ["Programming", "Databases", "Networking"],
    },
    {
      title: "B.Sc in Nursing",
      duration: "4 years",
      departments: ["Medical-Surgical", "Community Health", "Pediatrics"],
    },
  ],

  postgraduate: [
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 years",
      departments: ["Marketing", "Finance", "Operations"],
    },
    {
      title: "M. Tech in Computer Science & Engineering",
      duration: "2 years",
      departments: ["AI", "Cybersecurity", "Cloud Computing"],
    },
    {
      title: "M. Tech in Manufacturing Technology",
      duration: "2 years",
      departments: ["CNC", "Automation", "Quality Control"],
    },
    {
      title: "M. Tech in Heat Power and Thermal Engineering",
      duration: "2 years",
      departments: ["Thermodynamics", "Energy Systems", "Heat Transfer"],
    },
    {
      title: "M. Tech in Machine Design",
      duration: "2 years",
      departments: ["Stress Analysis", "CAD", "Mechanics"],
    },
    {
      title: "M. Tech in Biotechnology",
      duration: "2 years",
      departments: ["Genomics", "Proteomics", "Immunology"],
    },
    {
      title: "M. Tech in Chemical Engineering",
      duration: "2 years",
      departments: ["Process Dynamics", "Reaction Engineering", "Design"],
    },
    {
      title: "M. Tech in Structural Engineering",
      duration: "2 years",
      departments: ["Concrete Design", "Steel Structures", "Earthquake Engg."],
    },
    {
      title: "M. Tech in Construction Technology & Management",
      duration: "2 years",
      departments: [
        "Project Management",
        "Construction Planning",
        "Cost Estimation",
      ],
    },
    {
      title: "M. Tech in Power Electronics",
      duration: "2 years",
      departments: ["Converters", "Drives", "Renewable Energy"],
    },
    {
      title: "M. Tech in Electronics & Communication Engineering",
      duration: "2 years",
      departments: ["Signal Processing", "Microwave Engg.", "Antenna Design"],
    },
    {
      title:
        "M. Tech in Electronics & Communication (Advanced Communication Technology)",
      duration: "2 years",
      departments: ["5G", "IoT", "Wireless Systems"],
    },
    {
      title: "M. Tech in Electronics & Communication (VLSI Design)",
      duration: "2 years",
      departments: ["Chip Design", "Verilog", "EDA Tools"],
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 years",
      departments: ["Software Dev", "Database Systems", "AI"],
    },
    {
      title: "M.Sc in Physics",
      duration: "2 years",
      departments: ["Quantum Physics", "Optics", "Nuclear Physics"],
    },
    {
      title: "M.Sc in Chemistry",
      duration: "2 years",
      departments: ["Organic", "Inorganic", "Analytical"],
    },
    {
      title: "M.Sc in Mathematics",
      duration: "2 years",
      departments: ["Pure Math", "Applied Math", "Statistics"],
    },
    {
      title: "M.Sc in Life Science",
      duration: "2 years",
      departments: ["Genetics", "Cell Biology", "Ecology"],
    },
    {
      title: "M.Sc in Biotechnology",
      duration: "2 years",
      departments: ["Genetic Engineering", "Microbiology", "Biostatistics"],
    },
    {
      title: "M.A. in English",
      duration: "2 years",
      departments: ["Literature", "Linguistics", "Criticism"],
    },
    {
      title: "M.A. in Economics",
      duration: "2 years",
      departments: ["Macro", "Micro", "Econometrics"],
    },
  ],

  diploma: [
    {
      title: "Diploma in Civil Engineering",
      duration: "3 years",
      departments: [
        "Surveying",
        "Structural Drafting",
        "Construction Materials",
      ],
    },
    {
      title: "Diploma in Mechanical Engineering",
      duration: "3 years",
      departments: ["Mechanics", "Machine Tools", "Workshop Practice"],
    },
    {
      title: "Diploma in Electrical Engineering",
      duration: "3 years",
      departments: ["Basic Electrical", "Circuits", "Machines"],
    },
  ],

  phd: [
    {
      title: "Ph.D in Physics",
      duration: "3–5 years",
      departments: ["Quantum Mechanics", "Condensed Matter", "Astrophysics"],
    },
    {
      title: "Ph.D in Chemistry",
      duration: "3–5 years",
      departments: ["Organic", "Analytical", "Biochemistry"],
    },
    {
      title: "Ph.D in Mathematics",
      duration: "3–5 years",
      departments: ["Algebra", "Topology", "Number Theory"],
    },
    {
      title: "Ph.D in Biotechnology",
      duration: "3–5 years",
      departments: ["Genomics", "Molecular Bio", "Tissue Culture"],
    },
    {
      title: "Ph.D in Computer Science and Engineering",
      duration: "3–5 years",
      departments: ["AI", "Systems", "Networks"],
    },
    {
      title: "Ph.D in Computer Science and Application",
      duration: "3–5 years",
      departments: ["Software Engineering", "Databases", "Algorithms"],
    },
    {
      title: "Ph.D in Mechanical Engineering",
      duration: "3–5 years",
      departments: ["Design", "Thermal", "Manufacturing"],
    },
    {
      title: "Ph.D in Chemical Engineering",
      duration: "3–5 years",
      departments: ["Reaction Engineering", "Process Design"],
    },
    {
      title: "Ph.D in Electronics & Communication Engineering",
      duration: "3–5 years",
      departments: ["Communication", "Embedded Systems", "Signal Processing"],
    },
    {
      title: "Ph.D in Civil Engineering",
      duration: "3–5 years",
      departments: ["Structures", "Environment", "Water Resources"],
    },
    {
      title: "Ph.D in Electrical and Electronics Engineering",
      duration: "3–5 years",
      departments: ["Power Systems", "Drives", "Control Systems"],
    },
    {
      title: "Ph.D in Management",
      duration: "3–5 years",
      departments: ["Finance", "Marketing", "HR"],
    },
    {
      title: "Ph.D (Agriculture)",
      duration: "3–5 years",
      departments: ["Soil Science", "Plant Pathology", "Agronomy"],
    },
    {
      title: "Ph.D in Biotechnology (School of Studies)",
      duration: "3–5 years",
      departments: ["Bioprocess", "Genomics", "Bioinformatics"],
    },
    {
      title: "Ph.D in Zoology",
      duration: "3–5 years",
      departments: ["Entomology", "Ecology", "Genetics"],
    },
  ],
};

const categoryLabels: Record<string, string> = {
  undergraduate: "Undergraduate",
  postgraduate: "Postgraduate",
  phd: "PhD Programs",
  diploma: "Diploma Courses",
};

export default function ProgramCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const programs = programData[params.category as keyof typeof programData];
  const label = categoryLabels[params.category];

  if (!programs || !label) return notFound();

  return (
    <section className="min-h-screen pt-32 pb-20 mt-20 px-4 bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">All {label}</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-2">
                  Duration: {program.duration}
                </p>
                <p className="text-sm font-medium mb-1">Specializations:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  {program.departments.map((dept, i) => (
                    <li key={i}>• {dept}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  View Details <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <a href="/#programs">Back to Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
