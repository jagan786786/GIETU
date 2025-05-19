import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Home,
  Book,
  Coffee,
  Leaf,
  AmbulanceIcon as FirstAid,
} from "lucide-react";

export default function CampusLifeSection() {
  const campusFacilities = [
    {
      icon: <Home className="h-5 w-5" />,
      name: "Modern Hostels",
      description: "Comfortable accommodation with Wi-Fi and amenities",
    },
    {
      icon: <Book className="h-5 w-5" />,
      name: "Central Library",
      description: "Over 100,000 books and digital resources",
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      name: "Cafeterias",
      description: "Multiple dining options with diverse cuisine",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      name: "Green Campus",
      description: "Eco-friendly campus with beautiful gardens",
    },
    {
      icon: <FirstAid className="h-5 w-5" />,
      name: "Health Center",
      description: "24/7 medical services for students and staff",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      name: "Location",
      description: "Situated in a safe, accessible urban area",
    },
  ];

  return (
    <section id="campus" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Campus Life & Surroundings
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Experience a vibrant campus environment designed for learning and
            personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              State-of-the-Art Facilities
            </h3>
            <p className="text-slate-600 mb-6">
              Our campus spans 150 acres of beautifully landscaped grounds with
              modern facilities designed to enhance your educational experience.
              From cutting-edge laboratories to comfortable living spaces, we
              provide everything you need to thrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {campusFacilities.map((facility, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{facility.name}</h4>
                    <p className="text-sm text-slate-500">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button>Take a Virtual Tour</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/wifi-facility.jpg"
              alt="Campus library"
              width={300}
              height={200}
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <Image
              src="/images/hostel1.jpg"
              alt="Student hostel"
              width={300}
              height={200}
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <Image
              src="/images/temple-main-banner.jpg"
              alt="Campus garden"
              width={300}
              height={200}
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
            <Image
              src="/images/cool-parlour-opt.jpg"
              alt="Campus cafeteria"
              width={300}
              height={200}
              className="h-48 w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Surrounding Area</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Transportation</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 10 minutes from the city center</li>
                <li>• Regular shuttle service to downtown</li>
                <li>• 15 minutes from the train station</li>
                <li>• 30 minutes from the international airport</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Amenities</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Shopping malls within 5km radius</li>
                <li>• Restaurants and cafes nearby</li>
                <li>• Banks and ATMs on campus</li>
                <li>• Hospitals and clinics in close proximity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Recreation</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Parks and nature reserves</li>
                <li>• Movie theaters and entertainment</li>
                <li>• Museums and cultural centers</li>
                <li>• Sports facilities and fitness centers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
