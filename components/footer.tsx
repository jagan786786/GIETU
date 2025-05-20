import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.jpg?height=300&width=400"
                alt="University Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-4">
              Empowering minds, transforming lives through education, research, and innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/school/gietuniversitygunupur/posts/" },
                { icon: <Youtube className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Admissions", href: "#admission" },
                { label: "Faculty", href: "#faculty" },
                { label: "Campus Life", href: "#campus" },
                { label: "Research", href: "#" },
                { label: "Careers", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-slate-400" />
                <span className="text-slate-400">123 University Avenue, Academic City, State - 100001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-slate-400" />
                <span className="text-slate-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-slate-400" />
                <span className="text-slate-400">admissions@university.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for updates on admissions, events, and more.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-slate-800 border-slate-700 text-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} GIET University . All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
