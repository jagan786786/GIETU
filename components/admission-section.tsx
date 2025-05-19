import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Download, FileText, HelpCircle } from "lucide-react"

export default function AdmissionSection() {
  const admissionSteps = [
    {
      title: "Online Application",
      description: "Complete the online application form with your personal and academic details",
    },
    {
      title: "Entrance Examination",
      description: "Take the university entrance exam or submit standardized test scores",
    },
    {
      title: "Document Verification",
      description: "Submit required documents for verification",
    },
    {
      title: "Interview",
      description: "Attend an interview (for specific programs)",
    },
    {
      title: "Admission Offer",
      description: "Receive admission offer and complete fee payment",
    },
  ]

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025" },
    { event: "Application Deadline", date: "March 31, 2025" },
    { event: "Entrance Examination", date: "April 15-20, 2025" },
    { event: "Results Announcement", date: "May 10, 2025" },
    { event: "First Round Admissions", date: "May 15-30, 2025" },
    { event: "Classes Begin", date: "August 1, 2025" },
  ]

  const faqs = [
    {
      question: "What are the eligibility criteria for admission?",
      answer:
        "Eligibility varies by program. Generally, undergraduate programs require a minimum of 60% in high school, while postgraduate programs require a bachelor's degree with at least 55% marks in the relevant field.",
    },
    {
      question: "Is there a hostel facility available for all students?",
      answer:
        "Yes, we provide hostel facilities for both boys and girls. However, allocation is based on availability and distance from hometown.",
    },
    {
      question: "What scholarships are available?",
      answer:
        "We offer merit-based scholarships, need-based financial aid, and sports scholarships. Details are available in the scholarship section of our website.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Yes, we welcome international students. The application process is similar, but additional documentation like visa and passport details are required.",
    },
    {
      question: "Is there a placement cell?",
      answer:
        "Yes, our Career Development Center works with students from day one to prepare them for placements and connects them with top employers.",
    },
  ]

  return (
    <section id="admission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Admission Information</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">Everything you need to know about joining our university</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Admission Process</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              {/* Timeline items */}
              <div className="space-y-8 relative">
                {admissionSteps.map((step, index) => (
                  <div key={index} className="ml-12 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white">
                      {index + 1}
                    </div>
                    <h4 className="font-medium mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Prospectus
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Eligibility Criteria
              </Button>
            </div>
          </div>

          <div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 mr-2 text-slate-700" />
                  <h3 className="text-xl font-bold">Important Dates</h3>
                </div>

                <div className="space-y-3">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex justify-between pb-2 border-b border-slate-100">
                      <span className="font-medium">{item.event}</span>
                      <span className="text-slate-600">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center mb-4">
                <HelpCircle className="h-5 w-5 mr-2 text-slate-700" />
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
