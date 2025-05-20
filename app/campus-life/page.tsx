"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const lifeAtGiet = [
  {
    title: "GIETU Badminton Ground",
    description:
      "The physical wellness mantra is the best way to increase students’ efficiency and productivity.",
    image: "/images/bg.jpg",
  },
  {
    title: "GIETU Football Field",
    description:
      "Physical development is the ability to live a good life and have fit and fine body.",
    image: "/images/fg.jpg",
  },
  {
    title: "GIETU Canteen",
    description:
      "The canteen is one of the most happening places inside the campus of GIET University.",
    image: "/images/c.jpg",
  },
  {
    title: "GIETU Open Gym",
    description:
      "The overall well-being of students and staff is the cornerstone of GIETU.",
    image: "/images/og.jpg",
  },
];

const achievements = [
  {
    title: "Smart India Hackathon 2023",
    description:
      "Grand Finale winner in Smart India Hackathon 2023 for innovation in tech solutions.",
    image: "/images/sh.jpeg",
  },
  {
    title: "Powerlifting Championship",
    description:
      "Champion at the Undivided KBK Bodybuilding & Powerlifting meet.",
    image: "/images/pl1.jpeg",
  },
  {
    title: "Academic Excellence Award",
    description:
      "GIETU received the prestigious Academic Excellence Award from IIT Bombay.",
    image: "/images/ae.jpg",
  },
  {
    title: "Academic Excellence Award",
    description:
      "GIETU received the prestigious Academic Excellence Award from IIT Bombay.",
    image: "/images/ae.jpg",
  },
  {
    title: "Academic Excellence Award",
    description:
      "GIETU received the prestigious Academic Excellence Award from IIT Bombay.",
    image: "/images/ae.jpg",
  },
  {
    title: "Academic Excellence Award",
    description:
      "GIETU received the prestigious Academic Excellence Award from IIT Bombay.",
    image: "/images/ae.jpg",
  },
];

const events = [
  {
    title: "Navigating the Path of Success",
    description:
      "Motivational seminar to guide students towards career excellence – 13th Sept 2024.",
    image: "/images/ss.jpg",
  },
  {
    title: "Akshaya Tritiya Celebration",
    description:
      "A traditional festival celebrated with joy at the School of Agriculture.",
    image: "/images/ak.jpg",
  },
  {
    title: "ARPESCS 2024",
    description:
      "National Conference on e-Commerce and IT – held in April 2024.",
    image: "/images/ar.jpg",
  },
  {
    title: "ARPESCS 2024",
    description:
      "National Conference on e-Commerce and IT – held in April 2024.",
    image: "/images/ar.jpg",
  },
  {
    title: "ARPESCS 2024",
    description:
      "National Conference on e-Commerce and IT – held in April 2024.",
    image: "/images/ar.jpg",
  },
  {
    title: "ARPESCS 2024",
    description:
      "National Conference on e-Commerce and IT – held in April 2024.",
    image: "/images/ar.jpg",
  },
  {
    title: "ARPESCS 2024",
    description:
      "National Conference on e-Commerce and IT – held in April 2024.",
    image: "/images/ar.jpg",
  },
];

const Section = ({
  title,
  subtitle,
  description,
  data,
}: {
  title: string;
  subtitle?: string;
  description: string;
  data: any[];
}) => (
  <section className="max-w-6xl mx-auto my-16 px-4">
    <div className="mb-8 text-center">
      {title && (
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      )}
      {subtitle && (
        <h3 className="text-lg text-slate-900 font-semibold mb-2">{subtitle}</h3>
      )}
      <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      style={{ paddingBottom: "40px" }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex flex-col h-full">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 flex-grow">{item.description}</p>
            <a
              href="#"
              className="mt-4 text-sm text-red-600 hover:underline font-medium"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default function CampusLife() {
  return (
    <main className="bg-white pt-28 pb-20 mt-20 px-6 min-h-screen">
      {/* Page Introduction */}
      <section className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          LIFE AT GIET UNIVERSITY
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          GIET University offers a dynamic and engaging campus life, encouraging
          students to grow academically, physically, and personally through a
          rich blend of academics, sports, and culture.
        </p>
        <p className="text-gray-700">
          Our community thrives on innovation, inclusion, and inspiration –
          nurturing leaders for a better future.
        </p>
      </section>

      {/* Sections */}
      <Section
        title="Campus Life"
        description="Whether it's sports, wellness, or social bonding, life at GIETU is vibrant and enriching with world-class infrastructure and inclusive campus culture."
        data={lifeAtGiet}
      />

      <Section
        title="Our Achievements"
        subtitle="Pride in Excellence"
        description="GIET University has been consistently recognized at national platforms for its academic brilliance, technological innovation, and athletic achievements."
        data={achievements}
      />

      <Section
        title="Recent Events"
        subtitle="Moments that Matter"
        description="From international conferences to cultural celebrations, our events showcase the dynamic pulse of GIETU's intellectual and social life."
        data={events}
      />
    </main>
  );
}
