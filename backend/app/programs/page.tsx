import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-36 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
          Academic Programs & Departments
        </h1>

        {/* General Info Cards */}
        <GridSection
          title="Explore"
          items={[
            "Schools",
            "Authorities",
            "Innovations",
            "Academic Integrity Committee (AIC)",
            "IQAC",
          ]}
        />

        {/* UG Programs */}
        <GridSection
          title="Undergraduate Programs"
          items={[
            "B. Tech in Computer Science & Engineering",
            "B. Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
            "B. Tech in Computer Science and Engineering (IoT)",
            "B. Tech in Computer Science and Engineering (Data Science)",
            "B. Tech in Computer Science and Technology",
            "B. Tech in Agricultural Engineering",
            "B. Tech in Mechanical Engineering",
            "B. Tech in Biotechnology",
            "B. Tech in Chemical Engineering",
            "B. Tech in Civil Engineering",
            "B. Tech in Electrical Engineering",
            "B. Tech in Electrical and Electronics Engineering",
            "B. Tech in Electronics and Communication Engineering",
            "B. Tech in Electronics Engineering (VLSI Design and Technology)",
            "B. Tech in Electronics & Communication (Advanced Communication Technology)",
            "B.Sc. (Hons.) Agriculture",
            "Bachelor of Business Administration (BBA)",
            "Bachelor of Computer Applications (BCA)",
            "B.Sc in Nursing",
          ]}
        />

        {/* PG Programs */}
        <GridSection
          title="Postgraduate Programs"
          items={[
            "Master of Business Administration (MBA)",
            "M. Tech in Computer Science & Engineering",
            "M. Tech in Manufacturing Technology",
            "M. Tech in Heat Power and Thermal Engineering",
            "M. Tech in Machine Design",
            "M. Tech in Biotechnology",
            "M. Tech in Chemical Engineering",
            "M. Tech in Structural Engineering",
            "M. Tech in Construction Technology & Management",
            "M. Tech in Power Electronics",
            "M. Tech in Electronics & Communication Engineering",
            "M. Tech in Electronics & Communication (Advanced Communication Technology)",
            "M. Tech in Electronics & Communication (VLSI Design)",
            "Master of Computer Applications (MCA)",
            "M.Sc in Physics",
            "M.Sc in Chemistry",
            "M.Sc in Mathematics",
            "M.Sc in Life Science",
            "M.Sc in Biotechnology",
            "M.A. in English",
            "M.A. in Economics",
          ]}
        />

        {/* Doctoral Programs */}
        <GridSection
          title="Doctoral Programs"
          items={[
            "Ph.D in Physics",
            "Ph.D in Chemistry",
            "Ph.D in Mathematics",
            "Ph.D in Biotechnology",
            "Ph.D in Computer Science and Engineering",
            "Ph.D in Computer Science and Application",
            "Ph.D in Mechanical Engineering",
            "Ph.D in Chemical Engineering",
            "Ph.D in Electronics & Communication Engineering",
            "Ph.D in Civil Engineering",
            "Ph.D in Electrical and Electronics Engineering",
            "Ph.D in Management",
            "Ph.D (Agriculture)",
            "Ph.D in Biotechnology (School of Studies)",
            "Ph.D in Zoology",
          ]}
        />

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-slate-900 text-white hover:bg-slate-800"
            asChild
          >
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Reusable grid section
function GridSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-slate-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card
            key={item}
            className="bg-white shadow-md rounded-xl hover:shadow-lg transition"
          >
            <CardContent className="p-4 text-slate-700 font-medium">
              {item}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
