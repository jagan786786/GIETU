export default function VisionMissionPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-100 text-gray-800">
      {/* Panel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto mb-16">
        {/* Mission Card */}
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/download (1).jpeg"
            alt="Mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-700 bg-opacity-60 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p>
              To create innovative and committed workforce... <br /> Promote
              education and research globally... <br /> Prepare future
              leaders...
            </p>
          </div>
        </div>

        {/* Culture Card */}
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/download.jpeg"
            alt="Culture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-700 bg-opacity-60 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p>
              Embracing innovation, integrity, and inclusive growth... <br />{" "}
              Creating lifelong learners and responsible citizens...
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/vision.jpg"
            alt="Vision"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-800 bg-opacity-60 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p>
              To be a globally recognized university... <br /> Fostering
              academic excellence, innovation, and entrepreneurship...
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Recognitions */}
      <section id="recognitions" className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/v.jpeg"
            alt="Accreditations"
            className="w-full h-[300px] object-cover rounded-xl shadow-xl"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Recognitions & Accreditations
            </h3>
            <p className="text-gray-700">
              GIET University is accredited by NBA and NAAC with top ratings and
              recognized by national bodies like UGC, AICTE, ICAR, DSIR, and
              INC. It is a proud member of AIU and has achieved global
              benchmarks in education and research.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Campus & Infrastructure */}
      <section id="infrastructure" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              World-Class Infrastructure
            </h3>
            <p className="text-gray-700">
              Located amidst lush greenery and the Eastern Ghats, the GIETU
              campus offers a peaceful, tech-driven learning environment. From
              modern labs to smart classrooms and hostels, it’s a hub for
              innovation and holistic growth.
            </p>
          </div>
          <img
            src="/images/campus.jpg"
            alt="Campus Infrastructure"
            className="w-full h-[300px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Section 3: Community & Tribal Upliftment */}
      <section id="social-impact" className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/employablility-05.jpg"
            alt="Tribal Upliftment"
            className="w-full h-[300px] object-cover rounded-xl shadow-xl"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Social Responsibility & Tribal Empowerment
            </h3>
            <p className="text-gray-700">
              GIETU has a mission-driven commitment to uplift meritorious
              students from tribal areas, providing them world-class
              opportunities to grow and represent the region on national and
              global platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
