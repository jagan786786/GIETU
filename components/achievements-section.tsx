import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Briefcase, Users } from "lucide-react"

export default function AchievementsSection() {
  const achievementCategories = [
    { id: "academic", label: "Academic", icon: <BookOpen className="h-5 w-5" /> },
    { id: "research", label: "Research", icon: <Award className="h-5 w-5" /> },
    { id: "placements", label: "Placements", icon: <Briefcase className="h-5 w-5" /> },
    { id: "alumni", label: "Alumni", icon: <Users className="h-5 w-5" /> },
  ]

  const achievements = {
    academic: [
      {
        title: "National Excellence Award",
        year: "2023",
        description: "Awarded for outstanding contribution to higher education",
      },
      {
        title: "Top 10 Engineering Colleges",
        year: "2022",
        description: "Ranked 7th in the national engineering college rankings",
      },
      {
        title: "Best Business School",
        year: "2022",
        description: "Recognized as one of the top 5 business schools in the region",
      },
      { title: "Academic Innovation Award", year: "2021", description: "For pioneering new teaching methodologies" },
    ],
    research: [
      {
        title: "Research Grant - $2.5M",
        year: "2023",
        description: "For advanced research in renewable energy technologies",
      },
      { title: "150+ Research Papers", year: "2022", description: "Published in international peer-reviewed journals" },
      {
        title: "15 Patents Filed",
        year: "2021-2023",
        description: "In areas of AI, biotechnology, and sustainable engineering",
      },
      { title: "Research Collaboration", year: "2022", description: "With MIT, Stanford, and Oxford University" },
    ],
    placements: [
      { title: "98% Placement Rate", year: "2023", description: "For engineering and business graduates" },
      { title: "Average Package: $85,000", year: "2023", description: "For computer science graduates" },
      { title: "Top Recruiters", year: "2023", description: "Google, Microsoft, Amazon, Apple, and Meta" },
      {
        title: "International Placements",
        year: "2023",
        description: "25% of graduates placed in international companies",
      },
    ],
    alumni: [
      {
        title: "CEO of Fortune 500 Company",
        year: "Class of 2005",
        description: "John Smith, CEO of Tech Innovations Inc.",
      },
      {
        title: "Nobel Prize Winner",
        year: "Class of 1998",
        description: "Dr. Maria Rodriguez, Nobel Prize in Physics",
      },
      {
        title: "Government Leaders",
        year: "Various",
        description: "3 ministers, 5 senators, and 12 state representatives",
      },
      {
        title: "Successful Entrepreneurs",
        year: "Various",
        description: "Founded startups with combined valuation of $10B+",
      },
    ],
  }

  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">Celebrating excellence in academics, research, and beyond</p>
        </div>

        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {achievementCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(achievements).map(([category, achievementList]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievementList.map((achievement, index) => (
                  <Card key={index} className="border-l-4 border-l-slate-700">
                    <CardContent className="p-6">
                      <p className="text-sm text-slate-500 mb-1">{achievement.year}</p>
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-slate-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
