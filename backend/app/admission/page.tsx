import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AdmissionPage() {
  return (
    <section className="min-h-screen mt-20 bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-10xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
            Admissions 2025-2026
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            GIET University invites applications for B.Tech, M.Tech, MBA, MCA,
            and B.Sc Agriculture through its exclusive entrance exam –{" "}
            <strong>GIETEE 2025</strong>. Begin your journey to success now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Programmes */}
          <Card className="shadow-xl border border-blue-100 h-[550px] flex flex-col justify-between">
            <CardHeader>
              <Image
                src="/images/giet1.jpeg"
                alt="GIET Programmes"
                width={800}
                height={200}
                className="rounded-xl w-full h-[200px] object-cover"
              />
              <CardTitle className="mt-4 text-blue-800 text-lg">
                GIET UNIVERSITY Programmes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-sm">
                GIET University offers B.Tech, B.Sc Agriculture, B.Sc Nursing,
                BBA, BCA, M.Sc, and M.Tech programmes. Explore your path in
                engineering, management, and applied sciences with expert
                faculty and practical exposure.
              </p>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" asChild>
                <a href="/programs" target="_blank">
                  View All
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: GIETEE Entrance Exam */}
          <Card className="shadow-xl border border-blue-100 h-[550px] flex flex-col justify-between">
            <CardHeader>
              <Image
                src="/images/giet2.jpg"
                alt="GIETEE"
                width={800}
                height={200}
                className="rounded-xl w-full h-[200px] object-cover"
              />
              <CardTitle className="mt-4 text-blue-800 text-lg">
                GIETEE Entrance Examination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-sm">
                GIETEE is the exclusive entrance test for B.Tech, M.Tech, MBA,
                MCA, and B.Sc Agriculture. No application fee for 2024. Download
                the prospectus to learn more or start your application now!
              </p>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="default" asChild>
                <a href="/apply" target="_blank">
                  Apply Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/pdf/GIET-Application-form-2021.pdf" target="_blank">
                  Prospectus
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 3: Fees Structure */}
          <Card className="shadow-xl border border-blue-100 h-[550px] flex flex-col justify-between">
            <CardHeader>
              <Image
                src="/images/admin.jpg"
                alt="Fees Structure"
                width={800}
                height={200}
                className="rounded-xl w-full h-[200px] object-cover"
              />
              <CardTitle className="mt-4 text-blue-800 text-lg">
                Fees Structure (2023–2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-sm">
                Check the complete fee structure for academic and hostel
                accommodations. Know the tuition costs and payment details to
                prepare for your future at GIET University.
              </p>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="default" asChild>
                <a href="/pdf/digital-brochure.pdf" target="_blank">
                  View PDF
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.giet.edu/" target="_blank">
                  Visit Website
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Application Procedure */}
        <div className="bg-white rounded-xl p-10 shadow-md border border-slate-100">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Application Procedure
          </h2>
          <p className="text-slate-700 mb-4">
            Application Form and Prospectus for admissions 2025 are available
            online. Follow the steps below to apply:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
            <li>
              Browse{" "}
              <a
                href="https://www.giet.edu/"
                className="text-blue-600 underline"
              >
                GIET University website
              </a>
            </li>
            <li>Click on "Admission Open 2025 - Apply Now"</li>
            <li>Register with your email address</li>
            <li>Login using your credentials</li>
            <li>Fill in the application form completely and correctly</li>
            <li>Submit and confirm your application</li>
            <li>Preview and print your application if required</li>
          </ol>

          <p className="font-medium text-slate-700 mb-2">
            Checklist before applying:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mb-6">
            <li>Scanned passport-size photo</li>
            <li>Academic marksheets (XII/graduation as applicable)</li>
            <li>Entrance test roll number and scores (if applicable)</li>
          </ul>

          <p className="text-sm text-slate-600 mb-4">
            <strong>Note:</strong> No application/exam fee is charged for GIETEE
            2025.
          </p>

          <div className="flex justify-center mt-6">
            <Button variant="default" className="items-center" asChild>
              <a href="https://www.giet.edu/" target="_blank">
                Apply on GIET Portal
              </a>
            </Button>
          </div>
        </div>

        {/* Contact & Offline Info */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Need Help?
          </h2>
          <p className="text-slate-700 mb-4">
            For queries contact:{" "}
            <a href="tel:+917735745535" className="text-blue-600">
              +91-7735745535
            </a>{" "}
            or mail at{" "}
            <a href="mailto:admission@giet.edu" className="text-blue-600">
              admission@giet.edu
            </a>
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Offline Application:
          </h3>
          <p className="text-slate-700 mb-4">
            Download the form, fill in the details and post to:
          </p>
          <p className="text-slate-700">
            <strong>Office of Dean Admissions</strong>
            <br />
            Central Admission Cell, Admin Block
            <br />
            GIET University, Gunupur
            <br />
            At – Gobriguda, Po – Kharling, Gunupur-765022
            <br />
            Dist – Rayagada, Odisha, India
          </p>
        </div>
      </div>
    </section>
  );
}
